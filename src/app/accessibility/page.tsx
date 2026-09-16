import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Accessibility, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | ArtB2B",
  description: "ARTB2B is committed to ensuring that our platform and website are accessible to everyone, including people with disabilities.",
};

export default function AccessibilityPage() {
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
              <Accessibility className="w-3.5 h-3.5 text-zinc-900" />
              Equal Access
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mt-4 mb-4">
              Accessibility Statement
            </h1>

            <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-2xl">
              ARTB2B is committed to ensuring that our platform and website are accessible to everyone, including people with disabilities. We believe that all artists, venue hosts, and art enthusiasts should have equal access to our platform, and we continuously work to improve the accessibility of our services.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 font-sans">
            <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3">
                  Our Ongoing Commitment
                </h2>
                <p>
                  This statement reflects our ongoing efforts to make ARTB2B accessible to all individuals. We are dedicated to providing a user friendly experience for people with disabilities, and we strive to adhere to recognized web accessibility standards, including the Web Content Accessibility Guidelines (WCAG 2.1).
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3">
                  What Web Accessibility Means to Us
                </h2>
                <p>
                  Web accessibility ensures that individuals with disabilities can perceive, understand, navigate, and interact with our digital tools. It means providing equal opportunities for all users, regardless of physical or cognitive abilities.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3">
                  Accessibility Features Implemented
                </h2>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Semantic HTML Markup:</strong> Clear heading hierarchies and landmarks to facilitate screen reader navigation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>High Contrast & Clean Typography:</strong> Readable text contrasts and responsive sizing across mobile, tablet, and desktop screens.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Keyboard Navigability:</strong> Accessible interactive elements with visible focus rings and logical tab order.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Descriptive Media:</strong> Alt text on key visual elements and artwork previews.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-950 text-white p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-md">
                <h2 className="font-heading text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-brand-accent" />
                  Requests, Feedback & Contact
                </h2>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  If you encounter any accessibility barriers or have suggestions for improving accessibility across ARTB2B, we warmly welcome your feedback. Please reach out to our team at:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@artb2b.art?subject=Accessibility%20Inquiry"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-colors"
                  >
                    info@artb2b.art
                  </a>
                  <a
                    href="mailto:support@artb2b.com?subject=Accessibility%20Inquiry"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-colors"
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
