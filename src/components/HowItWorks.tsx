import { Upload, Handshake, Store } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Artists Upload & Set Price",
      description: "Visual artists list their available paintings or photography on the app, specifying preferred exhibition details and lease/sale prices.",
      icon: Upload,
    },
    {
      number: "02",
      title: "Venues Request & Match",
      description: "Bistros, coffee shops, and workspaces browse local portfolios, select pieces that fit their aesthetic, and book exhibition periods.",
      icon: Handshake,
    },
    {
      number: "03",
      title: "Spaces Transform & Sell",
      description: "Art is hung on empty walls. Guests discover local talent, scanning on-wall QR codes to read about the piece and purchase it directly.",
      icon: Store,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-y border-zinc-200/60 relative overflow-hidden">
      
      {/* Decorative subtle circles in background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-6 leading-none">
            Created in the studio, seen by the world.
          </h2>
          <p className="font-sans text-base text-zinc-500">
            ArtB2B cuts out traditional gallery gatekeepers, making physical art display as seamless as digital listings.
          </p>
        </div>

        {/* 3-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-[1.5px] border-t-2 border-dashed border-zinc-200 -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="group flex flex-col items-center md:items-start text-center md:text-left relative bg-zinc-50/50 p-8 rounded-3xl border border-zinc-100 hover:border-brand-accent/60 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Large Number Indicator */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 font-heading text-5xl font-extrabold tracking-tighter text-zinc-200 group-hover:text-zinc-300 transition-colors">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 text-white group-hover:bg-brand-accent group-hover:text-zinc-950 flex items-center justify-center shadow-lg transition-colors duration-300 mb-6 mt-2">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Step Content */}
                <h3 className="font-heading text-lg font-bold text-zinc-950 mb-3 group-hover:text-brand-accent-hover transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-zinc-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
