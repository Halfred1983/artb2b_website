"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PaintbrushTrail from "@/components/PaintbrushTrail";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Calendar,
  Layers,
} from "lucide-react";
import {
  APP_REGISTER_URL,
  SUBSCRIPTION_PLANS,
  VERIFIED_VENUES,
  VERIFIED_PLACEMENTS,
} from "@/lib/network-data";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { tr } = useLanguage();
  const featuredVenues = VERIFIED_VENUES.slice(0, 6);
  const featuredPlacements = VERIFIED_PLACEMENTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd] relative">
      <PaintbrushTrail />
      <Navbar />

      <main className="flex-grow">
        {/* HOME / 01 HERO */}
        <Hero />

        {/* HOME / 02 HOW IT WORKS */}
        <HowItWorks />

        {/* HOME / 03 SUBSCRIPTIONS */}
        <section id="subscriptions-preview" className="py-24 bg-[#fcfcfd] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/35 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                {tr("Subscriptions", "Suscripciones")}
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-6 leading-tight">
                {tr("Choose Your Exhibition Plan", "Elige Tu Plan de Exposición")}
              </h2>
              <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed">
                {tr(
                  "Exhibit across our network with one, two, three or four 1 × 1 m exhibition spaces. Every Subscription includes artwork storage, curatorial coordination, transport from ARTB2B storage to participating venues, installation and artwork rotation.",
                  "Expón en nuestra red con uno, dos, tres o cuatro espacios de exposición de 1 × 1 m. Cada Suscripción incluye almacenamiento de obras, coordinación curatorial, transporte desde el almacén de ARTB2B hasta los espacios participantes, instalación y rotación de obras."
                )}
              </p>
            </div>

            {/* Four Exact App Plan Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {SUBSCRIPTION_PLANS.map((plan) => {
                const badgeText = tr(plan.badge, plan.badgeEs);
                const featuresList = tr(plan.features, plan.featuresEs);
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-[2rem] p-8 flex flex-col justify-between border transition-all duration-300 ${
                      plan.popular
                        ? "bg-zinc-950 text-white border-zinc-950 shadow-2xl scale-[1.02]"
                        : "bg-white text-zinc-950 border-zinc-200/80 hover:border-zinc-950 shadow-sm hover:shadow-xl"
                    }`}
                  >
                    {badgeText && (
                      <div className="mb-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                            plan.popular
                              ? "bg-brand-accent text-zinc-950"
                              : "bg-zinc-100 text-zinc-800 border border-zinc-200"
                          }`}
                        >
                          {badgeText}
                        </span>
                      </div>
                    )}

                    <div>
                      <h3 className="font-heading text-2xl font-black mb-1">
                        {tr(plan.name, plan.nameEs)}
                      </h3>
                      <p
                        className={`font-sans text-xs mb-6 ${
                          plan.popular ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        {tr(plan.unitPrice, plan.unitPriceEs)}
                      </p>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="font-heading text-4xl font-black">{plan.price}</span>
                        <span
                          className={`font-sans text-xs font-semibold ${
                            plan.popular ? "text-zinc-400" : "text-zinc-500"
                          }`}
                        >
                          {tr("/ month", "/ mes")}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {featuresList.slice(0, 5).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs font-sans">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                plan.popular ? "text-brand-accent" : "text-zinc-950"
                              }`}
                            />
                            <span className={plan.popular ? "text-zinc-300" : "text-zinc-600"}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/subscriptions"
                      className={`w-full py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-center transition-colors ${
                        plan.popular
                          ? "bg-brand-accent text-zinc-950 hover:bg-brand-accent-hover"
                          : "bg-zinc-950 text-white hover:bg-zinc-800"
                      }`}
                    >
                      {tr("View Plan", "Ver Plan")}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center">
              <Link
                href="/subscriptions"
                className="px-8 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md hover:shadow-xl font-sans text-sm font-bold inline-flex items-center gap-2"
              >
                <span>{tr("View Plans", "Ver Planes")}</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>
            </div>
          </div>
        </section>

        {/* HOME / 04 PAY BY DAY (with comparison from Subscription) */}
        <section id="pay-by-day-preview" className="py-24 bg-white border-y border-zinc-200/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Copy */}
              <div className="lg:col-span-5">
                <span className="px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  {tr("Pay by Day", "Pago por Día")}
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-6 leading-tight">
                  {tr("Exhibit on Your Terms", "Expón a Tu Manera")}
                </h2>
                <p className="font-sans text-base sm:text-lg text-zinc-600 mb-8 leading-relaxed">
                  {tr(
                    "Prefer a one off exhibition? Pay by Day gives you the flexibility to book exhibition space without a monthly Subscription. You arrange and manage your own artwork delivery, installation, removal and related logistics.",
                    "¿Prefieres una exposición puntual? Pago por Día te ofrece la flexibilidad de reservar espacio de exposición sin una Suscripción mensual. Tú organizas y gestionas la entrega, instalación, retirada y logística de tu obra."
                  )}
                </p>

                <Link
                  href="/pay-by-day"
                  className="px-8 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md hover:shadow-xl font-sans text-sm font-bold inline-flex items-center gap-2"
                >
                  <span>{tr("Explore Pay by Day", "Explorar Pago por Día")}</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent" />
                </Link>
              </div>

              {/* Right Comparison Cards: Subscription vs Pay by Day */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Managed Subscription Comparison Card */}
                <div className="rounded-3xl bg-zinc-950 text-white p-8 border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-brand-accent text-zinc-950 flex items-center justify-center mb-5">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                      {tr("Continuous Managed Service", "Servicio Gestionado Continuo")}
                    </span>
                    <h3 className="font-heading text-2xl font-bold mt-1 mb-4">
                      {tr("ARTB2B Subscription", "Suscripción ARTB2B")}
                    </h3>
                    <ul className="space-y-3 text-xs text-zinc-300 font-sans">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>
                          {tr(
                            "Deliver once to our Hoxton operational hub",
                            "Entrega única en nuestro centro operativo de Hoxton"
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>
                          {tr(
                            "ARTB2B manages storage and venue coordination",
                            "ARTB2B gestiona el almacenamiento y la coordinación con los espacios"
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>
                          {tr(
                            "Transport from Hoxton hub to participating venues included",
                            "Transporte desde el centro de Hoxton a los espacios incluido"
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>
                          {tr(
                            "Professional installation and regular artwork rotation",
                            "Instalación profesional y rotación periódica de obras"
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 border-t border-zinc-800">
                    <Link
                      href="/subscriptions"
                      className="text-xs font-bold text-brand-accent hover:underline inline-flex items-center gap-1"
                    >
                      <span>{tr("Compare Subscription plans", "Comparar planes de Suscripción")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Pay by Day Comparison Card */}
                <div className="rounded-3xl bg-zinc-50 text-zinc-950 p-8 border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-5">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                      {tr("Self Managed Booking", "Reserva Autogestionada")}
                    </span>
                    <h3 className="font-heading text-2xl font-bold mt-1 mb-4">
                      {tr("Pay by Day", "Pago por Día")}
                    </h3>
                    <ul className="space-y-3 text-xs text-zinc-600 font-sans">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0 mt-0.5" />
                        <span>
                          {tr(
                            "Book individual exhibition spaces without a monthly plan",
                            "Reserva espacios individuales sin un plan mensual"
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0 mt-0.5" />
                        <span>
                          {tr(
                            "Select your preferred participating venue in the app",
                            "Selecciona tu espacio participante preferido en la aplicación"
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0 mt-0.5" />
                        <span>
                          {tr(
                            "Artist arranges direct artwork delivery to the venue",
                            "El artista organiza la entrega directa de la obra en el espacio"
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0 mt-0.5" />
                        <span>
                          {tr(
                            "Artist manages installation, removal and logistics",
                            "El artista gestiona la instalación, retirada y logística"
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 border-t border-zinc-200">
                    <Link
                      href="/pay-by-day"
                      className="text-xs font-bold text-zinc-950 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{tr("Learn more about Pay by Day", "Más información sobre Pago por Día")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOME / 05 NETWORK */}
        <section id="network-preview" className="py-24 bg-[#fcfcfd]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/35 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  {tr("Our Network", "Nuestra Red")}
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4 leading-tight">
                  {tr("Art Beyond Traditional Galleries", "Arte Más Allá de las Galerías Tradicionales")}
                </h2>
                <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed">
                  {tr(
                    "Discover contemporary art in the places people visit every day. ARTB2B connects artists and venues, bringing original artwork into everyday spaces and creating new opportunities for discovery.",
                    "Descubre arte contemporáneo en los lugares que la gente visita cada día. ARTB2B conecta artistas y espacios, llevando obras originales a entornos cotidianos y creando nuevas oportunidades de descubrimiento."
                  )}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/network"
                  className="px-8 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md hover:shadow-xl font-sans text-sm font-bold inline-flex items-center gap-2"
                >
                  <span>{tr("Explore Our Network", "Explorar Nuestra Red")}</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent" />
                </Link>
              </div>
            </div>

            {/* Verified Participating Venues Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredVenues.map((venue) => (
                <Link
                  key={venue.id}
                  href="/network"
                  className="group rounded-[2rem] overflow-hidden bg-white border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
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
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        {venue.neighborhood}
                      </p>
                      <h3 className="font-heading text-xl font-bold text-zinc-950 mb-2">
                        {venue.name}
                      </h3>
                      <p className="font-sans text-xs text-zinc-600 leading-relaxed line-clamp-2">
                        {tr(venue.description, venue.descriptionEs)}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-zinc-500 font-sans">
                      <MapPin className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
                      <span className="truncate">{venue.address}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Approved Artist Credits Strip */}
            <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 p-8 sm:p-10 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">
                    {tr("Exhibited Across London", "Expuesto en Londres")}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-zinc-950 mt-0.5">
                    {tr(
                      "Featured Artworks & Artist Credits",
                      "Obras Destacadas y Créditos de Artistas"
                    )}
                  </h3>
                </div>
                <Link
                  href="/network#artists"
                  className="text-xs font-bold text-zinc-950 hover:underline inline-flex items-center gap-1"
                >
                  <span>{tr("View all network exhibitions", "Ver todas las exposiciones")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredPlacements.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl overflow-hidden border border-zinc-200/70 bg-zinc-50/60 flex flex-col"
                  >
                    <div className="h-48 overflow-hidden bg-zinc-100">
                      <img
                        src={item.artworkUrl}
                        alt={item.artworkTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-heading text-sm font-bold text-zinc-950 line-clamp-1">
                        {item.artworkTitle}
                      </p>
                      <p className="font-sans text-xs text-zinc-600 mt-0.5">
                        {tr("Artist:", "Artista:")}{" "}
                        <span className="font-semibold text-zinc-950">{item.artistName}</span>
                      </p>
                      <p className="font-sans text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                        <span className="truncate">{item.venueName}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOME / 06 VENUES */}
        <section id="venues-preview" className="py-24 bg-white border-t border-zinc-200/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="bg-zinc-950 text-white rounded-[3rem] p-8 sm:p-14 lg:p-16 relative overflow-hidden border border-zinc-800 shadow-2xl">
              <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left Column: Copy + Official Network Seal */}
                <div className="lg:col-span-6">
                  {/* ARTB2B Art Gallery Network Seal */}
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 border border-brand-accent/40 mb-8">
                    <div className="w-9 h-9 rounded-xl bg-brand-accent text-zinc-950 flex items-center justify-center font-heading font-black text-xs shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-heading text-xs font-black tracking-wider uppercase text-brand-accent">
                        {tr("Official Member Seal", "Sello Oficial de Miembro")}
                      </p>
                      <p className="font-sans text-[11px] text-zinc-300">
                        {tr("ARTB2B Art Gallery Network", "Red de Galerías de Arte ARTB2B")}
                      </p>
                    </div>
                  </div>

                  <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                    {tr("Turn Your Venue Into an Art Gallery", "Convierte Tu Espacio en una Galería de Arte")}
                  </h2>
                  <p className="font-sans text-base sm:text-lg text-zinc-300 mb-10 leading-relaxed">
                    {tr(
                      "Bring original art into your space and become part of the ARTB2B Art Gallery Network. We coordinate artwork selection, installation and rotation, helping you offer guests a changing cultural experience.",
                      "Lleva arte original a tu espacio y forma parte de la Red de Galerías de Arte ARTB2B. Coordinamos la selección, instalación y rotación de las obras, ayudándote a ofrecer a tus clientes una experiencia cultural en constante renovación."
                    )}
                  </p>

                  <Link
                    href="/for-venues"
                    className="px-8 py-4 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 transition-all font-sans text-sm font-bold inline-flex items-center gap-2 shadow-md"
                  >
                    <span>{tr("For Venues", "Para Espacios")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right Column: Real Venue Photography Grid */}
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  {VERIFIED_VENUES.slice(1, 5).map((v) => (
                    <div
                      key={v.id}
                      className="relative rounded-2xl overflow-hidden h-48 sm:h-56 border border-zinc-800 group"
                    >
                      <img
                        src={v.photoUrl}
                        alt={v.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="font-heading text-sm font-bold text-white leading-tight">
                          {v.name}
                        </p>
                        <p className="font-sans text-[10px] text-brand-accent mt-0.5">
                          {v.neighborhood}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOME / 07 FINAL CTA */}
        <section id="final-cta" className="py-20 bg-[#fcfcfd] border-t border-zinc-200/60">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-6 leading-tight">
              {tr("Ready to Exhibit?", "¿Listo para Exponer?")}
            </h2>
            <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              {tr(
                "Join ARTB2B, explore available exhibition options and take the next step with your artwork.",
                "Únete a ARTB2B, explora las opciones de exposición disponibles y da el siguiente paso con tu obra."
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-lg hover:shadow-xl font-sans text-base font-bold inline-flex items-center justify-center gap-2"
              >
                <span>{tr("Join ARTB2B", "Únete a ARTB2B")}</span>
                <ArrowUpRight className="w-5 h-5 text-brand-accent" />
              </a>
            </div>
          </div>
        </section>

        {/* Partner & Inquiry Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
