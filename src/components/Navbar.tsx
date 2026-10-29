"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { APP_REGISTER_URL } from "@/lib/network-data";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "For Artists", href: "/for-artists" },
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "Pay by Day", href: "/pay-by-day" },
  { label: "For Venues", href: "/for-venues" },
  { label: "Our Network", href: "/network" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#fcfcfd]/90 backdrop-blur-md border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Mark (Logo) */}
          <Link
            href="/"
            className="flex items-center gap-1 font-heading text-2xl font-black tracking-tighter select-none shrink-0"
          >
            <span className="text-zinc-950">ART</span>
            <span className="text-zinc-950">B</span>
            <span className="flex items-center justify-center bg-brand-accent text-zinc-950 w-8 h-8 rounded-md text-xl font-black border border-zinc-950/15 shadow-sm transform -rotate-2">
              2
            </span>
            <span className="text-zinc-950">B</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans font-medium text-sm">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap py-1 ${
                    isActive
                      ? "text-zinc-950 font-bold border-b-2 border-zinc-950"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={APP_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-zinc-950 text-white font-sans text-sm font-semibold hover:bg-zinc-800 transition-all border border-zinc-950 shadow-sm hover:shadow-md hover:-translate-y-[1px] inline-flex items-center gap-1.5"
            >
              <span>Join ARTB2B</span>
              <ArrowUpRight className="w-4 h-4 text-brand-accent" />
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className="lg:hidden p-2 rounded-xl text-zinc-800 hover:bg-zinc-100 transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white border-b border-zinc-200 shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col gap-3.5 font-sans text-base font-semibold text-zinc-800">
            <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
              Navigation
            </p>
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-1 transition-colors ${
                    isActive ? "text-zinc-950 font-black" : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 pt-2 border-t border-zinc-100">
            <a
              href={APP_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-full bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Join ARTB2B</span>
              <ArrowUpRight className="w-4 h-4 text-brand-accent" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
