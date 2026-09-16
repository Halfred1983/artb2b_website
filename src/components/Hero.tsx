"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";

export default function Hero() {
  const [toggleMode, setToggleMode] = useState<"artist" | "venue">("artist");

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-32 bg-[#fcfcfd]">

      {/* Background elegant grid pattern & subtle gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-zinc-950 font-sans text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-zinc-950 animate-pulse" />
              The wall sharing revolution
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl xl:text-7.5xl font-extrabold tracking-tighter text-zinc-950 leading-[0.95] mb-8 select-none">
              Where Art <br />
              Finds Home.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-lg text-zinc-600 max-w-xl mb-10 leading-relaxed">
              Stop keeping your best work locked away at home! Join over 200 independent artists already using our app to match with more than 50 of London’s coolest cafés, bars, and creative spaces. With over 250 premium wall spaces ready to book right now, ARTB2B cuts out the gatekeepers and complications, making it effortless to set your own exhibition prices, share your art with the world, and sell or rent your work directly to a real audience.
            </p>

            {/* Interactive Toggle for App Mockup */}
            <div className="flex items-center bg-zinc-100 p-1.5 rounded-full border border-zinc-200 shadow-inner mb-10">
              <button
                onClick={() => setToggleMode("artist")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold font-sans uppercase tracking-wider transition-all duration-300 cursor-pointer ${toggleMode === "artist"
                  ? "bg-zinc-950 text-white shadow-md scale-102"
                  : "text-zinc-500 hover:text-zinc-950"
                  }`}
              >
                Artist View
              </button>
              <button
                onClick={() => setToggleMode("venue")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold font-sans uppercase tracking-wider transition-all duration-300 cursor-pointer ${toggleMode === "venue"
                  ? "bg-zinc-950 text-white shadow-md scale-102"
                  : "text-zinc-500 hover:text-zinc-950"
                  }`}
              >
                Venue View
              </button>
            </div>

            {/* Download Buttons (App Store / Play Store) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10" id="download">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/gb/app/artb2b/id6471003159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* Apple Icon */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.24-.59 2.94-1.39z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-zinc-400">Download on the</p>
                  <p className="text-sm font-bold font-sans tracking-tight">App Store</p>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.extendus.artb2b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-50 transition-all border border-zinc-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* Play Store Icon */}
                <svg className="w-6 h-6 fill-current text-zinc-900" viewBox="0 0 24 24">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12L8,6.5V17.5L17.5,12Z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-zinc-500">Get it on</p>
                  <p className="text-sm font-bold font-sans tracking-tight">Google Play</p>
                </div>
              </a>
            </div>

            {/* Micro Social Proof */}
            <div className="flex items-center gap-4 text-zinc-500 font-sans text-xs">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-300 flex items-center justify-center font-bold text-[10px] text-zinc-800">S</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-accent flex items-center justify-center font-bold text-[10px] text-zinc-800">M</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-800 flex items-center justify-center font-bold text-[10px] text-white">L</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-zinc-950 font-bold">
                  <Star className="w-3.5 h-3.5 fill-brand-accent text-zinc-950" />
                  4.9/5
                  <span className="text-zinc-500 font-normal">(from 1.2k+ reviews)</span>
                </div>
                <p className="text-[10px]">Over 15,000+ exhibitions hosted</p>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Mockup & Lifestyle Gallery */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">

            {/* Floating artwork layout behind/side of the phone mockup */}
            <Link
              href="/artist-gallery"
              className="absolute -top-12 -left-20 w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-6 transform hover:rotate-2 hover:scale-105 transition-all duration-300 hidden xl:block group cursor-pointer"
            >
              {/* Painting lifestyle */}
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop"
                alt="Artist Gallery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-zinc-950/85 backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-xs font-bold text-white border border-white/10 group-hover:bg-brand-accent group-hover:text-zinc-950 transition-all duration-300 shadow-md">
                Artist Gallery
              </div>
            </Link>

            <Link
              href="/venues-gallery"
              className="absolute -bottom-10 -right-16 w-52 h-52 rounded-3xl overflow-hidden border-4 border-white shadow-2xl -rotate-12 transform hover:rotate-2 hover:scale-105 transition-all duration-300 hidden xl:block group cursor-pointer"
            >
              {/* Another painting */}
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop"
                alt="Venues Gallery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-zinc-950/85 backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-xs font-bold text-white border border-white/10 group-hover:bg-brand-accent group-hover:text-zinc-950 transition-all duration-300 shadow-md">
                Venues Gallery
              </div>
            </Link>

            {/* High-Fidelity Phone Mockup */}
            <div className="relative w-[280px] sm:w-[310px] h-[580px] sm:h-[620px] rounded-[48px] border-[12px] border-zinc-950 bg-zinc-900 shadow-2xl p-3 flex flex-col justify-between overflow-hidden">

              {/* Phone Camera Notch (Dynamic Island style) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-950 rounded-full z-20 flex items-center justify-between px-3">
                <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
                <span className="w-8 h-1 bg-zinc-800 rounded-full" />
              </div>

              {/* Live App Screen Display */}
              <div className="relative w-full h-full rounded-[38px] bg-zinc-50 overflow-hidden flex flex-col pt-8 pb-4 px-4 justify-between font-sans">

                {/* App Screen Header */}
                <div className="flex justify-between items-center pb-2 border-b border-zinc-200/50">
                  <div className="flex items-center gap-1 font-heading text-xs font-black">
                    <span>ART</span>
                    <span>B</span>
                    <span className="flex items-center justify-center bg-brand-accent text-zinc-950 w-4 h-4 rounded text-[9px] font-black border border-zinc-950/10 shadow-sm">2</span>
                    <span>B</span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-emerald-500/20" />
                </div>

                {/* App Screen Content depending on Toggle State */}
                <div className="flex-1 py-4 flex flex-col justify-start gap-4 overflow-y-auto no-scrollbar">

                  {toggleMode === "artist" ? (
                    /* Artist Mode Screen */
                    <div className="flex flex-col gap-3 animate-fade-in duration-300">
                      <div className="bg-white p-3 rounded-2xl border border-zinc-200/70 shadow-sm">
                        <p className="text-[10px] uppercase font-extrabold text-zinc-400">Artworks Sold</p>
                        <p className="text-xl font-bold font-heading text-zinc-950 mt-0.5">12</p>
                        <div className="mt-2 flex items-center gap-1.5 text-[9px] text-emerald-600 font-semibold">
                          <span className="bg-emerald-50 px-1 py-0.5 rounded">+2 this month</span>
                          <span>from local exhibitions</span>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-2xl border border-zinc-200/70 shadow-sm flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <p className="text-[10px] uppercase font-extrabold text-zinc-400">Active Lease</p>
                          <span className="text-[8px] bg-brand-accent text-zinc-950 px-1.5 py-0.5 rounded-full font-bold">Exhibiting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=150&auto=format&fit=crop"
                            alt="Exhibited Piece"
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div className="text-left">
                            <p className="text-xs font-bold text-zinc-950">&quot;Autumn Whispers&quot;</p>
                            <p className="text-[9px] text-zinc-500">at Café Nero (Main Wall)</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-zinc-950 text-white p-3 rounded-2xl shadow-sm flex items-center justify-between">
                        <div className="text-left">
                          <p className="text-[8px] font-bold uppercase tracking-wider text-brand-accent">Exhibition Offer</p>
                          <p className="text-xs font-bold">Workspace Lounge</p>
                          <p className="text-[9px] text-zinc-400">Rent Offer: £180 / month</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-brand-accent" />
                      </div>
                    </div>
                  ) : (
                    /* Venue Mode Screen */
                    <div className="flex flex-col gap-3 animate-fade-in duration-300">
                      <div className="bg-white p-3 rounded-2xl border border-zinc-200/70 shadow-sm">
                        <p className="text-[10px] uppercase font-extrabold text-zinc-400">Booking Revenue</p>
                        <p className="text-xl font-bold font-heading text-zinc-950 mt-0.5">£540.00</p>
                        <div className="mt-2 flex items-center gap-1.5 text-[9px] text-zinc-500 font-semibold">
                          <span className="bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-700">3 Bookings (£180/mo each)</span>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-2xl border border-zinc-200/70 shadow-sm flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <p className="text-[10px] uppercase font-extrabold text-zinc-400">Next Exhibition</p>
                          <span className="text-[8px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-full font-bold">Confirmed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=150&auto=format&fit=crop"
                            alt="Confirmed Piece"
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div className="text-left">
                            <p className="text-xs font-bold text-zinc-950">&quot;Vibrant Resonance&quot;</p>
                            <p className="text-[9px] text-zinc-500">by Sophia Brooks</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-brand-accent text-zinc-950 p-3 rounded-2xl shadow-sm flex items-center justify-between">
                        <div className="text-left">
                          <p className="text-[8px] font-extrabold uppercase tracking-wider text-zinc-800">Artist Request</p>
                          <p className="text-xs font-bold">Request to Lease Wall B</p>
                          <p className="text-[9px] text-zinc-700">Artist pays: £180 / month</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-950" />
                      </div>
                    </div>
                  )}

                  {/* Share code representation */}
                  <div className="bg-zinc-100 p-2.5 rounded-xl border border-zinc-200/50 mt-auto">
                    <p className="text-[9px] text-zinc-400 font-semibold uppercase">Nearby Art Lovers</p>
                    <div className="flex items-center justify-between mt-1 text-[10px] text-zinc-700 font-bold">
                      <span>320 active visitors nearby</span>
                      <span className="text-[8px] bg-zinc-200 text-zinc-700 px-1 py-0.5 rounded">3km radius</span>
                    </div>
                  </div>

                </div>

                {/* Bottom App Navigation */}
                <div className="flex justify-between items-center pt-2 border-t border-zinc-200/50 text-zinc-400">
                  <div className="flex flex-col items-center gap-0.5 text-zinc-950">
                    <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full" />
                    <span className="text-[8px] font-bold">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-zinc-950 transition-colors cursor-pointer">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                    <span className="text-[8px]">Walls</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-zinc-950 transition-colors cursor-pointer">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                    <span className="text-[8px]">Gallery</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-zinc-950 transition-colors cursor-pointer">
                    <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                    <span className="text-[8px]">Profile</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
