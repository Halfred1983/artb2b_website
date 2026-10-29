import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { VERIFIED_VENUES, VERIFIED_PLACEMENTS } from "@/lib/network-data";

export default function Hero() {
  const heroVenue = VERIFIED_VENUES[0]; // Mercato Mayfair
  const secondaryVenue = VERIFIED_VENUES[2]; // Bantof Soho
  const featuredPlacement = VERIFIED_PLACEMENTS[0]; // Brevevita Letters at Luxxdesign

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-28 bg-[#fcfcfd]">
      {/* Background subtle grid pattern & glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left Column: Exact Copy & CTAs from HOME / 01 HERO */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/35 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
              ARTB2B Exhibition Network · London Hub
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.03] mb-6">
              Your Art. More Spaces. More Opportunities.
            </h1>

            <div className="font-sans text-base sm:text-lg text-zinc-600 max-w-xl mb-10 leading-relaxed space-y-4">
              <p>
                Exhibit your artwork across a growing network of cafés, restaurants, hotels and creative venues.
              </p>
              <p>
                Choose a flexible way to exhibit. With an ARTB2B Subscription, we manage storage, transport from our Hoxton hub, installation and artwork rotation, so you can focus on creating.
              </p>
            </div>

            {/* Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/subscriptions"
                className="px-7 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md hover:shadow-xl hover:-translate-y-0.5 font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
              >
                <span>Explore Subscriptions</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>

              <Link
                href="/#how-it-works"
                className="px-7 py-4 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm hover:shadow-md font-sans text-sm font-bold inline-flex items-center justify-center"
              >
                How It Works
              </Link>
            </div>

            {/* Key Verified Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-6 border-t border-zinc-200/70 text-xs font-sans text-zinc-600">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-zinc-950 fill-brand-accent shrink-0" />
                <span>1 × 1 m managed exhibition spaces</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-zinc-950 fill-brand-accent shrink-0" />
                <span>Hoxton operational hub in London</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-zinc-950 fill-brand-accent shrink-0" />
                <span>Curated placement &amp; artwork rotation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-zinc-950 fill-brand-accent shrink-0" />
                <span>Flexible Pay by Day option available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Participating ARTB2B Venue Photographs & Artwork Credits */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-stretch">
              {/* Primary Venue Card: Mercato Mayfair */}
              <div className="col-span-12 sm:col-span-7 relative rounded-[2rem] overflow-hidden border border-zinc-200/80 shadow-2xl bg-zinc-950 min-h-[380px] sm:min-h-[460px] group">
                <img
                  src={heroVenue.photoUrl}
                  alt={heroVenue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-brand-accent text-zinc-950 font-sans text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    Participating Venue
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-heading text-xl font-bold leading-snug">{heroVenue.name}</p>
                  <p className="font-sans text-xs text-zinc-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span>{heroVenue.address}</span>
                  </p>
                </div>
              </div>

              {/* Right Stack: Secondary Real Venue + Real Exhibited Artwork */}
              <div className="col-span-12 sm:col-span-5 flex flex-col gap-4">
                <div className="relative rounded-[1.75rem] overflow-hidden border border-zinc-200/80 shadow-lg bg-zinc-900 flex-1 min-h-[210px] group">
                  <img
                    src={secondaryVenue.photoUrl}
                    alt={secondaryVenue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-accent">
                      {secondaryVenue.neighborhood}
                    </span>
                    <p className="font-heading text-base font-bold">{secondaryVenue.name}</p>
                  </div>
                </div>

                <div className="relative rounded-[1.75rem] overflow-hidden border border-zinc-200/80 shadow-lg bg-zinc-900 flex-1 min-h-[210px] group">
                  <img
                    src={featuredPlacement.artworkUrl}
                    alt={featuredPlacement.artworkTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/25 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-zinc-950 font-sans text-[9px] font-bold uppercase tracking-wider">
                      Exhibited Artwork
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-heading text-sm font-bold line-clamp-1">
                      {featuredPlacement.artworkTitle}
                    </p>
                    <p className="font-sans text-[11px] text-zinc-300 mt-0.5">
                      Artist: <span className="text-brand-accent font-semibold">{featuredPlacement.artistName}</span>
                    </p>
                    <p className="font-sans text-[10px] text-zinc-400">
                      at {featuredPlacement.venueName}
                    </p>
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
