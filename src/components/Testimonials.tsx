"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"all" | "artist" | "venue">("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "ArtB2B completely changed how I exhibit my work. My paintings are currently on display in a buzzing cafe in downtown Berlin, and I sold two pieces last month without paying any middleman commission! The monthly wall rental covers my art supply budget.",
      author: "Sophia Brooks",
      role: "Visual Artist",
      location: "Berlin, DE",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      category: "artist",
    },
    {
      quote: "Exhibiting local art has brought so much character and warmth to our walls. Our patrons love reading the stories behind each painting by scanning the QR tags. Plus, renting out our empty walls generates an extra £350 a month in steady income.",
      author: "Marcus Vance",
      role: "Owner, Coffee & Canvas",
      location: "London, UK",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      category: "venue",
    },
    {
      quote: "As an independent photographer, getting gallery space is extremely competitive. With ArtB2B, I listed my street photography series and got matched with a modern co-working space within 48 hours. The community feedback has been amazing.",
      author: "Elena Rostova",
      role: "Fine Art Photographer",
      location: "Prague, CZ",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      category: "artist",
    },
    {
      quote: "Our waiting rooms went from sterile and boring to vibrant cultural windows. We lease the walls to local abstract painters, and it has completely shifted the atmosphere of our medical center. Patients comment on the art every day.",
      author: "Dr. Clara Mercer",
      role: "Director, Mercer Clinic",
      location: "Vienna, AT",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      category: "venue",
    }
  ];

  // Filter testimonials based on active tab
  const filteredTestimonials = activeTab === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeTab);

  // Ensure current slide index doesn't overshoot
  const activeTestimonials = filteredTestimonials;
  const slideCount = activeTestimonials.length;
  
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };

  const handleTabChange = (tab: "all" | "artist" | "venue") => {
    setActiveTab(tab);
    setCurrentSlide(0); // Reset slide index on tab change
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-50 border-b border-zinc-200/60 relative overflow-hidden">
      
      {/* Aesthetic blur highlights */}
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-zinc-200/40 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Success Stories</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-8 leading-none">
            Loved by Artists & Venues.
          </h2>

          {/* Testimonial Category Selector */}
          <div className="inline-flex items-center bg-white p-1 rounded-full border border-zinc-200 shadow-sm">
            {(["all", "artist", "venue"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-5 py-2 rounded-full text-xs font-semibold font-sans uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-zinc-950 text-white"
                    : "text-zinc-500 hover:text-zinc-950"
                }`}
              >
                {tab === "all" ? "All Stories" : tab === "artist" ? "Artists" : "Venues"}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Slider Layout */}
        <div className="relative bg-white border border-zinc-200/80 rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-lg min-h-[380px] flex flex-col justify-between">
          
          {/* Quote Icon Overlay */}
          <Quote className="absolute top-8 right-12 w-24 h-24 text-zinc-100 -z-0 pointer-events-none" />

          {slideCount > 0 ? (
            <div className="relative z-10 flex flex-col justify-between h-full animate-fade-in duration-300">
              
              {/* Quote text */}
              <div className="mb-8">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(activeTestimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-accent text-zinc-950" />
                  ))}
                </div>
                <blockquote className="font-sans text-xl sm:text-2xl text-zinc-900 leading-relaxed font-medium">
                  &ldquo;{activeTestimonials[currentSlide].quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-zinc-100 pt-8 mt-auto">
                <div className="flex items-center gap-4">
                  <img 
                    src={activeTestimonials[currentSlide].avatar} 
                    alt={activeTestimonials[currentSlide].author} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-accent/50 shadow-md"
                  />
                  <div>
                    <h4 className="font-heading text-lg font-bold text-zinc-950 leading-none">
                      {activeTestimonials[currentSlide].author}
                    </h4>
                    <p className="font-sans text-xs text-zinc-500 mt-1">
                      {activeTestimonials[currentSlide].role} &bull; <span className="font-semibold text-zinc-700">{activeTestimonials[currentSlide].location}</span>
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-950 text-zinc-800 flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="font-sans text-xs font-bold text-zinc-400">
                    {currentSlide + 1} / {slideCount}
                  </span>
                  <button 
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-950 text-zinc-800 flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center py-12 text-zinc-400">No testimonials found for this category.</div>
          )}

        </div>

      </div>
    </section>
  );
}
