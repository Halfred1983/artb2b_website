"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ArrowUpRight, Sparkles, Palette, Building2 } from "lucide-react";
import {
  APP_URL,
  VERIFIED_VENUES,
  VERIFIED_PLACEMENTS,
} from "@/lib/network-data";
import { useLanguage } from "@/context/LanguageContext";

export default function NetworkPage() {
  const { tr } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-grow">
        {/* OUR NETWORK / INTRO */}
        <section className="py-20 md:py-28 bg-[#fcfcfd] border-b border-zinc-200/60 relative overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/35 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
                {tr("Our Network", "Nuestra Red")}
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.05] mb-6">
                {tr("Discover the ARTB2B Network", "Descubre la Red ARTB2B")}
              </h1>

              <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                {tr(
                  "Explore the venues and artists bringing contemporary art into everyday life. From cafés and restaurants to hotels and creative spaces, our network makes art part of the places people already love.",
                  "Explora los espacios y artistas que llevan el arte contemporáneo a la vida cotidiana. Desde cafeterías y restaurantes hasta hoteles y espacios creativos, nuestra red hace que el arte forme parte de los lugares que la gente ya disfruta."
                )}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#verified-venues"
                  className="px-8 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md hover:shadow-xl font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
                >
                  <span>{tr("Explore Venues", "Explorar Espacios")}</span>
                </a>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
                >
                  <span>{tr("Open in App", "Abrir en la App")}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Verified Participating Venues Section */}
        <section id="verified-venues" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  <Building2 className="w-4 h-4 text-zinc-950" />
                  <span>{tr("Participating Partners", "Socios Participantes")}</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                  {tr("Verified Participating Venues", "Espacios Participantes Verificados")}
                </h2>
              </div>
              <p className="font-sans text-sm text-zinc-500 max-w-md">
                {tr(
                  "Real hospitality, dining and creative venues hosting contemporary artwork across the ARTB2B network.",
                  "Espacios reales de hostelería, gastronomía y creatividad que exhiben arte contemporáneo en la red ARTB2B."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {VERIFIED_VENUES.map((venue) => (
                <div
                  key={venue.id}
                  className="group rounded-[2rem] overflow-hidden bg-zinc-50/70 border border-zinc-200/80 hover:border-zinc-950 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-zinc-100">
                    <img
                      src={venue.photoUrl}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-zinc-950/85 backdrop-blur-sm text-white font-sans text-[10px] font-bold uppercase tracking-wider">
                        {tr(venue.category, venue.categoryEs)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        {venue.neighborhood}
                      </p>
                      <h3 className="font-heading text-xl font-bold text-zinc-950 mb-2">
                        {venue.name}
                      </h3>
                      <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                        {tr(venue.description, venue.descriptionEs)}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-zinc-200/60 flex items-center justify-between gap-2 text-xs text-zinc-500 font-sans">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <MapPin className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
                        <span className="truncate">{venue.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verified Artist Credits & Active Exhibitions Section */}
        <section id="artists" className="py-24 bg-[#fcfcfd] border-t border-zinc-200/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  <Palette className="w-4 h-4 text-zinc-950" />
                  <span>{tr("Approved Artist Credits", "Créditos de Artistas Aprobados")}</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                  {tr("Artworks in Everyday Spaces", "Obras de Arte en Espacios Cotidianos")}
                </h2>
              </div>
              <p className="font-sans text-sm text-zinc-500 max-w-md">
                {tr(
                  "Original works by ARTB2B artists exhibited across participating London venues.",
                  "Obras originales de artistas de ARTB2B expuestas en espacios participantes de Londres."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VERIFIED_PLACEMENTS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl overflow-hidden bg-white border border-zinc-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="h-60 overflow-hidden bg-zinc-100">
                    <img
                      src={item.artworkUrl}
                      alt={item.artworkTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        {item.collectionName}
                      </span>
                      <h3 className="font-heading text-base font-bold text-zinc-950 mt-0.5 line-clamp-1">
                        {item.artworkTitle}
                      </h3>
                      <p className="font-sans text-xs text-zinc-600 mt-1">
                        {tr("Artist:", "Artista:")}{" "}
                        <span className="font-bold text-zinc-950">{item.artistName}</span>
                      </p>
                    </div>
                    <div className="pt-3 mt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-zinc-500 font-sans">
                      <MapPin className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
                      <span className="truncate">
                        {item.venueName} · {item.venueLocation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
