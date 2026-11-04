"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, FileText, Lock, Mail, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsAndConditionsPage() {
  const { tr } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero Section */}
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
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-900" />
              {tr("Legal & Compliance", "Legal y Cumplimiento")}
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 mt-4 mb-4">
              {tr("Terms and Conditions & Privacy Policy", "Términos y Condiciones y Política de Privacidad")}
            </h1>

            <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-2xl">
              {tr("Welcome to", "¡Bienvenido a")} <strong className="text-zinc-950">artb2b.art</strong>!{" "}
              {tr(
                "These terms and conditions outline the rules and regulations for the use of ARTB2B ltd's Website, located at",
                "Estos términos y condiciones describen las normas y regulaciones para el uso del sitio web de ARTB2B ltd, ubicado en"
              )}{" "}
              <a href="https://artb2b.art" className="text-zinc-950 underline hover:text-brand-accent-hover">
                https://artb2b.art
              </a>
              .
            </p>

            {/* Jump links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#terms"
                className="px-4 py-2 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-bold font-sans transition-colors inline-flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                {tr("Terms and Conditions", "Términos y Condiciones")}
              </a>
              <a
                href="#privacy"
                className="px-4 py-2 rounded-xl bg-zinc-100 text-zinc-800 hover:bg-zinc-200 text-xs font-bold font-sans transition-colors inline-flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                {tr("Privacy Policy", "Política de Privacidad")}
              </a>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 font-sans">
            {/* PART 1: TERMS AND CONDITIONS */}
            <div id="terms" className="scroll-mt-28 mb-20">
              <div className="border-b border-zinc-200 pb-6 mb-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/15 text-zinc-950 flex items-center justify-center flex-shrink-0 font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-950">
                    {tr("Terms and Conditions for ArtB2B", "Términos y Condiciones de ArtB2B")}
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1">
                    {tr(
                      "Please read these terms carefully before using our services.",
                      "Por favor lee estos términos detenidamente antes de utilizar nuestros servicios."
                    )}
                  </p>
                </div>
              </div>

              <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
                {/* 1. Introduction */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">1</span>
                    {tr("Introduction", "Introducción")}
                  </h3>
                  <p>
                    {tr(
                      "Welcome to ArtB2B. By using our services, you agree to be bound by these terms and conditions. These terms govern the relationship between artists and venues, as well as the use of our app. Please read them carefully.",
                      "Bienvenido a ArtB2B. Al utilizar nuestros servicios, aceptas estar sujeto a estos términos y condiciones. Estos términos rigen la relación entre artistas y espacios, así como el uso de nuestra aplicación. Por favor léelos detenidamente."
                    )}
                  </p>
                </div>

                {/* 2. Service Overview */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">2</span>
                    {tr("Service Overview", "Descripción del Servicio")}
                  </h3>
                  <p>
                    {tr(
                      "ArtB2B facilitates the booking of exhibition spaces for artists in various venues. Artists can make reservations and venues can approve or decline booking requests. ArtB2B retains a percentage of each booking fee as a commission.",
                      "ArtB2B facilita la reserva de espacios de exposición para artistas en diversos espacios. Los artistas pueden realizar reservas y los espacios pueden aprobar o rechazar las solicitudes. ArtB2B retiene un porcentaje de cada tarifa de reserva como comisión."
                    )}
                  </p>
                </div>

                {/* 3. Booking Process */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">3</span>
                    {tr("Booking Process", "Proceso de Reserva")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>
                      {tr(
                        "Artists can send booking requests for available spaces in venues.",
                        "Los artistas pueden enviar solicitudes de reserva para espacios disponibles en los locales."
                      )}
                    </li>
                    <li>
                      {tr(
                        "Venues have the right to accept or reject booking requests.",
                        "Los espacios tienen derecho a aceptar o rechazar las solicitudes de reserva."
                      )}
                    </li>
                    <li>
                      {tr(
                        "Once a booking is confirmed, it is added to both the artist's and venue's calendar.",
                        "Una vez confirmada la reserva, se añade tanto al calendario del artista como al del espacio."
                      )}
                    </li>
                  </ul>
                </div>

                {/* 4. Payment */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">4</span>
                    {tr("Payment", "Pagos")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>
                      {tr(
                        "Artists are responsible for covering the cost of shipping their artwork to the city where the venue is located.",
                        "Los artistas son responsables de cubrir el coste de envío de su obra hasta la ciudad donde se encuentra el espacio."
                      )}
                    </li>
                    <li>
                      {tr(
                        "A percentage of the venue's payout will be retained by ArtB2B as commission.",
                        "ArtB2B retendrá un porcentaje del pago al espacio en concepto de comisión."
                      )}
                    </li>
                    <li>
                      {tr(
                        "Payments to the venues will be consolidated and issued periodically (e.g., monthly) to the bank account (IBAN) indicated by the venue owner.",
                        "Los pagos a los espacios se consolidarán y emitirán periódicamente (por ejemplo, mensualmente) a la cuenta bancaria (IBAN) indicada por el propietario del espacio."
                      )}
                    </li>
                  </ul>
                </div>

                {/* 5. Artist Responsibilities */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">5</span>
                    {tr("Artist Responsibilities", "Responsabilidades del Artista")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>
                      {tr(
                        "Artists are responsible for transporting their artwork to the venue on the day of check in and installing it in the space allocated by the venue owner.",
                        "Los artistas son responsables de transportar su obra al espacio el día de entrada e instalarla en el lugar asignado por el propietario del espacio."
                      )}
                    </li>
                    <li>
                      {tr(
                        "If an artwork is sold during the exhibition, the artist must wait until the end of the exhibition to hand it over to the buyer.",
                        "Si una obra se vende durante la exposición, el artista deberá esperar hasta el final de la exposición para entregarla al comprador."
                      )}
                    </li>
                    <li>
                      {tr(
                        "At the end of the exhibition, artists are required to take back their artwork.",
                        "Al finalizar la exposición, los artistas están obligados a retirar su obra."
                      )}
                    </li>
                  </ul>
                </div>

                {/* 6. Venue Responsibilities */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">6</span>
                    {tr("Venue Responsibilities", "Responsabilidades del Espacio")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>
                      {tr(
                        "Venues are responsible for providing the allocated space for the artist's exhibition.",
                        "Los espacios son responsables de proporcionar el área asignada para la exposición del artista."
                      )}
                    </li>
                    <li>
                      {tr(
                        "Venues have the right to determine which space is allocated to which artist.",
                        "Los espacios tienen derecho a determinar qué área se asigna a cada artista."
                      )}
                    </li>
                  </ul>
                </div>

                {/* 7. Cancellations */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">7</span>
                    {tr("Cancellations", "Cancelaciones")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>
                      {tr(
                        "Either the artist or the venue can cancel a booking before it is confirmed.",
                        "Tanto el artista como el espacio pueden cancelar una reserva antes de que sea confirmada."
                      )}
                    </li>
                    <li>
                      {tr(
                        "Once confirmed, cancellation policies may apply, and cancellation fees may be incurred.",
                        "Una vez confirmada, pueden aplicarse políticas de cancelación y generarse cargos por cancelación."
                      )}
                    </li>
                  </ul>
                </div>

                {/* 8. Commission and Payouts */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">8</span>
                    {tr("Commission and Payouts", "Comisiones y Pagos")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>
                      {tr(
                        "ArtB2B will retain a commission from each booking made.",
                        "ArtB2B retendrá una comisión por cada reserva realizada."
                      )}
                    </li>
                    <li>
                      {tr(
                        "Payouts will be issued to venues periodically based on the accumulated balance.",
                        "Los pagos se emitirán a los espacios periódicamente según el saldo acumulado."
                      )}
                    </li>
                  </ul>
                </div>

                {/* 9. Limitation of Liability */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">9</span>
                    {tr("Limitation of Liability", "Limitación de Responsabilidad")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
                    <li>
                      {tr(
                        "ArtB2B is not responsible for any damages, loss, or theft of artwork during transport or exhibition.",
                        "ArtB2B no se hace responsable de ningún daño, pérdida o robo de obras de arte durante el transporte o la exposición."
                      )}
                    </li>
                    <li>
                      {tr(
                        "Artists and venues agree to hold ArtB2B harmless from any liability related to their engagement.",
                        "Los artistas y los espacios acuerdan eximir a ArtB2B de cualquier responsabilidad relacionada con su colaboración."
                      )}
                    </li>
                  </ul>
                </div>

                {/* 10. Amendments */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">10</span>
                    {tr("Amendments", "Modificaciones")}
                  </h3>
                  <p>
                    {tr(
                      "ArtB2B reserves the right to modify these terms at any time. Users will be notified of any major changes.",
                      "ArtB2B se reserva el derecho de modificar estos términos en cualquier momento. Los usuarios serán notificados de cualquier cambio importante."
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* PART 2: PRIVACY POLICY */}
            <div id="privacy" className="scroll-mt-28 pt-8">
              <div className="border-b border-zinc-200 pb-6 mb-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/15 text-zinc-950 flex items-center justify-center flex-shrink-0 font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-950">
                    {tr("Privacy Policy for ArtB2B", "Política de Privacidad de ArtB2B")}
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1">
                    {tr(
                      "How we collect, use, share, and safeguard your personal data.",
                      "Cómo recopilamos, usamos, compartimos y protegemos tus datos personales."
                    )}
                  </p>
                </div>
              </div>

              <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
                {/* 1. Introduction */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">1</span>
                    {tr("Introduction", "Introducción")}
                  </h3>
                  <p>
                    {tr(
                      "ArtB2B values your privacy and is committed to protecting your personal data. This policy explains how we collect, use, share, and protect your information.",
                      "ArtB2B valora tu privacidad y se compromete a proteger tus datos personales. Esta política explica cómo recopilamos, usamos, compartimos y protegemos tu información."
                    )}
                  </p>
                </div>

                {/* 2. Data Collection */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">2</span>
                    {tr("Data Collection", "Recopilación de Datos")}
                  </h3>
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
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">3</span>
                    {tr("How We Use Your Data", "Cómo Usamos Tus Datos")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
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
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">4</span>
                    {tr("Sharing Your Data", "Uso Compartido de Datos")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
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
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">5</span>
                    {tr("Data Security", "Seguridad de los Datos")}
                  </h3>
                  <p>
                    {tr(
                      "We use secure servers and encryption to protect your data. We limit access to your data to authorized personnel only.",
                      "Utilizamos servidores seguros y cifrado para proteger tus datos. Limitamos el acceso a tus datos únicamente al personal autorizado."
                    )}
                  </p>
                </div>

                {/* 6. Your Rights */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">6</span>
                    {tr("Your Rights", "Tus Derechos")}
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 mt-3 text-zinc-700">
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
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">7</span>
                    {tr("Retention", "Conservación de Datos")}
                  </h3>
                  <p>
                    {tr(
                      "We will retain your information for as long as needed to provide you with our services or as required by law.",
                      "Conservaremos tu información durante el tiempo que sea necesario para prestarte nuestros servicios o según lo exija la ley."
                    )}
                  </p>
                </div>

                {/* 8. Changes to This Policy */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
                  <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs flex items-center justify-center font-bold">8</span>
                    {tr("Changes to This Policy", "Cambios en Esta Política")}
                  </h3>
                  <p>
                    {tr(
                      "We may update this policy occasionally. We will notify you of significant changes via email or app notifications.",
                      "Podemos actualizar esta política ocasionalmente. Te notificaremos los cambios importantes por correo electrónico o mediante notificaciones en la aplicación."
                    )}
                  </p>
                </div>

                {/* 9. Contact Us */}
                <div className="bg-zinc-950 text-white p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-md">
                  <h3 className="font-heading text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-brand-accent" />
                    {tr("9. Contact Us", "9. Contacto")}
                  </h3>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
