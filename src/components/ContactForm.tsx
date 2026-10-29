"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Paintbrush,
  Building2,
  HelpCircle,
  Sparkles,
  Loader2,
  Award,
} from "lucide-react";

interface ContactFormProps {
  defaultRole?: "artist" | "venue" | "ambassador" | "other";
}

export default function ContactForm({ defaultRole = "venue" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: defaultRole,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", role: defaultRole, message: "" });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 6000);
      } else {
        setErrorMessage(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="partner-form" className="py-24 bg-white relative overflow-hidden border-t border-zinc-200/60">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-[300px] h-[300px] bg-zinc-100 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="px-3 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
              Get in Touch
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-none mb-6">
              Partner With ARTB2B
            </h2>
            <p className="font-sans text-base text-zinc-600 max-w-lg mb-10 leading-relaxed">
              Whether you are a venue looking to join the ARTB2B Art Gallery Network or an artist exploring our Subscription and Pay by Day exhibition options, our team is ready to help.
            </p>

            {/* Quick Benefits list */}
            <div className="flex flex-col gap-6 w-full max-w-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-zinc-900 flex items-center justify-center shrink-0 shadow-sm">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 mb-1">For Participating Venues</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Transform your venue into a place where people discover original art. ARTB2B coordinates artwork selection, installation and regular rotations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-zinc-900 flex items-center justify-center shrink-0 shadow-sm">
                  <Paintbrush className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 mb-1">For Visual Artists</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Exhibit across cafés, restaurants, hotels and creative spaces with a managed Subscription from our Hoxton hub or flexible Pay by Day bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-50 border border-zinc-200/80 p-8 sm:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center bg-white border border-zinc-200 rounded-3xl animate-fade-in shadow-sm min-h-[380px]">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950">Message Sent Successfully</h3>
                  <p className="text-sm text-zinc-500 mt-2 max-w-[280px] mx-auto leading-relaxed">
                    Our curatorial and partnerships team will review your details and connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-6 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 placeholder-zinc-400 transition-colors shadow-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 placeholder-zinc-400 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Role Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                      I am inquiring as a
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white border border-zinc-200 p-1.5 rounded-2xl shadow-sm">
                      {(["venue", "artist", "ambassador", "other"] as const).map((roleVal) => {
                        const Icon =
                          roleVal === "artist"
                            ? Paintbrush
                            : roleVal === "venue"
                            ? Building2
                            : roleVal === "ambassador"
                            ? Award
                            : HelpCircle;
                        const labelText =
                          roleVal === "artist"
                            ? "Artist"
                            : roleVal === "venue"
                            ? "Venue"
                            : roleVal === "ambassador"
                            ? "Ambassador"
                            : "Other";
                        const isSelected = formData.role === roleVal;

                        return (
                          <button
                            key={roleVal}
                            type="button"
                            onClick={() => setFormData({ ...formData, role: roleVal })}
                            className={`flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-zinc-950 text-white shadow-md"
                                : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{labelText}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                      Tell us more
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={
                        formData.role === "venue"
                          ? "Tell us about your venue name, neighbourhood, type of hospitality or creative space and wall areas..."
                          : formData.role === "artist"
                          ? "Tell us about your artwork medium, dimensions and whether you are interested in Subscriptions or Pay by Day..."
                          : "Let us know how you would like to collaborate with ARTB2B..."
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 placeholder-zinc-400 transition-colors shadow-sm resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-600 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group hover:translate-y-[-1px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Partner With Us</span>
                        <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
