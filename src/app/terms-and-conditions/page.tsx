import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, FileText, Lock, Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions & Privacy Policy | ArtB2B",
  description:
    "These terms and conditions outline the rules and regulations for the use of ARTB2B ltd's Website, located at https://artb2b.art.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero Section */}
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
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-900" />
              Legal & Compliance
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mt-4 mb-4">
              Terms and Conditions & Privacy Policy
            </h1>

            <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-2xl">
              Welcome to <strong className="text-zinc-950">artb2b.art</strong>! These terms and conditions outline the rules and regulations for the use of <strong className="text-zinc-950">ARTB2B ltd&apos;s</strong> Website, located at{" "}
              <a href="https://artb2b.art" className="text-zinc-950 underline hover:text-brand-accent-hover">
                https://artb2b.art
              </a>
              .
            </p>

            {/* Jump links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#terms"
                className="px-4 py-2 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-bold font-sans transition-colors inline-flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                Terms and Conditions
              </a>
              <a
                href="#privacy"
                className="px-4 py-2 rounded-xl bg-zinc-100 text-zinc-800 hover:bg-zinc-200 text-xs font-bold font-sans transition-colors inline-flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                Privacy Policy
              </a>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 font-sans">
            
            {/* PART 1: TERMS AND CONDITIONS */}
            <div id="terms" className="scroll-mt-28 mb-20">
              <div className="border-b border-zinc-200 pb-6 mb-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/15 text-zinc-950 flex items-center justify-center flex-shrink-0 font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-950">
                    Terms and Conditions for ArtB2B
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1">Please read these terms carefully before using our services.</p>
                </div>
              </div>

              <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
                
                {/* 1. Introduction */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">1</span>
                    Introduction
                  </h3>
                  <p>
                    Welcome to ArtB2B. By using our services, you agree to be bound by these terms and conditions. These terms govern the relationship between artists and venues, as well as the use of our app. Please read them carefully.
                  </p>
                </div>

                {/* 2. Service Overview */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">2</span>
                    Service Overview
                  </h3>
                  <p>
                    ArtB2B facilitates the booking of exhibition spaces for artists in various venues. Artists can make reservations and venues can approve or decline booking requests. ArtB2B retains a percentage of each booking fee as a commission.
                  </p>
                </div>

                {/* 3. Booking Process */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">3</span>
                    Booking Process
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>Artists can send booking requests for available spaces in venues.</li>
                    <li>Venues have the right to accept or reject booking requests.</li>
                    <li>Once a booking is confirmed, it is added to both the artist&apos;s and venue&apos;s calendar.</li>
                  </ul>
                </div>

                {/* 4. Payment */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">4</span>
                    Payment
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>Artists are responsible for covering the cost of shipping their artwork to the city where the venue is located.</li>
                    <li>A percentage of the venue&apos;s payout will be retained by ArtB2B as commission.</li>
                    <li>Payments to the venues will be consolidated and issued periodically (e.g., monthly) to the bank account (IBAN) indicated by the venue owner.</li>
                  </ul>
                </div>

                {/* 5. Artist Responsibilities */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">5</span>
                    Artist Responsibilities
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>Artists are responsible for transporting their artwork to the venue on the day of check in and installing it in the space allocated by the venue owner.</li>
                    <li>If an artwork is sold during the exhibition, the artist must wait until the end of the exhibition to hand it over to the buyer.</li>
                    <li>At the end of the exhibition, artists are required to take back their artwork.</li>
                  </ul>
                </div>

                {/* 6. Venue Responsibilities */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">6</span>
                    Venue Responsibilities
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>Venues are responsible for providing the allocated space for the artist&apos;s exhibition.</li>
                    <li>Venues have the right to determine which space is allocated to which artist.</li>
                  </ul>
                </div>

                {/* 7. Cancellations */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">7</span>
                    Cancellations
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>Either the artist or the venue can cancel a booking before it is confirmed.</li>
                    <li>Once confirmed, cancellation policies may apply, and cancellation fees may be incurred.</li>
                  </ul>
                </div>

                {/* 8. Commission and Payouts */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">8</span>
                    Commission and Payouts
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>ArtB2B will retain a commission from each booking made.</li>
                    <li>Payouts will be issued to venues periodically based on the accumulated balance.</li>
                  </ul>
                </div>

                {/* 9. Limitation of Liability */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">9</span>
                    Limitation of Liability
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>ArtB2B is not responsible for any damages, loss, or theft of artwork during transport or exhibition.</li>
                    <li>Artists and venues agree to hold ArtB2B harmless from any liability related to their engagement.</li>
                  </ul>
                </div>

                {/* 10. Amendments */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">10</span>
                    Amendments
                  </h3>
                  <p>
                    ArtB2B reserves the right to modify these terms at any time. Users will be notified of any major changes.
                  </p>
                </div>

              </div>
            </div>

            {/* PART 2: PRIVACY POLICY */}
            <div id="privacy" className="scroll-mt-28 pt-8">
              <div className="border-b border-zinc-200 pb-6 mb-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/15 text-zinc-950 flex items-center justify-center flex-shrink-0 font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-950">
                    Privacy Policy for ArtB2B
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1">How we collect, use, share, and safeguard your personal data.</p>
                </div>
              </div>

              <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
                
                {/* 1. Introduction */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">1</span>
                    Introduction
                  </h3>
                  <p>
                    ArtB2B values your privacy and is committed to protecting your personal data. This policy explains how we collect, use, share, and protect your information.
                  </p>
                </div>

                {/* 2. Data Collection */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">2</span>
                    Data Collection
                  </h3>
                  <p className="mb-3">We collect information you provide when creating an account, such as:</p>
                  <ul className="space-y-2.5 list-disc pl-5 text-zinc-700">
                    <li>Personal identification information (name, email, phone number).</li>
                    <li>Payment details for venues (e.g., IBAN).</li>
                    <li>Information related to bookings, such as venue details and artwork information.</li>
                  </ul>
                </div>

                {/* 3. How We Use Your Data */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">3</span>
                    How We Use Your Data
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>To facilitate bookings and communication between artists and venues.</li>
                    <li>To process payments and payouts.</li>
                    <li>To provide customer support and address any issues.</li>
                    <li>To send notifications related to your bookings and account activity.</li>
                  </ul>
                </div>

                {/* 4. Sharing Your Data */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">4</span>
                    Sharing Your Data
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>We may share information with payment service providers to facilitate payouts.</li>
                    <li>We may also share data with venues or artists to facilitate bookings and exhibitions.</li>
                    <li>Your information will not be sold to third parties.</li>
                  </ul>
                </div>

                {/* 5. Data Security */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">5</span>
                    Data Security
                  </h3>
                  <p>
                    We use secure servers and encryption to protect your data. We limit access to your data to authorized personnel only.
                  </p>
                </div>

                {/* 6. Your Rights */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">6</span>
                    Your Rights
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>You have the right to access, modify, or delete your personal information at any time.</li>
                    <li>You can opt out of promotional communications.</li>
                  </ul>
                </div>

                {/* 7. Retention */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">7</span>
                    Retention
                  </h3>
                  <p>
                    We will retain your information for as long as needed to provide you with our services or as required by law.
                  </p>
                </div>

                {/* 8. Changes to This Policy */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">8</span>
                    Changes to This Policy
                  </h3>
                  <p>
                    We may update this policy occasionally. We will notify you of significant changes via email or app notifications.
                  </p>
                </div>

                {/* 9. Contact Us */}
                <div className="bg-zinc-950 text-white p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-md">
                  <h3 className="font-heading text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-brand-accent" />
                    9. Contact Us
                  </h3>
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

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
