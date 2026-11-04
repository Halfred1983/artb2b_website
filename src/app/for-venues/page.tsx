"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  RefreshCw,
  MapPin,
  Building2,
} from "lucide-react";
import { VERIFIED_VENUES } from "@/lib/network-data";
import { useLanguage } from "@/context/LanguageContext";

export default function ForVenuesPage() {
  const { tr } = useLanguage();
  const venueShowcase = VERIFIED_VENUES.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-grow">
        {/* FOR VENUES / INTRO */}
        <section className="py-20 md:py-28 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
              <div className="lg:col-span-6">
                {/* Official ARTB2B Art Gallery Network Seal */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 border border-brand-accent/40 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent text-zinc-950 flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-heading text-xs font-black tracking-wider uppercase text-brand-accent">
                      {tr("ARTB2B Art Gallery Network", "Red de Galerías de Arte ARTB2B")}
                    </p>
                    <p className="font-sans text-[11px] text-zinc-300">
                      {tr(
                        "Official Participating Venue Programme",
                        "Programa Oficial de Espacios Participantes"
                      )}
                    </p>
                  </div>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.05] mb-6">
                  {tr(
                    "Become Part of the ARTB2B Art Gallery Network",
                    "Forma Parte de la Red de Galerías de Arte ARTB2B"
                  )}
                </h1>

                <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-xl mb-10 leading-relaxed">
                  {tr(
                    "Transform your venue into a place where people discover original art. ARTB2B works with participating venues to coordinate artwork displays and regular rotations, bringing new creative energy to everyday spaces.",
                    "Transforma tu espacio en un lugar donde las personas descubran arte original. ARTB2B colabora con los espacios participantes para coordinar las exposiciones de obras y sus rotaciones periódicas, aportando nueva energía creativa a lugares cotidianos."
                  )}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#partner-form"
                    className="px-8 py-4 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 transition-all font-sans text-sm font-bold inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>{tr("Partner With Us", "Colabora con Nosotros")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/network"
                    className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
                  >
                    <span>
                      {tr("Explore Participating Venues", "Explorar Espacios Participantes")}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Real Participating Venue Photographs */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                {venueShowcase.slice(0, 4).map((venue) => (
                  <div
                    key={venue.id}
                    className="relative rounded-3xl overflow-hidden h-56 sm:h-64 border border-zinc-800 group"
                  >
                    <img
                      src={venue.photoUrl}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                        {venue.neighborhood}
                      </span>
                      <p className="font-heading text-base font-bold text-white leading-snug">
                        {venue.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Venue Partnership Works */}
        <section className="py-24 bg-[#fcfcfd]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/35 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                {tr("Why Partner With ARTB2B", "Por Qué Colaborar con ARTB2B")}
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4 leading-tight">
                {tr(
                  "A Changing Cultural Experience for Your Guests",
                  "Una Experiencia Cultural en Constante Renovación para Tus Clientes"
                )}
              </h2>
              <p className="font-sans text-base text-zinc-600 leading-relaxed">
                {tr(
                  "Designed for cafés, restaurants, bars, hotels, creative workspaces and cultural destinations across London.",
                  "Diseñado para cafeterías, restaurantes, bares, hoteles, espacios de trabajo creativos y destinos culturales."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="rounded-3xl bg-white p-8 border border-zinc-200/80 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-brand-accent flex items-center justify-center mb-6">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-zinc-950 mb-3">
                  {tr("Curated Original Art", "Arte Original Seleccionado")}
                </h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  {tr(
                    "We coordinate artwork selection tailored to the character and aesthetic of your space, enriching your interior with original contemporary art.",
                    "Coordinamos la selección de obras adaptadas al carácter y la estética de tu local, enriqueciendo tu interior con arte contemporáneo original."
                  )}
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 border border-zinc-200/80 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-brand-accent flex items-center justify-center mb-6">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-zinc-950 mb-3">
                  {tr("Managed Installation & Rotation", "Instalación y Rotación Gestionadas")}
                </h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  {tr(
                    "For Subscription exhibitions, our team manages delivery from our Hoxton hub, professional installation and regular artwork rotations so your walls stay fresh.",
                    "Para las exposiciones de Suscripción, nuestro equipo gestiona la entrega desde nuestro centro en Hoxton, la instalación profesional y las rotaciones periódicas de obras."
                  )}
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 border border-zinc-200/80 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-brand-accent flex items-center justify-center mb-6">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-zinc-950 mb-3">
                  {tr("Network Visibility", "Visibilidad en la Red")}
                </h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  {tr(
                    "Your venue is featured in the ARTB2B app and website network, introducing art lovers and local visitors to your space.",
                    "Tu espacio aparece destacado en la aplicación y en la web de ARTB2B, acercando a amantes del arte y visitantes locales a tu negocio."
                  )}
                </p>
              </div>
            </div>

            {/* Verified Participating Venues Strip */}
            <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 p-8 sm:p-12 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {tr("Current Partners", "Socios Actuales")}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
                    {tr("Venues in the ARTB2B Network", "Espacios en la Red ARTB2B")}
                  </h3>
                </div>
                <Link
                  href="/network"
                  className="text-xs font-bold text-zinc-950 hover:underline inline-flex items-center gap-1"
                >
                  <span>
                    {tr("See all participating venues", "Ver todos los espacios participantes")}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {venueShowcase.map((venue) => (
                  <div
                    key={venue.id}
                    className="rounded-2xl overflow-hidden border border-zinc-200/70 bg-zinc-50/50 flex flex-col"
                  >
                    <div className="h-48 overflow-hidden bg-zinc-100">
                      <img
                        src={venue.photoUrl}
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          {tr(venue.category, venue.categoryEs)}
                        </span>
                        <h4 className="font-heading text-lg font-bold text-zinc-950 mt-0.5">
                          {venue.name}
                        </h4>
                        <p className="font-sans text-xs text-zinc-600 mt-1 line-clamp-2">
                          {tr(venue.description, venue.descriptionEs)}
                        </p>
                      </div>
                      <p className="font-sans text-[11px] text-zinc-500 mt-4 pt-3 border-t border-zinc-200/60 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
                        <span className="truncate">{venue.address}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Onboarding Inquiry Form */}
        <ContactForm defaultRole="venue" />
      </main>

      <Footer />
    </div>
  );
}
