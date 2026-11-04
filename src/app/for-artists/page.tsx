"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Calendar,
  MapPin,
  Sparkles,
  Tag,
} from "lucide-react";
import {
  APP_REGISTER_URL,
  VERIFIED_PLACEMENTS,
  SUBSCRIPTION_PLANS,
} from "@/lib/network-data";
import { useLanguage } from "@/context/LanguageContext";

export default function ForArtistsPage() {
  const { tr } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-grow">
        {/* FOR ARTISTS / INTRO */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-[#fcfcfd] border-b border-zinc-200/60">
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-brand-accent/15 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
              <div className="lg:col-span-6">
                <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/35 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
                  {tr("For Artists", "Para Artistas")}
                </span>

                <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.05] mb-6">
                  {tr("More Than a Wall", "Más Que una Pared")}
                </h1>

                <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-xl mb-10 leading-relaxed">
                  {tr(
                    "ARTB2B helps artists reach new audiences by exhibiting their work in active hospitality and creative venues. Choose the flexibility of Pay by Day or the convenience of a managed Subscription.",
                    "ARTB2B ayuda a los artistas a llegar a nuevos públicos exponiendo su obra en espacios creativos y de hostelería activos. Elige la flexibilidad del Pago por Día o la comodidad de una Suscripción gestionada."
                  )}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/subscriptions"
                    className="px-8 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md hover:shadow-xl font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
                  >
                    <span>{tr("Explore Plans", "Explorar Planes")}</span>
                    <ArrowRight className="w-4 h-4 text-brand-accent" />
                  </Link>

                  <Link
                    href="/pay-by-day"
                    className="px-8 py-4 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm hover:shadow-md font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
                  >
                    <span>{tr("Pay by Day", "Pago por Día")}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-950" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Real Exhibited Artworks Showcase */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                {VERIFIED_PLACEMENTS.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-3xl overflow-hidden border border-zinc-200/80 shadow-lg bg-zinc-900 h-56 sm:h-64 group"
                  >
                    <img
                      src={item.artworkUrl}
                      alt={item.artworkTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-heading text-sm font-bold line-clamp-1">
                        {item.artworkTitle}
                      </p>
                      <p className="font-sans text-[11px] text-brand-accent font-semibold mt-0.5">
                        {item.artistName}
                      </p>
                      <p className="font-sans text-[10px] text-zinc-300 flex items-center gap-1 mt-0.5">
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

        {/* Two Ways to Exhibit: Clear Route to Subscriptions and Pay by Day */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                {tr("Two Exhibition Options", "Dos Opciones de Exposición")}
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4 leading-tight">
                {tr("Choose How You Want to Exhibit", "Elige Cómo Quieres Exponer")}
              </h2>
              <p className="font-sans text-base text-zinc-600 leading-relaxed">
                {tr(
                  "Whether you want continuous managed exhibitions across London or a single self managed booking, ARTB2B offers two clear paths.",
                  "Tanto si buscas exposiciones continuas gestionadas en Londres como una reserva puntual autogestionada, ARTB2B te ofrece dos caminos claros."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Managed Subscription Card */}
              <div className="rounded-[2.5rem] bg-zinc-950 text-white p-8 sm:p-12 border border-zinc-800 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent text-zinc-950 flex items-center justify-center">
                      <Layers className="w-6 h-6" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent font-sans text-xs font-bold uppercase tracking-wider">
                      {tr(
                        `From ${SUBSCRIPTION_PLANS[0].price} / month`,
                        `Desde ${SUBSCRIPTION_PLANS[0].price} / mes`
                      )}
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl font-black mb-4">
                    {tr("Managed Subscriptions", "Suscripciones Gestionadas")}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-zinc-300 mb-8 leading-relaxed">
                    {tr(
                      "Choose one, two, three or four exhibition spaces, each measuring 1 × 1 m. Your monthly Subscription includes storage, curatorial coordination, transportation from our Hoxton hub to venues, installation and artwork rotation.",
                      "Elige uno, dos, tres o cuatro espacios de exposición de 1 × 1 m cada uno. Tu Suscripción mensual incluye almacenamiento, coordinación curatorial, transporte desde nuestro centro en Hoxton a los espacios, instalación y rotación de obras."
                    )}
                  </p>

                  <ul className="space-y-3.5 mb-10 text-sm text-zinc-200 font-sans">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>
                        {tr(
                          "Deliver your artwork once to the ARTB2B operational hub in Hoxton",
                          "Entrega tu obra una sola vez en el centro operativo de ARTB2B en Hoxton"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>
                        {tr(
                          "Curatorial selection of suitable participating hospitality and creative venues",
                          "Selección curatorial de espacios creativos y de hostelería adecuados"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>
                        {tr(
                          "Transport from ARTB2B storage to participating venues included within the same city",
                          "Transporte desde el almacén de ARTB2B a los espacios incluido dentro de la misma ciudad"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>
                        {tr(
                          "Installation and monthly artwork rotation managed by ARTB2B",
                          "Instalación y rotación mensual de obras gestionadas por ARTB2B"
                        )}
                      </span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/subscriptions"
                  className="w-full py-4 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 font-sans text-sm font-bold text-center transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>{tr("Explore Plans", "Explorar Planes")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Pay by Day Card */}
              <div className="rounded-[2.5rem] bg-zinc-50 text-zinc-950 p-8 sm:p-12 border border-zinc-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-zinc-800 font-sans text-xs font-bold uppercase tracking-wider">
                      {tr("No Monthly Commitment", "Sin Compromiso Mensual")}
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl font-black mb-4">
                    {tr("Pay by Day", "Pago por Día")}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-zinc-600 mb-8 leading-relaxed">
                    {tr(
                      "Book exhibition opportunities without committing to a monthly Subscription. With Pay by Day, you are responsible for artwork transport, installation, removal and other practical arrangements.",
                      "Reserva oportunidades de exposición sin comprometerte a una Suscripción mensual. Con Pago por Día, eres responsable del transporte, la instalación, la retirada de la obra y demás gestiones prácticas."
                    )}
                  </p>

                  <ul className="space-y-3.5 mb-10 text-sm text-zinc-700 font-sans">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
                      <span>
                        {tr(
                          "Browse available venues and send booking requests directly in the app",
                          "Explora espacios disponibles y envía solicitudes de reserva directamente en la app"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
                      <span>
                        {tr(
                          "Ideal for one off exhibitions without a monthly commitment",
                          "Ideal para exposiciones puntuales sin compromiso mensual"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
                      <span>
                        {tr(
                          "You arrange and manage your own artwork delivery and installation",
                          "Tú organizas y gestionas la entrega e instalación de tu propia obra"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
                      <span>
                        {tr(
                          "Collect your artwork directly from the venue at the end of the booking",
                          "Recoge tu obra directamente en el espacio al finalizar la reserva"
                        )}
                      </span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/pay-by-day"
                  className="w-full py-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-sans text-sm font-bold text-center transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>{tr("Pay by Day", "Pago por Día")}</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent" />
                </Link>
              </div>
            </div>

            {/* Verified App Commission Box */}
            <div className="mt-12 rounded-3xl bg-brand-accent/15 border border-brand-accent/40 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-brand-accent flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-zinc-950">
                    {tr(
                      "If your artwork sells during an exhibition",
                      "Si tu obra se vende durante una exposición"
                    )}
                  </h4>
                  <p className="font-sans text-sm text-zinc-700 mt-1">
                    {tr(
                      "We keep 30% as commission, you keep 70%. You always set the sale price in your artist profile.",
                      "Retenemos el 30% de comisión y tú recibes el 70%. Tú siempre fijas el precio de venta en tu perfil de artista."
                    )}
                  </p>
                </div>
              </div>
              <a
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-zinc-950 text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors shrink-0 inline-flex items-center gap-1.5"
              >
                <span>{tr("Create Artist Profile", "Crear Perfil de Artista")}</span>
                <ArrowUpRight className="w-4 h-4 text-brand-accent" />
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}
