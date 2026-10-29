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

export default function AboutPage() {
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
              About ARTB2B
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.05] mb-6">
              Art Beyond Traditional Galleries
            </h1>

            <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-10">
              ARTB2B connects artists and venues, bringing original artwork into everyday spaces and creating new opportunities for discovery across cafés, restaurants, hotels and creative venues.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/subscriptions"
                className="px-8 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
              >
                <span>Explore Subscriptions</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>
              <Link
                href="/network"
                className="px-8 py-4 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
              >
                <span>Explore Our Network</span>
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
                  Managed Subscriptions
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                  With an ARTB2B Subscription, artists choose one, two, three or four 1 × 1 m exhibition spaces. Artists deliver their artwork to the ARTB2B operational hub in Hoxton, and from there we manage storage, curatorial coordination, transport to participating venues, installation and artwork rotation.
                </p>
                <Link
                  href="/subscriptions"
                  className="text-xs font-bold uppercase tracking-wider text-zinc-950 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>View Subscription Plans</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pay by Day */}
              <div className="rounded-[2.25rem] bg-zinc-50 border border-zinc-200/80 p-8 sm:p-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-zinc-950 mb-3">
                  Pay by Day Flexibility
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                  For artists who prefer a one off exhibition without committing to a monthly Subscription, Pay by Day offers direct booking of exhibition spaces. With Pay by Day, the artist is responsible for artwork delivery, installation, removal and related logistics.
                </p>
                <Link
                  href="/pay-by-day"
                  className="text-xs font-bold uppercase tracking-wider text-zinc-950 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Explore Pay by Day</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Hoxton Operational Hub */}
              <div className="rounded-[2.25rem] bg-zinc-50 border border-zinc-200/80 p-8 sm:p-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-brand-accent flex items-center justify-center mb-6">
                  <Warehouse className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-zinc-950 mb-3">
                  Our Hoxton Operational Hub
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed">
                  Located on Hoxton Street in London, our operational hub serves as the central drop off and storage point for Subscription artworks. Artists deliver approved works once to the hub, enabling coordinated rotations across our London venue network.
                </p>
              </div>

              {/* ARTB2B Art Gallery Network */}
              <div className="rounded-[2.25rem] bg-zinc-50 border border-zinc-200/80 p-8 sm:p-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-zinc-950 mb-3">
                  The ARTB2B Art Gallery Network
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                  We partner with hospitality and creative spaces across London to turn everyday venues into living galleries. Participating venues receive curated artwork displays and regular rotations for their guests.
                </p>
                <Link
                  href="/for-venues"
                  className="text-xs font-bold uppercase tracking-wider text-zinc-950 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-16 bg-zinc-950 text-white rounded-[2.5rem] p-8 sm:p-12 text-center border border-zinc-800">
              <h3 className="font-heading text-3xl font-extrabold mb-4">
                Ready to Exhibit?
              </h3>
              <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mb-8">
                Join ARTB2B, explore available exhibition options and take the next step with your artwork.
              </p>
              <a
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 font-sans text-sm font-bold inline-flex items-center gap-2"
              >
                <span>Join ARTB2B</span>
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
