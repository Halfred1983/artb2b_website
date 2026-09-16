import { Users, Award, Landmark, ArrowRight } from "lucide-react";

export default function Ambassador() {
  const benefits = [
    {
      title: "Open Unexpected Spaces",
      description: "Identify unique local spots—like boutique hotels, trendy cafés, co-working spaces, and bistros—that have blank walls just waiting to be transformed into creative hubs.",
      icon: Landmark,
    },
    {
      title: "Connect Art with Business",
      description: "Introduce venue owners to our direct digital platform, helping them understand how easy it is to host local culture, attract new customers, and generate a new income stream.",
      icon: Award,
    },
    {
      title: "Grow Your Professional Network",
      description: "Expand your reach across hospitality, lifestyle, and design industries while playing a foundational role in an innovative, rapidly growing art-tech ecosystem.",
      icon: Users,
    }
  ];

  return (
    <section id="ambassador" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative accent blob */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-zinc-100 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-zinc-950 rounded-[3rem] text-white p-8 sm:p-16 lg:p-20 relative overflow-hidden border border-zinc-800 shadow-2xl">
          
          {/* Subtle grid pattern for dark container */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-accent/15 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="px-3 py-1.5 rounded-full bg-brand-accent text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6">
                JOIN THE MOVEMENT
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-none mb-6">
                Become an <br />
                Ambassador.
              </h2>
              <p className="font-sans text-base text-zinc-400 max-w-lg mb-8 leading-relaxed">
                You don&apos;t need to be an art historian or a professional curator to make a difference. We are looking for natural relationship builders and passionate connectors to introduce local venue owners to the ARTB2B platform, building bridges between everyday business spaces and incredible independent creativity.
              </p>

              {/* Benefits list (mini-bullets) */}
              <div className="flex flex-col gap-4 mb-8 w-full">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-brand-accent/50 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">{benefit.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA button */}
              <a
                href="#ambassador-apply"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-accent text-zinc-950 hover:bg-brand-accent-hover font-sans text-sm font-bold transition-all hover:translate-x-0.5"
              >
                Apply for Ambassador
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-6 relative flex justify-center">
              
              {/* Main Community Photo */}
              <div className="relative w-full max-w-md h-[400px] rounded-[2.5rem] overflow-hidden border-4 border-zinc-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=600&auto=format&fit=crop" 
                  alt="ArtB2B Community Event" 
                  className="w-full h-full object-cover" 
                />
                
                {/* Float tag overlay */}
                <div className="absolute top-6 right-6 bg-zinc-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-950 flex items-center justify-center text-[8px] font-bold text-white">S</div>
                    <div className="w-6 h-6 rounded-full bg-brand-accent border border-zinc-950 flex items-center justify-center text-[8px] font-bold text-zinc-950">A</div>
                    <div className="w-6 h-6 rounded-full bg-zinc-200 border border-zinc-950 flex items-center justify-center text-[8px] font-bold text-zinc-800">L</div>
                  </div>
                  <span className="text-[10px] font-semibold text-white">50+ Active Venues in London</span>
                </div>

                {/* Floating testimonial-like card inside image */}
                <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 backdrop-blur-md border border-white/10 p-5 rounded-3xl shadow-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-accent text-zinc-950 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    ★
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 italic">&quot;Ever since I started bringing venues onto the platform, it completely changed my life and how I approach local businesses. Before, these bars and restaurants were just places where I went to eat—now, I have a real, professional tool to pitch to them and transform their empty walls.&quot;</p>
                    <p className="text-[10px] font-bold text-white mt-2">- Nesa, Ambassador (Italy)</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
