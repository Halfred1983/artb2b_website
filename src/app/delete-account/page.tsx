"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { UserX, ArrowLeft, Mail, AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim() || formData.email,
          email: formData.email,
          role: "account_deletion",
          message: formData.message || "Request to delete ArtB2B account and all associated data.",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setErrorMessage(data.error || "Failed to submit request. Please email us directly.");
      }
    } catch {
      setErrorMessage("Network error. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="py-16 sm:py-20 bg-white border-b border-zinc-200/60 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl -z-10" />
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-950 uppercase tracking-wider mb-8 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>

            <span className="px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
              <UserX className="w-3.5 h-3.5 text-red-600" />
              Account & Privacy
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mt-4 mb-4">
              Delete your account
            </h1>

            <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-2xl">
              If you would like to delete your account, you can do so by completing the form below. Alternatively, you can contact our customer service at{" "}
              <a href="mailto:info@artb2b.art" className="text-zinc-950 font-bold underline hover:text-brand-accent-hover">
                info@artb2b.art
              </a>
              , providing your full name and the email associated with your account.
            </p>

            <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs sm:text-sm leading-relaxed">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Important:</strong> Please note that all your data, including booking history and any uploaded images, will be permanently deleted once the request is processed.
              </span>
            </div>
          </div>
        </section>

        {/* Form Container */}
        <section className="py-16 sm:py-24">
          <div className="max-w-2xl mx-auto px-6 sm:px-8 font-sans">
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm relative">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-zinc-950 mb-2">Request Received</h3>
                  <p className="text-sm text-zinc-600 max-w-md leading-relaxed">
                    Your account deletion request has been submitted. Our team will verify your identity and process the permanent deletion of your account and associated data within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:bg-white focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:bg-white focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                      Account Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="account@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:bg-white focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                      Optional Notes or Reason
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please delete my account and associated data..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:bg-white focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-zinc-400 text-white font-bold rounded-2xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Account Deletion Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-zinc-400">
                    Prefer direct email? Send your request to{" "}
                    <a href="mailto:info@artb2b.art?subject=Account%20Deletion%20Request" className="text-zinc-700 font-bold underline">
                      info@artb2b.art
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
