"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { UserX, ArrowLeft, AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DeleteAccountPage() {
  const { tr } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim() || formData.email,
          email: formData.email,
          role: "account_deletion",
          message: formData.message || "Request to delete ArtB2B account and all associated data.",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setErrorMessage(
          data.error ||
            tr(
              "Failed to submit request. Please email us directly.",
              "No se pudo enviar la solicitud. Por favor envíanos un correo directamente."
            )
        );
      }
    } catch {
      setErrorMessage(
        tr(
          "Network error. Please try again or email us directly.",
          "Error de red. Por favor inténtalo de nuevo o envíanos un correo directamente."
        )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="py-16 sm:py-20 bg-white border-b border-zinc-200/60 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl -z-10" />
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-950 uppercase tracking-wider mb-8 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {tr("Back to Home", "Volver al Inicio")}
            </Link>

            <span className="px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
              <UserX className="w-3.5 h-3.5 text-red-600" />
              {tr("Account & Privacy", "Cuenta y Privacidad")}
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mt-4 mb-4">
              {tr("Delete your account", "Eliminar tu cuenta")}
            </h1>

            <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-2xl">
              {tr(
                "If you would like to delete your account, you can do so by completing the form below. Alternatively, you can contact our customer service at",
                "Si deseas eliminar tu cuenta, puedes hacerlo completando el formulario a continuación. Alternativamente, puedes contactar con nuestro servicio de atención al cliente en"
              )}{" "}
              <a href="mailto:info@artb2b.art" className="text-zinc-950 font-bold underline hover:text-brand-accent-hover">
                info@artb2b.art
              </a>
              {tr(
                ", providing your full name and the email associated with your account.",
                ", indicando tu nombre completo y el correo electrónico asociado a tu cuenta."
              )}
            </p>

            <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs sm:text-sm leading-relaxed">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>{tr("Important:", "Importante:")}</strong>{" "}
                {tr(
                  "Please note that all your data, including booking history and any uploaded images, will be permanently deleted once the request is processed.",
                  "Ten en cuenta que todos tus datos, incluido el historial de reservas y cualquier imagen subida, se eliminarán de forma permanente una vez procesada la solicitud."
                )}
              </span>
            </div>
          </div>
        </section>

        {/* Form Container */}
        <section className="py-16 sm:py-24">
          <div className="max-w-2xl mx-auto px-6 sm:px-8 font-sans">
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm relative">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-zinc-950 mb-2">
                    {tr("Request Received", "Solicitud Recibida")}
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md leading-relaxed">
                    {tr(
                      "Your account deletion request has been submitted. Our team will verify your identity and process the permanent deletion of your account and associated data within 48 hours.",
                      "Tu solicitud de eliminación de cuenta ha sido enviada. Nuestro equipo verificará tu identidad y procesará la eliminación permanente de tu cuenta y los datos asociados en un plazo de 48 horas."
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                        {tr("First name", "Nombre")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={tr("John", "Juan")}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:bg-white focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                        {tr("Last name", "Apellido")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={tr("Doe", "Pérez")}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:bg-white focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                      {tr("Account Email", "Correo Electrónico de la Cuenta")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="account@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:bg-white focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 pl-1">
                      {tr("Optional Notes or Reason", "Notas o Motivo Opcional")}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={tr(
                        "Please delete my account and associated data...",
                        "Por favor eliminen mi cuenta y los datos asociados..."
                      )}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:bg-white focus:outline-none rounded-2xl p-4 text-sm text-zinc-900 transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-zinc-400 text-white font-bold rounded-2xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{tr("Submitting Request...", "Enviando Solicitud...")}</span>
                      </>
                    ) : (
                      <>
                        <span>{tr("Submit Account Deletion Request", "Enviar Solicitud de Eliminación de Cuenta")}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-zinc-400">
                    {tr("Prefer direct email? Send your request to", "¿Prefieres correo directo? Envía tu solicitud a")}{" "}
                    <a href="mailto:info@artb2b.art?subject=Account%20Deletion%20Request" className="text-zinc-700 font-bold underline">
                      info@artb2b.art
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
