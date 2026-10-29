import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Layers,
  MapPin,
  Truck,
  CalendarCheck,
} from "lucide-react";
import { APP_URL, VERIFIED_VENUES } from "@/lib/network-data";

export default function PayByDayPage() {
  const sampleVenues = VERIFIED_VENUES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-grow">
        {/* PAY BY DAY / INTRO */}
        <section className="py-20 md:py-28 bg-[#fcfcfd] border-b border-zinc-200/60 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-brand-accent/15 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/35 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-950" />
                Pay by Day
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.05] mb-6">
                A Flexible Way to Exhibit
              </h1>

              <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Book exhibition opportunities without committing to a monthly Subscription. With Pay by Day, you are responsible for artwork transport, installation, removal and other practical arrangements.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md hover:shadow-xl font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
                >
                  <span>Find Exhibition Space</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-accent" />
                </a>

                <Link
                  href="/subscriptions"
                  className="px-8 py-4 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm font-sans text-sm font-bold inline-flex items-center justify-center gap-2"
                >
                  <span>Compare With Subscriptions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How Pay by Day Works in the App */}
        <section className="py-24 bg-white border-b border-zinc-200/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 mb-4">
                How Pay by Day Booking Works
              </h2>
              <p className="font-sans text-base text-zinc-600">
                Direct space reservation through the ARTB2B app for artists who prefer to manage their own exhibition logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
                  Step 01
                </span>
                <h3 className="font-heading text-xl font-bold text-zinc-950 mt-1 mb-3">
                  Send a Booking Request
                </h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  Explore participating venues in the ARTB2B app and send booking requests for available exhibition spaces and dates.
                </p>
              </div>

              <div className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-6">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
                  Step 02
                </span>
                <h3 className="font-heading text-xl font-bold text-zinc-950 mt-1 mb-3">
                  Venue Confirmation
                </h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  Venues review and approve or decline booking requests. Once confirmed, the exhibition is added to both the artist and venue calendar in the app.
                </p>
              </div>

              <div className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/80">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-6">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
                  Step 03
                </span>
                <h3 className="font-heading text-xl font-bold text-zinc-950 mt-1 mb-3">
                  Artist Managed Logistics
                </h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  You transport your artwork directly to the venue on check in day, install it in the allocated space, and collect your artwork at the end of the exhibition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Side by Side Comparison: Pay by Day vs Subscription */}
        <section className="py-24 bg-[#fcfcfd]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 mb-4">
                Pay by Day vs Managed Subscription
              </h2>
              <p className="font-sans text-base text-zinc-600">
                Understand the practical differences before selecting how you exhibit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* Pay by Day */}
              <div className="rounded-[2.25rem] bg-white border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-zinc-950 text-white flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-black text-zinc-950">Pay by Day</h3>
                      <p className="font-sans text-xs text-zinc-500">One off self managed exhibitions</p>
                    </div>
                  </div>

                  <ul className="space-y-4 font-sans text-sm text-zinc-700 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
                      <span>Book individual exhibition periods without a monthly Subscription</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
                      <span>Artist manages transport directly to and from the venue</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
                      <span>Artist handles installation and removal at the venue</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
                      <span>Bookings subject to individual venue approval</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-sans text-sm font-bold text-center transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Find Exhibition Space</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-accent" />
                </a>
              </div>

              {/* Subscription */}
              <div className="rounded-[2.25rem] bg-zinc-950 text-white border border-zinc-800 p-8 sm:p-10 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-brand-accent text-zinc-950 flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-black text-white">
                        ARTB2B Subscription
                      </h3>
                      <p className="font-sans text-xs text-brand-accent">
                        Continuous managed exhibition service
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4 font-sans text-sm text-zinc-300 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Choose 1, 2, 3 or 4 spaces (1 × 1 m each) from £100/month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Deliver once to our operational hub in Hoxton</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>ARTB2B manages storage, transport to venues and installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Curatorial coordination and regular artwork rotation included</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/subscriptions"
                  className="w-full py-4 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 font-sans text-sm font-bold text-center transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>View Subscription Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Participating Venues Preview */}
            <div className="text-center mb-10">
              <h3 className="font-heading text-2xl font-bold text-zinc-950">
                Explore Participating Venues in the App
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleVenues.map((venue) => (
                <div
                  key={venue.id}
                  className="rounded-3xl overflow-hidden bg-white border border-zinc-200/80 shadow-sm flex flex-col"
                >
                  <div className="h-48 overflow-hidden bg-zinc-100">
                    <img
                      src={venue.photoUrl}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      {venue.neighborhood}
                    </p>
                    <h4 className="font-heading text-lg font-bold text-zinc-950 mt-0.5">
                      {venue.name}
                    </h4>
                    <p className="font-sans text-xs text-zinc-500 mt-1">{venue.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
