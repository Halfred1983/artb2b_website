"use client";

import { useState } from "react";
import { ArrowUpRight, Palette, Store, Coins, CheckCircle, X } from "lucide-react";

export default function AudienceSplit() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<"Artist" | "Venue" | "Revenue" | null>(null);

  const pillars = [
    {
      title: "1. The Artist Creates",
      type: "Artist" as const,
      tagline: "THE CANVAS IS CREATED",
      subHeadline: "Stop keeping your masterpieces locked away at home.",
      description: "Every collection starts in the studio, but art isn’t meant to hide in a corner. We cut out the slow emails, confusing applications, and gallery gatekeepers so you can take full control of your career. With our easy-to-use app, you can book real-world exhibition spaces in just a few taps and turn your hard work into an active showcase.",
      bullets: [
        "Easily discover and book premium local or international exhibition spaces.",
        "Get your exhibition confirmed in a few days, not a few months.",
        "Manage your space bookings and artwork details right from your phone."
      ],
      bgImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600&auto=format&fit=crop",
      cta: "Exhibit My Art",
      ctaHref: "#artist-apply",
      accent: "bg-brand-accent",
      icon: Palette,
      modalTitle: "Ready to Exhibit?",
      modalDescription: "Download the ArtB2B app to start booking exhibition spaces, managing logistics, and showcasing your art globally."
    },
    {
      title: "2. The Venue Hosts",
      type: "Venue" as const,
      tagline: "THE CANVAS IN A VENUE",
      subHeadline: "Transform your unused walls into a vibrant gallery.",
      description: "We bring art straight to where real life happens. Whether you run a buzzing coffee shop, a cozy bistro, a stylish hotel lobby, or a creative co-working hub, your empty walls have massive potential. By showing unique art from local creators, you instantly elevate your space, keep customers sticking around longer, and become a true part of the community.",
      bullets: [
        "Sign up your space for free and easily set your own wall rental prices.",
        "Get matched with amazing local artwork that fits your space and style perfectly.",
        "Keep your environment fresh and inspiring with rotating local culture."
      ],
      bgImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
      cta: "List My Space",
      ctaHref: "#venue-register",
      accent: "bg-zinc-950 text-white",
      icon: Store,
      modalTitle: "Ready to Host?",
      modalDescription: "Download the ArtB2B app to register your space, set wall rental rates, and start hosting local culture."
    },
    {
      title: "3. The Revenue Returns",
      type: "Revenue" as const,
      tagline: "THE CANVAS BECOMES REVENUE",
      subHeadline: "A fair community where creating art actually pays off.",
      description: "Art shouldn’t just look beautiful—it needs to support the people who make it and host it. When a customer falls in love with a piece hanging on a venue's wall, they can buy or rent it instantly by scanning a simple QR code. We handle everything securely in the app, stripping away high gallery commissions so the money goes right back to the creators.",
      bullets: [
        "Artists keep a fair, transparent 70% layout on all artwork sales and wall rentals.",
        "Venues pocket a steady 50% on rental fees plus a 10% bonus on every sale.",
        "Zero complicated paperwork—the app handles payments and simple courier shipping."
      ],
      bgImage: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=600&auto=format&fit=crop",
      cta: "See How It Works",
      ctaHref: "#ecosystem-discover",
      accent: "bg-zinc-100",
      icon: Coins,
      modalTitle: "Discover the Ecosystem",
      modalDescription: "Download the ArtB2B app to buy, lease, or sell artwork, and keep track of payouts, commissions, and logistics."
    }
  ];

  const selectedPillar = pillars.find(p => p.type === activeModal);

  return (
    <section id="audience" className="py-24 bg-[#fcfcfd] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16 select-none relative z-10">
          <div className="max-w-xl">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Our Ecosystem</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-none">
              Connecting the <br />
              Three Pillars of Art.
            </h2>
          </div>
          <p className="font-sans text-base text-zinc-500 max-w-lg leading-relaxed">
            We bridge the gap between creative expression, spaces of daily life, and the people who appreciate art. Our platform maps a direct journey from the studio to the public eye, transforming how art is shared, experienced, and monetized.
          </p>
        </div>

        {/* 3 Pillars Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = hoveredCard === idx;
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group flex flex-col justify-between overflow-hidden rounded-[2.5rem] border bg-white shadow-sm hover:shadow-2xl transition-all duration-500 h-full min-h-[640px] ${
                  isHovered ? "border-brand-accent/50 translate-y-[-8px]" : "border-zinc-200/60"
                }`}
              >
                {/* Image Section with Overlay */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img 
                    src={pillar.bgImage} 
                    alt={pillar.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                  
                  {/* Floating Pillar Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-zinc-950/80 backdrop-blur-md text-white flex items-center justify-center border border-white/20">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-8 pb-8 flex-grow flex flex-col justify-between">
                  <div className="flex-grow">
                    <div className="mb-5">
                      <p className="text-xs uppercase tracking-wider font-extrabold text-zinc-400">{pillar.tagline}</p>
                      <h3 className="font-heading text-2xl font-black text-zinc-950 mt-1">
                        {pillar.title}
                      </h3>
                    </div>

                    <h4 className="font-sans text-sm font-bold text-zinc-950 mb-2">
                      {pillar.subHeadline}
                    </h4>

                    <p className="font-sans text-sm text-zinc-500 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Bullet List */}
                    <ul className="flex flex-col gap-3 mb-8">
                      {pillar.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-600 font-sans">
                          <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setActiveModal(pillar.type)}
                    className={`flex items-center justify-between w-full px-6 py-4 rounded-2xl border text-sm font-bold font-sans transition-all duration-300 cursor-pointer ${
                      idx === 0 
                        ? "bg-brand-accent border-zinc-950/15 text-zinc-950 hover:bg-brand-accent-hover" 
                        : idx === 1 
                        ? "bg-zinc-950 border-zinc-950 text-white hover:bg-zinc-800" 
                        : "bg-zinc-50 border-zinc-200 text-zinc-950 hover:bg-zinc-100"
                    }`}
                  >
                    <span>{pillar.cta}</span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-0.5 -translate-y-0.5" : ""}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Elegant Popup Modal Overlay */}
      {activeModal && selectedPillar && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/65 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 sm:p-10 shadow-2xl transition-all duration-300 scale-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950 transition-colors flex items-center justify-center border border-zinc-200/60 cursor-pointer shadow-sm z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Icon */}
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md ${
              selectedPillar.type === "Artist" 
                ? "bg-brand-accent text-zinc-950" 
                : selectedPillar.type === "Venue" 
                ? "bg-zinc-950 text-white" 
                : "bg-zinc-100 text-zinc-950 border border-zinc-200/80"
            }`}>
              {(() => {
                const ModalIcon = selectedPillar.icon;
                return <ModalIcon className="w-6 h-6" />;
              })()}
            </div>

            {/* Modal Titles */}
            <h3 className="font-heading text-3xl font-black text-zinc-950 mb-3">
              {selectedPillar.modalTitle}
            </h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed mb-6">
              {selectedPillar.modalDescription}
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
                <div className="text-left font-sans">
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
                <div className="text-left font-sans">
                  <p className="text-[9px] uppercase font-bold text-zinc-500 leading-none">Get it on</p>
                  <p className="text-xs font-bold tracking-tight mt-0.5">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
