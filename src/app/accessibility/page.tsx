"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Accessibility, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AccessibilityPage() {
  const { tr } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="py-16 sm:py-20 bg-white border-b border-zinc-200/60 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-950 uppercase tracking-wider mb-8 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {tr("Back to Home", "Volver al Inicio")}
            </Link>

            <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/25 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
              <Accessibility className="w-3.5 h-3.5 text-zinc-900" />
              {tr("Equal Access", "Igualdad de Acceso")}
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mt-4 mb-4">
              {tr("Accessibility Statement", "Declaración de Accesibilidad")}
            </h1>

            <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-2xl">
              {tr(
                "ARTB2B is committed to ensuring that our platform and website are accessible to everyone, including people with disabilities. We believe that all artists, venue hosts, and art enthusiasts should have equal access to our platform, and we continuously work to improve the accessibility of our services.",
                "ARTB2B se compromete a garantizar que nuestra plataforma y nuestro sitio web sean accesibles para todas las personas, incluidas las personas con discapacidad. Creemos que todos los artistas, anfitriones de espacios y amantes del arte deben tener igualdad de acceso a nuestra plataforma, y trabajamos continuamente para mejorar la accesibilidad de nuestros servicios."
              )}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 font-sans">
            <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3">
                  {tr("Our Ongoing Commitment", "Nuestro Compromiso Continuo")}
                </h2>
                <p>
                  {tr(
                    "This statement reflects our ongoing efforts to make ARTB2B accessible to all individuals. We are dedicated to providing a user friendly experience for people with disabilities, and we strive to adhere to recognized web accessibility standards, including the Web Content Accessibility Guidelines (WCAG 2.1).",
                    "Esta declaración refleja nuestros esfuerzos continuos para hacer que ARTB2B sea accesible para todas las personas. Nos dedicamos a ofrecer una experiencia fácil de usar para personas con discapacidad y nos esforzamos por cumplir con los estándares reconocidos de accesibilidad web, incluidas las Pautas de Accesibilidad para el Contenido Web (WCAG 2.1)."
                  )}
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3">
                  {tr("What Web Accessibility Means to Us", "Qué Significa la Accesibilidad Web para Nosotros")}
                </h2>
                <p>
                  {tr(
                    "Web accessibility ensures that individuals with disabilities can perceive, understand, navigate, and interact with our digital tools. It means providing equal opportunities for all users, regardless of physical or cognitive abilities.",
                    "La accesibilidad web garantiza que las personas con discapacidad puedan percibir, comprender, navegar e interactuar con nuestras herramientas digitales. Significa ofrecer igualdad de oportunidades a todos los usuarios, independientemente de sus capacidades físicas o cognitivas."
                  )}
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3">
                  {tr("Accessibility Features Implemented", "Funciones de Accesibilidad Implementadas")}
                </h2>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{tr("Semantic HTML Markup:", "Marcado HTML Semántico:")}</strong>{" "}
                      {tr(
                        "Clear heading hierarchies and landmarks to facilitate screen reader navigation.",
                        "Jerarquías claras de encabezados y puntos de referencia para facilitar la navegación con lectores de pantalla."
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{tr("High Contrast & Clean Typography:", "Alto Contraste y Tipografía Clara:")}</strong>{" "}
                      {tr(
                        "Readable text contrasts and responsive sizing across mobile, tablet, and desktop screens.",
                        "Contrastes de texto legibles y tamaños adaptables en pantallas móviles, tabletas y ordenadores."
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{tr("Keyboard Navigability:", "Navegación por Teclado:")}</strong>{" "}
                      {tr(
                        "Accessible interactive elements with visible focus rings and logical tab order.",
                        "Elementos interactivos accesibles con indicadores de foco visibles y un orden de tabulación lógico."
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{tr("Descriptive Media:", "Contenido Multimedia Descriptivo:")}</strong>{" "}
                      {tr(
                        "Alt text on key visual elements and artwork previews.",
                        "Texto alternativo en elementos visuales clave y vistas previas de obras."
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-950 text-white p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-md">
                <h2 className="font-heading text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-brand-accent" />
                  {tr("Requests, Feedback & Contact", "Solicitudes, Comentarios y Contacto")}
                </h2>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  {tr(
                    "If you encounter any accessibility barriers or have suggestions for improving accessibility across ARTB2B, we warmly welcome your feedback. Please reach out to our team at:",
                    "Si encuentras alguna barrera de accesibilidad o tienes sugerencias para mejorar la accesibilidad en ARTB2B, agradecemos tus comentarios. Por favor ponte en contacto con nuestro equipo en:"
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@artb2b.art?subject=Accessibility%20Inquiry"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-colors"
                  >
                    info@artb2b.art
                  </a>
                  <a
                    href="mailto:support@artb2b.com?subject=Accessibility%20Inquiry"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                  >
                    support@artb2b.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
