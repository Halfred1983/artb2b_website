"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Lock, ArrowLeft, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
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
              <Lock className="w-3.5 h-3.5 text-zinc-900" />
              {tr("Privacy & Data Protection", "Privacidad y Protección de Datos")}
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mt-4 mb-4">
              {tr("Privacy Policy for ArtB2B", "Política de Privacidad de ArtB2B")}
            </h1>

            <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-2xl">
              {tr(
                "This policy explains how ArtB2B collects, uses, shares, and protects your personal data when you use our website and mobile application.",
                "Esta política explica cómo ArtB2B recopila, usa, comparte y protege tus datos personales cuando utilizas nuestro sitio web y nuestra aplicación móvil."
              )}
            </p>

            <div className="mt-6">
              <Link
                href="/terms-and-conditions"
                className="text-xs font-bold text-zinc-600 hover:text-zinc-950 underline transition-colors"
              >
                {tr("View Terms and Conditions", "Ver Términos y Condiciones")} &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 font-sans">
            <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
              {/* 1. Introduction */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">1</span>
                  {tr("Introduction", "Introducción")}
                </h2>
                <p>
                  {tr(
                    "ArtB2B values your privacy and is committed to protecting your personal data. This policy explains how we collect, use, share, and protect your information.",
                    "ArtB2B valora tu privacidad y se compromete a proteger tus datos personales. Esta política explica cómo recopilamos, usamos, compartimos y protegemos tu información."
                  )}
                </p>
              </div>

              {/* 2. Data Collection */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">2</span>
                  {tr("Data Collection", "Recopilación de Datos")}
                </h2>
                <p className="mb-3">
                  {tr(
                    "We collect information you provide when creating an account, such as:",
                    "Recopilamos la información que proporcionas al crear una cuenta, como:"
                  )}
                </p>
                <ul className="space-y-2.5 list-disc pl-5 text-zinc-700">
                  <li>
                    {tr(
                      "Personal identification information (name, email, phone number).",
                      "Información de identificación personal (nombre, correo electrónico, número de teléfono)."
                    )}
                  </li>
                  <li>
                    {tr(
                      "Payment details for venues (e.g., IBAN).",
                      "Datos de pago para los espacios (por ejemplo, IBAN)."
                    )}
                  </li>
                  <li>
                    {tr(
                      "Information related to bookings, such as venue details and artwork information.",
                      "Información relacionada con las reservas, como detalles del espacio e información de las obras."
                    )}
                  </li>
                </ul>
              </div>

              {/* 3. How We Use Your Data */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">3</span>
                  {tr("How We Use Your Data", "Cómo Usamos Tus Datos")}
                </h2>
                <ul className="space-y-2.5 list-disc pl-5 text-zinc-700">
                  <li>
                    {tr(
                      "To facilitate bookings and communication between artists and venues.",
                      "Para facilitar las reservas y la comunicación entre artistas y espacios."
                    )}
                  </li>
                  <li>
                    {tr(
                      "To process payments and payouts.",
                      "Para procesar pagos y liquidaciones."
                    )}
                  </li>
                  <li>
                    {tr(
                      "To provide customer support and address any issues.",
                      "Para brindar atención al cliente y resolver cualquier incidencia."
                    )}
                  </li>
                  <li>
                    {tr(
                      "To send notifications related to your bookings and account activity.",
                      "Para enviar notificaciones relacionadas con tus reservas y la actividad de tu cuenta."
                    )}
                  </li>
                </ul>
              </div>

              {/* 4. Sharing Your Data */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">4</span>
                  {tr("Sharing Your Data", "Uso Compartido de Datos")}
                </h2>
                <ul className="space-y-2.5 list-disc pl-5 text-zinc-700">
                  <li>
                    {tr(
                      "We may share information with payment service providers to facilitate payouts.",
                      "Podemos compartir información con proveedores de servicios de pago para facilitar las liquidaciones."
                    )}
                  </li>
                  <li>
                    {tr(
                      "We may also share data with venues or artists to facilitate bookings and exhibitions.",
                      "También podemos compartir datos con espacios o artistas para facilitar reservas y exposiciones."
                    )}
                  </li>
                  <li>
                    {tr(
                      "Your information will not be sold to third parties.",
                      "Tu información no será vendida a terceros."
                    )}
                  </li>
                </ul>
              </div>

              {/* 5. Data Security */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">5</span>
                  {tr("Data Security", "Seguridad de los Datos")}
                </h2>
                <p>
                  {tr(
                    "We use secure servers and encryption to protect your data. We limit access to your data to authorized personnel only.",
                    "Utilizamos servidores seguros y cifrado para proteger tus datos. Limitamos el acceso a tus datos únicamente al personal autorizado."
                  )}
                </p>
              </div>

              {/* 6. Your Rights */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">6</span>
                  {tr("Your Rights", "Tus Derechos")}
                </h2>
                <ul className="space-y-2.5 list-disc pl-5 text-zinc-700">
                  <li>
                    {tr(
                      "You have the right to access, modify, or delete your personal information at any time.",
                      "Tienes derecho a acceder, modificar o eliminar tu información personal en cualquier momento."
                    )}
                  </li>
                  <li>
                    {tr(
                      "You can opt out of promotional communications.",
                      "Puedes darte de baja de las comunicaciones promocionales."
                    )}
                  </li>
                </ul>
              </div>

              {/* 7. Retention */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">7</span>
                  {tr("Retention", "Conservación de Datos")}
                </h2>
                <p>
                  {tr(
                    "We will retain your information for as long as needed to provide you with our services or as required by law.",
                    "Conservaremos tu información durante el tiempo que sea necesario para prestarte nuestros servicios o según lo exija la ley."
                  )}
                </p>
              </div>

              {/* 8. Changes to This Policy */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                <h2 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">8</span>
                  {tr("Changes to This Policy", "Cambios en Esta Política")}
                </h2>
                <p>
                  {tr(
                    "We may update this policy occasionally. We will notify you of significant changes via email or app notifications.",
                    "Podemos actualizar esta política ocasionalmente. Te notificaremos los cambios importantes por correo electrónico o mediante notificaciones en la aplicación."
                  )}
                </p>
              </div>

              {/* 9. Contact Us */}
              <div className="bg-zinc-950 text-white p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-md">
                <h2 className="font-heading text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-brand-accent" />
                  {tr("9. Contact Us", "9. Contacto")}
                </h2>
                <p className="text-zinc-300 mb-4">
                  {tr(
                    "For any questions about this policy or your data, please contact us at:",
                    "Para cualquier pregunta sobre esta política o tus datos, contáctanos en:"
                  )}
                </p>
                <a
                  href="mailto:support@artb2b.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-colors"
                >
                  support@artb2b.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
