"use client";

import { useState } from "react";
import { Send, CheckCircle2, Paintbrush, Building2, HelpCircle, ArrowRight, Sparkles, Loader2, Award } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", role: "artist", message: "" });
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
        setFormData({ name: "", email: "", role: "artist", message: "" });
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
    <section id="partner-form" className="py-24 bg-white relative overflow-hidden">
      <div id="ambassador-apply" className="absolute -top-10" />
      {/* Aesthetic blur highlights */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-[300px] h-[300px] bg-zinc-100 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-brand-accent" />
              Join the London Movement
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-none mb-6">
              Got a blank wall or <br />
              a portfolio to show?
            </h2>
            <p className="font-sans text-base text-zinc-600 max-w-lg mb-10 leading-relaxed">
              We make setting up real world exhibitions effortless. Join our London network today to get your art out of the studio, or turn your venue&apos;s empty walls into premium exhibition spaces.
            </p>

            {/* Quick Benefits list */}
            <div className="flex flex-col gap-6 w-full max-w-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Paintbrush className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 mb-1">For Visual Artists</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Showcase your work in buzzing cafés, bars, and creative hubs across London. Easily rent out spaces through the app, share your passion with a real audience, and take home a fair 70% layout on every sale or rental.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 mb-1">For Venues & Spaces</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Elevate your customer experience with incredible local art without the stress. Set your own rental prices, let our community fill your walls, and earn a steady 50% commission on space rentals plus 10% on artwork sales.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-50 border border-zinc-200/80 p-8 sm:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
              {/* Subtle top-right accent blur */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center bg-white border border-zinc-200 rounded-3xl animate-fade-in shadow-sm min-h-[380px]">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950">Message Sent Successfully</h3>
                  <p className="text-sm text-zinc-500 mt-2 max-w-[280px] mx-auto leading-relaxed">
                    Our curation team will review your details and connect with you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-6 font-sans">
                  
                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 placeholder-zinc-400 transition-colors shadow-sm"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 placeholder-zinc-400 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Role Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">I am a</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white border border-zinc-200 p-1.5 rounded-2xl shadow-sm">
                      {(["artist", "venue", "ambassador", "other"] as const).map((roleVal) => {
                        const Icon = roleVal === "artist" ? Paintbrush : roleVal === "venue" ? Building2 : roleVal === "ambassador" ? Award : HelpCircle;
                        const labelText = roleVal === "artist" ? "Artist" : roleVal === "venue" ? "Venue" : roleVal === "ambassador" ? "Ambassador" : "Other";
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
                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">Tell us more</label>
                    <textarea
                      rows={4}
                      required
                      placeholder={
                        formData.role === "artist"
                          ? "Tell us about your art style, medium, or share a link to your portfolio..."
                          : formData.role === "venue"
                          ? "Tell us about your location, type of business, wall space dimensions..."
                          : formData.role === "ambassador"
                          ? "Tell us about your local network or why you'd love to connect venues with art..."
                          : "Let us know how you'd like to collaborate with us..."
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 placeholder-zinc-400 transition-colors shadow-sm resize-none"
                    />
                  </div>

                  {/* Error display */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
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
                        <span>Submit Partner Inquiry</span>
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
