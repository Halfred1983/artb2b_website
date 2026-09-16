"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer id="footer" className="bg-[#fcfcfd] py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Black Card Container */}
        <div className="bg-zinc-950 text-white rounded-[3rem] p-8 sm:p-16 relative overflow-hidden border border-zinc-800 shadow-2xl">

          {/* Background grid line pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">

            {/* Left 5 Columns: Brand, Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              {/* Brand Logo */}
              <Link href="/" className="flex items-center gap-1 font-heading text-2xl font-black tracking-tighter select-none mb-6">
                <span>ART</span>
                <span>B</span>

                <span className="flex items-center justify-center bg-brand-accent text-zinc-950 w-8 h-8 rounded-md text-xl font-black border border-zinc-950/15 shadow-sm transform -rotate-2">
                  2
                </span>
                <span>B</span>
              </Link>

              <p className="font-sans text-sm text-zinc-400 max-w-sm mb-8 leading-relaxed">
                We are a direct, on-demand platform redefining how art is shared by taking creative work beyond traditional gallery spaces and placing it directly into people's everyday lives.
              </p>

              {/* Quick Info details */}
              <div className="flex flex-col gap-3 font-sans text-xs text-zinc-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-accent" />
                  <span>info@artb2b.art</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  <span>London, United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Middle 4 Columns: Newsletter Block */}
            <div className="lg:col-span-4 flex flex-col justify-start lg:border-l lg:border-zinc-800/60 lg:pl-10">
              <h4 className="font-heading text-sm font-bold text-white mb-2">Subscribe to receive updates</h4>
              <p className="font-sans text-xs text-zinc-400 mb-6">Stay informed about new local exhibition openings and fresh art space drops near you.</p>

              {isSubscribed ? (
                <div className="flex items-center gap-2 p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs rounded-2xl animate-fade-in">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Thanks! You have successfully subscribed to our newsletter.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-zinc-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 font-bold rounded-xl font-sans text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Subscribe
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Right 3 Columns: Quick Links */}
            <div className="lg:col-span-3 flex flex-col justify-start lg:border-l lg:border-zinc-800/60 lg:pl-10">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-500 mb-6">Explore</h4>
              <div className="flex flex-col gap-4 font-sans text-xs text-zinc-400 font-medium">
                <Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
                <Link href="/#audience" className="hover:text-white transition-colors">The 3 Pillars</Link>
                <Link href="/#testimonials" className="hover:text-white transition-colors">Success Stories</Link>
                <Link href="/#ambassador" className="hover:text-white transition-colors">Ambassadors</Link>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </div>
            </div>

          </div>

          {/* Bottom Outlined Typography Branding */}
          <div className="border-t border-zinc-900/80 pt-10 mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-xs text-zinc-500 font-sans">
            <div>
              &copy; {new Date().getFullYear()} ARTB2B LTD. All rights reserved.
            </div>

            {/* Outlined Slogan for premium aesthetic */}
            <div className="text-[10px] tracking-[0.2em] font-heading font-black text-zinc-700 hidden md:block uppercase select-none">
              Where Art Finds Space, And Spaces Find Art
            </div>

            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookies Settings</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
