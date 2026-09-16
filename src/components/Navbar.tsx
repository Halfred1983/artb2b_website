"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronDown, Menu, X, Download, Milestone, Info } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#fcfcfd]/85 backdrop-blur-md border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Brand Mark (Logo) */}
          <Link href="/" className="flex items-center gap-1 font-heading text-2xl font-black tracking-tighter select-none">
            <span className="text-zinc-950">ART</span>
            <span className="text-zinc-950">B</span>

            <span className="flex items-center justify-center bg-brand-accent text-zinc-950 w-8 h-8 rounded-md text-xl font-black border border-zinc-950/15 shadow-sm transform -rotate-2">
              2
            </span>
            <span className="text-zinc-950">B</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-zinc-600">
            {/* Dropdown container */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-zinc-950 transition-colors cursor-pointer">
                Product
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setIsDownloadModalOpen(true);
                          setIsDropdownOpen(false);
                        }}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-gray transition-colors text-zinc-800 hover:text-zinc-950 w-full text-left cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-accent/15 text-zinc-800 flex items-center justify-center">
                          <Download className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-xs text-zinc-950">Download App</p>
                          <p className="text-[10px] text-zinc-500 font-normal">Get iOS & Android app</p>
                        </div>
                      </button>
                    <Link
                      href="/#how-it-works"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-gray transition-colors text-zinc-800 hover:text-zinc-950"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center">
                        <Milestone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-zinc-950">Roadmap</p>
                        <p className="text-[10px] text-zinc-500 font-normal">What we are building next</p>
                      </div>
                    </Link>
                    <Link
                      href="/#audience"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-gray transition-colors text-zinc-800 hover:text-zinc-950"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center">
                        <Info className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-zinc-950">Three Pillars</p>
                        <p className="text-[10px] text-zinc-500 font-normal">Artists, Venues, Art Lovers</p>
                      </div>
                    </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#how-it-works" className="hover:text-zinc-950 transition-colors">How It Works</Link>
            <Link href="/#audience" className="hover:text-zinc-950 transition-colors">The 3 Pillars</Link>
            <Link href="/#testimonials" className="hover:text-zinc-950 transition-colors">Success Stories</Link>
            <Link href="/#ambassador" className="hover:text-zinc-950 transition-colors">Ambassadors</Link>
            <Link href="/faq" className="hover:text-zinc-950 transition-colors">FAQ</Link>
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://app.artb2b.art/login#/login"
              className="px-6 py-2.5 rounded-full bg-zinc-950 text-white font-sans text-sm font-semibold hover:bg-zinc-800 transition-all border border-zinc-950 shadow-sm hover:shadow-md hover:-translate-y-[1px]"
            >
              Sign Up
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden p-2 rounded-xl text-zinc-800 hover:bg-zinc-100 transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-zinc-200 shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4 font-sans text-base font-semibold text-zinc-800">
            <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">Navigation</p>
            <Link href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-zinc-950 transition-colors">How It Works</Link>
            <Link href="/#audience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-zinc-950 transition-colors">The 3 Pillars</Link>
            <Link href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-zinc-950 transition-colors">Success Stories</Link>
            <Link href="/#ambassador" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-zinc-950 transition-colors">Ambassadors</Link>
            <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-zinc-950 transition-colors">FAQ</Link>
            <div className="h-[1px] bg-zinc-100 my-2"></div>
            <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">Downloads</p>
            <button
              onClick={() => {
                setIsDownloadModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 hover:text-zinc-950 transition-colors text-left w-full cursor-pointer font-semibold"
            >
              <Download className="w-4 h-4" /> iOS & Android App
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <Link
              href="https://app.artb2b.art/login#/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-full bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* Elegant Popup Modal Overlay for App Download */}
      {isDownloadModalOpen && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/65 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
          onClick={() => setIsDownloadModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 sm:p-10 shadow-2xl transition-all duration-300 scale-100 flex flex-col text-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsDownloadModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950 transition-colors flex items-center justify-center border border-zinc-200/60 cursor-pointer shadow-sm z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Icon */}
            <div className="w-14 h-14 rounded-full bg-brand-accent text-zinc-950 flex items-center justify-center mb-6 shadow-md">
              <Download className="w-6 h-6" />
            </div>

            {/* Modal Titles */}
            <h3 className="font-heading text-3xl font-black text-zinc-950 mb-3">
              Download ArtB2B
            </h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed mb-6">
              Choose your platform to install the ArtB2B app and start exploring, exhibiting, or hosting local art near you.
            </p>

            {/* App Store & Google Play Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4 pt-6 border-t border-zinc-100 w-full">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/gb/app/artb2b/id6471003159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3.5 px-6 py-3 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-sm hover:shadow-md active:scale-98 w-full sm:w-1/2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.24-.59 2.94-1.39z" />
                </svg>
                <div className="text-left font-sans text-white">
                  <p className="text-[9px] uppercase font-bold text-zinc-400 leading-none">Download on the</p>
                  <p className="text-xs font-bold tracking-tight mt-0.5">App Store</p>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.extendus.artb2b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3.5 px-6 py-3 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm hover:shadow-md active:scale-98 w-full sm:w-1/2"
              >
                <svg className="w-5 h-5 fill-current text-zinc-900" viewBox="0 0 24 24">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12L8,6.5V17.5L17.5,12Z" />
                </svg>
                <div className="text-left font-sans text-zinc-900">
                  <p className="text-[9px] uppercase font-bold text-zinc-500 leading-none">Get it on</p>
                  <p className="text-xs font-bold tracking-tight mt-0.5">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}



