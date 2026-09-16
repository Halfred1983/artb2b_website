import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Lock, ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ArtB2B",
  description: "Privacy Policy for ArtB2B. Learn how we collect, use, share, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="py-16 sm:py-20 bg-white border-b border-zinc-200/60 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-950 uppercase tracking-wider mb-8 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>

            <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/25 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-zinc-900" />
              Privacy & Data Protection
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mt-4 mb-4">
              Privacy Policy for ArtB2B
            </h1>

            <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-2xl">
              This policy explains how <strong className="text-zinc-950">ArtB2B</strong> collects, uses, shares, and protects your personal data when you use our website and mobile application.
            </p>

            <div className="mt-6">
              <Link
                href="/terms-and-conditions"
                className="text-xs font-bold text-zinc-600 hover:text-zinc-950 underline transition-colors"
              >
                View Terms and Conditions &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 font-sans">
            <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
              
              {/* 1. Introduction */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">1</span>
                  Introduction
                </h2>
                <p>
                  ArtB2B values your privacy and is committed to protecting your personal data. This policy explains how we collect, use, share, and protect your information.
                </p>
              </div>

              {/* 2. Data Collection */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">2</span>
                  Data Collection
                </h2>
                <p className="mb-3">We collect information you provide when creating an account, such as:</p>
                <ul className="space-y-2.5 list-disc pl-5 text-zinc-700">
                  <li>Personal identification information (name, email, phone number).</li>
                  <li>Payment details for venues (e.g., IBAN).</li>
                  <li>Information related to bookings, such as venue details and artwork information.</li>
                </ul>
              </div>

              {/* 3. How We Use Your Data */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">3</span>
                  How We Use Your Data
                </h2>
                <ul className="space-y-2.5 list-disc pl-5 text-zinc-700">
                  <li>To facilitate bookings and communication between artists and venues.</li>
                  <li>To process payments and payouts.</li>
                  <li>To provide customer support and address any issues.</li>
                  <li>To send notifications related to your bookings and account activity.</li>
                </ul>
              </div>

              {/* 4. Sharing Your Data */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">4</span>
                  Sharing Your Data
                </h2>
                <ul className="space-y-2.5 list-disc pl-5 text-zinc-700">
                  <li>We may share information with payment service providers to facilitate payouts.</li>
                  <li>We may also share data with venues or artists to facilitate bookings and exhibitions.</li>
                  <li>Your information will not be sold to third parties.</li>
                </ul>
              </div>

              {/* 5. Data Security */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">5</span>
                  Data Security
                </h2>
                <p>
                  We use secure servers and encryption to protect your data. We limit access to your data to authorized personnel only.
                </p>
              </div>

              {/* 6. Your Rights */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">6</span>
                  Your Rights
                </h2>
                <ul className="space-y-2.5 list-disc pl-5 text-zinc-700">
                  <li>You have the right to access, modify, or delete your personal information at any time.</li>
                  <li>You can opt out of promotional communications.</li>
                </ul>
              </div>

              {/* 7. Retention */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">7</span>
                  Retention
                </h2>
                <p>
                  We will retain your information for as long as needed to provide you with our services or as required by law.
                </p>
              </div>

              {/* 8. Changes to This Policy */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">8</span>
                  Changes to This Policy
                </h2>
                <p>
                  We may update this policy occasionally. We will notify you of significant changes via email or app notifications.
                </p>
              </div>

              {/* 9. Contact Us */}
              <div className="bg-zinc-950 text-white p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-md">
                <h2 className="font-heading text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-brand-accent" />
                  9. Contact Us
                </h2>
                <p className="text-zinc-300 mb-4">
                  For any questions about this policy or your data, please contact us at:
                </p>
                <a
                  href="mailto:support@artb2b.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-colors"
                >
                  support@artb2b.com
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
