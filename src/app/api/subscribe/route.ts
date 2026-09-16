import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getSubscribersCollection, getMailCollection } from "@/lib/firebase-admin";

const NOTIFICATION_RECIPIENTS = ["info@artb2b.art"];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const subscribersCol = getSubscribersCollection();
    const mailCol = getMailCollection();

    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const userAgent = request.headers.get("user-agent") ?? null;

    if (subscribersCol) {
      await subscribersCol.add({
        email,
        source: "footer_newsletter",
        ipAddress,
        userAgent,
        createdAt: FieldValue.serverTimestamp(),
      });
    }

    if (mailCol) {
      await mailCol.add({
        to: NOTIFICATION_RECIPIENTS,
        message: {
          subject: `New ArtB2B Newsletter Subscriber: ${email}`,
          html: `<p>New subscriber joined via the website footer newsletter: <strong>${email}</strong></p>`,
        },
      });
    }

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe API error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
