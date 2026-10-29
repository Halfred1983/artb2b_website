import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  XCircle,
  Warehouse,
  Tag,
  ArrowUpRight,
  Layers,
  Info,
} from "lucide-react";
import {
  APP_REGISTER_URL,
  SUBSCRIPTION_PLANS,
  SUBSCRIPTION_INCLUDED_ITEMS,
  SUBSCRIPTION_NOT_INCLUDED_ITEMS,
  SUBSCRIPTION_TERMS,
} from "@/lib/network-data";

export default function SubscriptionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd]">
      <Navbar />

      <main className="flex-grow">
        {/* SUBSCRIPTIONS / INTRO */}
        <section className="py-20 md:py-28 bg-[#fcfcfd] relative overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/35 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-zinc-950" />
                ARTB2B Subscriptions
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.05] mb-6">
                Exhibit Continuously. We Handle the Details.
              </h1>

              <p className="font-sans text-base sm:text-lg text-zinc-600 leading-relaxed">
                Choose one, two, three or four exhibition spaces, each measuring 1 × 1 m. Your monthly Subscription includes storage, curatorial coordination, transportation from our Hoxton hub to venues, installation and artwork rotation.
              </p>
            </div>

            {/* Four Plan Cards with Verified Prices from the Live App */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {SUBSCRIPTION_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  id={plan.id}
                  className={`relative rounded-[2.25rem] p-8 flex flex-col justify-between border transition-all duration-300 ${
                    plan.popular
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-2xl lg:scale-[1.03]"
                      : "bg-white text-zinc-950 border-zinc-200/80 hover:border-zinc-950 shadow-sm hover:shadow-xl"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 min-h-[28px]">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          plan.popular ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        {plan.spaces} × (1 × 1 m)
                      </span>
                      {plan.badge && (
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                            plan.popular
                              ? "bg-brand-accent text-zinc-950"
                              : "bg-zinc-100 text-zinc-800 border border-zinc-200"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="font-heading text-2xl font-black mb-1">{plan.name}</h2>
                    <p
                      className={`font-sans text-xs mb-6 ${
                        plan.popular ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      {plan.unitPrice}
                    </p>

                    <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-zinc-200/20">
                      <span className="font-heading text-5xl font-black">{plan.price}</span>
                      <span
                        className={`font-sans text-xs font-semibold ${
                          plan.popular ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        / month
                      </span>
                    </div>

                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-sans">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              plan.popular ? "text-brand-accent" : "text-zinc-950"
                            }`}
                          />
                          <span className={plan.popular ? "text-zinc-200" : "text-zinc-600"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={APP_REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-2xl font-sans text-xs font-bold uppercase tracking-wider text-center transition-all inline-flex items-center justify-center gap-1.5 ${
                      plan.popular
                        ? "bg-brand-accent text-zinc-950 hover:bg-brand-accent-hover shadow-md"
                        : "bg-zinc-950 text-white hover:bg-zinc-800"
                    }`}
                  >
                    <span>Select Plan</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            {/* Included / Not Included / Sales Commission from the App */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* What's Included in Every Package */}
              <div className="lg:col-span-7 bg-white rounded-[2.25rem] border border-zinc-200/80 p-8 sm:p-10 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-zinc-950 mb-6">
                  What is included in every Subscription
                </h3>
                <ul className="space-y-4">
                  {SUBSCRIPTION_INCLUDED_ITEMS.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 font-sans text-sm text-zinc-700 leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 fill-brand-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Not Included + Sales Commission + Terms */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Not Included */}
                <div className="bg-white rounded-[2rem] border border-zinc-200/80 p-8 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-zinc-950 mb-4">
                    What is not included
                  </h3>
                  <ul className="space-y-3.5">
                    {SUBSCRIPTION_NOT_INCLUDED_ITEMS.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 font-sans text-sm text-zinc-600 leading-relaxed"
                      >
                        <XCircle className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Commission Box from App */}
                <div className="bg-brand-accent/20 rounded-[2rem] border border-brand-accent/40 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 text-brand-accent flex items-center justify-center">
                      <Tag className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-zinc-950">
                      If your artwork sells
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-zinc-800 leading-relaxed">
                    We keep 30% as commission, you keep 70%. You always set the sale price.
                  </p>
                </div>

                {/* Verified Plan Terms from App */}
                <div className="bg-zinc-100/80 rounded-[2rem] border border-zinc-200 p-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 mb-3">
                    <Info className="w-4 h-4 text-zinc-950" />
                    <span>Subscription Terms</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-600 font-sans">
                    {SUBSCRIPTION_TERMS.map((term, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-bold text-zinc-950">•</span>
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUBSCRIPTIONS / LOGISTICS */}
        <section className="py-24 bg-white border-t border-zinc-200/60">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="bg-zinc-950 text-white rounded-[3rem] p-8 sm:p-14 lg:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-brand-accent font-sans text-xs font-bold uppercase tracking-wider mb-6">
                    <Warehouse className="w-4 h-4" />
                    <span>Hoxton Operational Hub · London N1</span>
                  </div>

                  <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                    How Artwork Delivery Works
                  </h2>

                  <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
                    Artists deliver their artwork to the ARTB2B operational hub in Hoxton. From there, ARTB2B manages transportation to participating venues, installation and subsequent artwork rotation as part of the Subscription service.
                  </p>
                </div>

                <div className="shrink-0 w-full lg:w-auto">
                  <a
                    href={APP_REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full lg:w-auto px-9 py-4 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 font-sans text-sm font-bold inline-flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>Join Now</span>
                    <ArrowUpRight className="w-4 h-4" />
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
