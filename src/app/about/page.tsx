"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import {
  Warehouse,
  Layers,
  Calendar,
  Building2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { APP_REGISTER_URL } from "@/lib/network-data";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { tr } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-grow">
        {/* About Hero */}
        <section className="py-20 md:py-28 bg-[#fcfcfd] border-b border-zinc-200/60 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-brand-accent/15 rounded-full blur-3xl -z-10" />

          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/35 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
              {tr("About ARTB2B", "Sobre ARTB2B")}
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.05] mb-6">
              {tr(
                "Art Beyond Traditional Galleries",
                "Arte Más Allá de las Galerías Tradicionales"
              )}
            </h1>

            <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-10">
              {tr(
                "ARTB2B connects artists and venues, bringing original artwork into everyday spaces and creating new opportunities for discovery across cafés, restaurants, hotels and creative venues.",
                "ARTB2B conecta artistas y espacios, llevando obras de arte originales a lugares cotidianos y creando nuevas oportunidades de descubrimiento en cafeterías, restaurantes, hoteles y espacios creativos."
              )}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/subscriptions"
                className="px-8 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
              >
                <span>{tr("Explore Subscriptions", "Explorar Suscripciones")}</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>
              <Link
                href="/network"
                className="px-8 py-4 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
              >
                <span>{tr("Explore Our Network", "Explorar Nuestra Red")}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Managed Subscriptions & Hoxton Hub */}
              <div className="rounded-[2.25rem] bg-zinc-50 border border-zinc-200/80 p-8 sm:p-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-brand-accent flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-zinc-950 mb-3">
                  {tr("Managed Subscriptions", "Suscripciones Gestionadas")}
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                  {tr(
                    "With an ARTB2B Subscription, artists choose one, two, three or four 1 × 1 m exhibition spaces. Artists deliver their artwork to the ARTB2B operational hub in Hoxton, and from there we manage storage, curatorial coordination, transport to participating venues, installation and artwork rotation.",
                    "Con una Suscripción ARTB2B, los artistas eligen uno, dos, tres o cuatro espacios de exposición de 1 × 1 m. Los artistas entregan su obra en el centro operativo de ARTB2B en Hoxton y, desde allí, gestionamos el almacenamiento, la coordinación curatorial, el transporte a los espacios participantes, la instalación y la rotación de las obras."
                  )}
                </p>
                <Link
                  href="/subscriptions"
                  className="text-xs font-bold uppercase tracking-wider text-zinc-950 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>{tr("View Subscription Plans", "Ver Planes de Suscripción")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pay by Day */}
              <div className="rounded-[2.25rem] bg-zinc-50 border border-zinc-200/80 p-8 sm:p-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-zinc-950 mb-3">
                  {tr("Pay by Day Flexibility", "Flexibilidad de Pago por Día")}
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                  {tr(
                    "For artists who prefer a one off exhibition without committing to a monthly Subscription, Pay by Day offers direct booking of exhibition spaces. With Pay by Day, the artist is responsible for artwork delivery, installation, removal and related logistics.",
                    "Para los artistas que prefieren una exposición puntual sin comprometerse a una Suscripción mensual, Pago por Día ofrece la reserva directa de espacios expositivos. Con Pago por Día, el artista es responsable de la entrega, instalación, retirada y logística de la obra."
                  )}
                </p>
                <Link
                  href="/pay-by-day"
                  className="text-xs font-bold uppercase tracking-wider text-zinc-950 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>{tr("Explore Pay by Day", "Explorar Pago por Día")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Hoxton Operational Hub */}
              <div className="rounded-[2.25rem] bg-zinc-50 border border-zinc-200/80 p-8 sm:p-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-brand-accent flex items-center justify-center mb-6">
                  <Warehouse className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-zinc-950 mb-3">
                  {tr("Our Hoxton Operational Hub", "Nuestro Centro Operativo en Hoxton")}
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {tr(
                    "Located on Hoxton Street in London, our operational hub serves as the central drop off and storage point for Subscription artworks. Artists deliver approved works once to the hub, enabling coordinated rotations across our London venue network.",
                    "Ubicado en Hoxton Street en Londres, nuestro centro operativo funciona como punto central de recepción y almacenamiento para las obras de Suscripción. Los artistas entregan sus obras aprobadas una sola vez en el centro, permitiendo rotaciones coordinadas en nuestra red de espacios de Londres."
                  )}
                </p>
              </div>

              {/* ARTB2B Art Gallery Network */}
              <div className="rounded-[2.25rem] bg-zinc-50 border border-zinc-200/80 p-8 sm:p-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-zinc-950 mb-3">
                  {tr("The ARTB2B Art Gallery Network", "La Red de Galerías de Arte ARTB2B")}
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                  {tr(
                    "We partner with hospitality and creative spaces across London to turn everyday venues into living galleries. Participating venues receive curated artwork displays and regular rotations for their guests.",
                    "Colaboramos con espacios de hostelería y creatividad en Londres para convertir locales cotidianos en galerías vivas. Los espacios participantes reciben exposiciones de arte seleccionadas y rotaciones periódicas para sus clientes."
                  )}
                </p>
                <Link
                  href="/for-venues"
                  className="text-xs font-bold uppercase tracking-wider text-zinc-950 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>{tr("Partner With Us", "Colabora con Nosotros")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-16 bg-zinc-950 text-white rounded-[2.5rem] p-8 sm:p-12 text-center border border-zinc-800">
              <h3 className="font-heading text-3xl font-extrabold mb-4">
                {tr("Ready to Exhibit?", "¿Listo para Exponer?")}
              </h3>
              <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mb-8">
                {tr(
                  "Join ARTB2B, explore available exhibition options and take the next step with your artwork.",
                  "Únete a ARTB2B, explora las opciones de exposición disponibles y da el siguiente paso con tu obra."
                )}
              </p>
              <a
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 font-sans text-sm font-bold inline-flex items-center gap-2"
              >
                <span>{tr("Join ARTB2B", "Únete a ARTB2B")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
