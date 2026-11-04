"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Mail, MapPin, Loader2, ArrowUpRight, Globe } from "lucide-react";
import { APP_URL, APP_STORE_URL, PLAY_STORE_URL, INSTAGRAM_URL } from "@/lib/network-data";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { lang, setLang, tr } = useLanguage();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubscribed(true);
        setEmail("");
        setTimeout(() => {
          setIsSubscribed(false);
        }, 6000);
      } else {
        setErrorMessage(
          data.error ||
            tr(
              "Failed to subscribe. Please try again.",
              "No se pudo completar la suscripción. Por favor, inténtalo de nuevo."
            )
        );
      }
    } catch {
      setErrorMessage(
        tr(
          "Network error. Please try again.",
          "Error de conexión. Por favor, inténtalo de nuevo."
        )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="footer" className="bg-[#fcfcfd] py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Black Card Container */}
        <div className="bg-zinc-950 text-white rounded-[3rem] p-8 sm:p-16 relative overflow-hidden border border-zinc-800 shadow-2xl">
          {/* Background grid line pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 relative z-10">
            {/* Left 4 Columns: Brand, Contact Info */}
            <div className="lg:col-span-4 flex flex-col justify-start">
              <Link
                href="/"
                className="flex items-center gap-1 font-heading text-2xl font-black tracking-tighter select-none mb-6"
              >
                <span>ART</span>
                <span>B</span>
                <span className="flex items-center justify-center bg-brand-accent text-zinc-950 w-8 h-8 rounded-md text-xl font-black border border-zinc-950/15 shadow-sm transform -rotate-2">
                  2
                </span>
                <span>B</span>
              </Link>

              <p className="font-sans text-sm text-zinc-400 max-w-sm mb-8 leading-relaxed">
                {tr(
                  "ARTB2B connects artists and venues, bringing original artwork into everyday spaces and creating new opportunities for discovery.",
                  "ARTB2B conecta artistas y espacios, llevando obras de arte originales a lugares cotidianos y creando nuevas oportunidades de descubrimiento."
                )}
              </p>

              <div className="flex flex-col gap-3 font-sans text-xs text-zinc-400 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href="mailto:info@artb2b.art" className="hover:text-white transition-colors">
                    info@artb2b.art
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>
                    {tr(
                      "Hoxton Operational Hub · London, United Kingdom",
                      "Centro Operativo de Hoxton · Londres, Reino Unido"
                    )}
                  </span>
                </div>
              </div>

              {/* Footer Language Switcher */}
              <div className="inline-flex items-center gap-2 self-start bg-zinc-900 border border-zinc-800 rounded-full p-1 text-xs font-sans font-bold">
                <Globe className="w-3.5 h-3.5 text-zinc-400 ml-2" />
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                    lang === "en"
                      ? "bg-brand-accent text-zinc-950"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                    lang === "es"
                      ? "bg-brand-accent text-zinc-950"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Español
                </button>
              </div>
            </div>

            {/* Middle 4 Columns: Recommended Footer Links & App Destinations */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:border-l lg:border-zinc-800/60 lg:pl-10">
              <div className="flex flex-col justify-start">
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-500 mb-5">
                  {tr("Navigation", "Navegación")}
                </h4>
                <div className="flex flex-col gap-3.5 font-sans text-xs text-zinc-400 font-medium">
                  <Link href="/about" className="hover:text-white transition-colors">
                    {tr("About ARTB2B", "Sobre ARTB2B")}
                  </Link>
                  <Link href="/for-artists" className="hover:text-white transition-colors">
                    {tr("For Artists", "Para Artistas")}
                  </Link>
                  <Link href="/subscriptions" className="hover:text-white transition-colors">
                    {tr("Subscriptions", "Suscripciones")}
                  </Link>
                  <Link href="/pay-by-day" className="hover:text-white transition-colors">
                    {tr("Pay by Day", "Pago por Día")}
                  </Link>
                  <Link href="/for-venues" className="hover:text-white transition-colors">
                    {tr("For Venues", "Para Espacios")}
                  </Link>
                  <Link href="/network" className="hover:text-white transition-colors">
                    {tr("Our Network", "Nuestra Red")}
                  </Link>
                  <Link href="/#partner-form" className="hover:text-white transition-colors">
                    {tr("Contact", "Contacto")}
                  </Link>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-start">
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-500 mb-5">
                  {tr("Connect & App", "Conectar y App")}
                </h4>
                <div className="flex flex-col gap-3.5 font-sans text-xs text-zinc-400 font-medium">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{tr("Download / Open App", "Descargar / Abrir App")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-accent" />
                  </a>
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    iOS App Store
                  </a>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Google Play Store
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                  <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                    {tr("Terms & Conditions", "Términos y Condiciones")}
                  </Link>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    {tr("Privacy Policy", "Política de Privacidad")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Newsletter Block */}
            <div className="lg:col-span-4 flex flex-col justify-start lg:border-l lg:border-zinc-800/60 lg:pl-10">
              <h4 className="font-heading text-sm font-bold text-white mb-2">
                {tr("Subscribe to receive updates", "Suscríbete para recibir novedades")}
              </h4>
              <p className="font-sans text-xs text-zinc-400 mb-6 leading-relaxed">
                {tr(
                  "Stay informed about new participating venues, artist exhibitions and network updates.",
                  "Mantente informado sobre nuevos espacios participantes, exposiciones de artistas y novedades de la red."
                )}
              </p>

              {isSubscribed ? (
                <div className="flex items-center gap-2 p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs rounded-2xl animate-fade-in">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>
                    {tr(
                      "Thanks! You have successfully subscribed to our newsletter.",
                      "¡Gracias! Te has suscrito correctamente a nuestro boletín."
                    )}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    required
                    placeholder={tr("Enter your email address", "Introduce tu correo electrónico")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-zinc-500 transition-colors"
                  />
                  {errorMessage && (
                    <span className="text-[11px] text-red-400 font-medium pl-1">
                      {errorMessage}
                    </span>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-zinc-950 font-bold rounded-xl font-sans text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{tr("Subscribing...", "Suscribiendo...")}</span>
                      </>
                    ) : (
                      <>
                        <span>{tr("Subscribe", "Suscribirse")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="border-t border-zinc-900/80 pt-10 mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-xs text-zinc-500 font-sans">
            <div>
              &copy; {new Date().getFullYear()} ARTB2B LTD.{" "}
              {tr("All rights reserved.", "Todos los derechos reservados.")}
            </div>

            <div className="text-[10px] tracking-[0.2em] font-heading font-black text-zinc-700 hidden md:block uppercase select-none">
              {tr(
                "Your Art. More Spaces. More Opportunities.",
                "Tu Arte. Más Espacios. Más Oportunidades."
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                {tr("Terms & Conditions", "Términos y Condiciones")}
              </Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                {tr("Privacy Policy", "Política de Privacidad")}
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                {tr("Accessibility", "Accesibilidad")}
              </Link>
              <Link href="/delete-account" className="hover:text-white transition-colors">
                {tr("Delete Account", "Eliminar Cuenta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
