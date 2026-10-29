import { UserPlus, Layers, Warehouse, RefreshCw, ArrowUpRight } from "lucide-react";
import { APP_REGISTER_URL } from "@/lib/network-data";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      text: "Join ARTB2B and create your artist profile.",
      icon: UserPlus,
    },
    {
      number: "02",
      text: "Choose a Subscription or Pay by Day.",
      icon: Layers,
    },
    {
      number: "03",
      text: "For Subscriptions, deliver your artwork to the ARTB2B operational hub in Hoxton.",
      icon: Warehouse,
    },
    {
      number: "04",
      text: "ARTB2B coordinates placement, installation and rotation across participating venues.",
      icon: RefreshCw,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-white border-y border-zinc-200/60 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: HOME / 02 HOW IT WORKS */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 font-sans text-xs font-bold uppercase tracking-wider mb-4 inline-block">
            How It Works
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            From Your Studio to Real Spaces
          </h2>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between bg-zinc-50/70 p-8 rounded-3xl border border-zinc-200/70 hover:border-zinc-950 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white group-hover:bg-brand-accent group-hover:text-zinc-950 flex items-center justify-center shadow-md transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading text-3xl font-black text-zinc-300 group-hover:text-zinc-950 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <p className="font-sans text-base font-medium text-zinc-800 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button: Get Started -> [app registration URL] */}
        <div className="flex justify-center">
          <a
            href={APP_REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800 transition-all border border-zinc-950 shadow-md hover:shadow-xl font-sans text-sm font-bold inline-flex items-center gap-2"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-4 h-4 text-brand-accent" />
          </a>
        </div>
      </div>
    </section>
  );
}
