import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getLeadsCollection, getMailCollection } from "@/lib/firebase-admin";

const NOTIFICATION_RECIPIENTS = ["info@artb2b.art"];

type LeadPayload = {
  name: string;
  email: string;
  role: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendEmailViaResend(lead: LeadPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) return false;

  const fromAddress = process.env.RESEND_FROM_EMAIL ?? "Artb2b <no-reply@artb2b.art>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: NOTIFICATION_RECIPIENTS,
        reply_to: lead.email,
        subject: `New ArtB2B Partner Lead: ${lead.name} (${lead.role.toUpperCase()})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 16px; background-color: #ffffff;">
            <h2 style="color: #09090b; margin-top: 0; margin-bottom: 16px;">🎨 New Partner Inquiry</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: bold; width: 120px; color: #71717a;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #09090b;">${escapeHtml(lead.name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: bold; color: #71717a;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #09090b;"><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: bold; color: #71717a;">Role:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #09090b;">
                  <span style="background: #f4f4f5; color: #18181b; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; font-size: 11px; font-weight: 700;">
                    ${escapeHtml(lead.role)}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; vertical-align: top; font-weight: bold; color: #71717a;">Message:</td>
                <td style="padding: 12px 0; color: #18181b; line-height: 1.6;">${escapeHtml(lead.message || "No message provided")}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f4f4f5; font-size: 12px; color: #a1a1aa;">
              Received via artb2b.art website partner inquiry form.
            </div>
          </div>
        `,
      }),
    });
    return res.ok;
  } catch (err) {
    console.error("Resend send error:", err);
    return false;
  }
}

async function storeLeadAndNotifyFirebase(lead: LeadPayload, request: NextRequest) {
  try {
    const leadsCol = getLeadsCollection();
    const mailCol = getMailCollection();

    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const userAgent = request.headers.get("user-agent") ?? null;

    if (leadsCol) {
      await leadsCol.add({
        ...lead,
        recipients: NOTIFICATION_RECIPIENTS,
        source: "website_partner_form",
        ipAddress,
        userAgent,
        createdAt: FieldValue.serverTimestamp(),
      });
    }

    if (mailCol) {
      await mailCol.add({
        to: NOTIFICATION_RECIPIENTS,
        message: {
          subject: `New ArtB2B Partner Lead: ${lead.name} (${lead.role.toUpperCase()})`,
          html: `
            <h2>New Partner Inquiry on ArtB2B</h2>
            <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
            <p><strong>Role:</strong> ${escapeHtml(lead.role)}</p>
            <p><strong>Message:</strong> ${escapeHtml(lead.message || "No message provided")}</p>
          `,
        },
      });
    }

    return true;
  } catch (err) {
    console.error("Firebase store error:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const lead: LeadPayload = {
      name: typeof body.name === "string" ? body.name.trim() : "",
      email: typeof body.email === "string" ? body.email.trim() : "",
      role: typeof body.role === "string" ? body.role.trim() : "artist",
      message: typeof body.message === "string" ? body.message.trim() : "",
    };

    if (!lead.name || !lead.email || !lead.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(lead.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    await Promise.allSettled([
      storeLeadAndNotifyFirebase(lead, request),
      sendEmailViaResend(lead),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We'll review your details shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
