"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronDown, Search, ArrowRight, HelpCircle, Paintbrush, Building2, ShieldQuestion, Globe, MessageSquare } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  category: "general" | "artist" | "venue";
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "general" | "artist" | "venue">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "who-is-it-for",
      question: "Who is ArtB2B app for?",
      category: "general",
      answer: (
        <div className="space-y-4">
          <p className="text-zinc-650 leading-relaxed font-sans">ArtB2B is designed to bring art where life happens by connecting creators, spaces, and art enthusiasts. It is for you if:</p>
          <ul className="list-none pl-0 space-y-3 text-sm text-zinc-600 font-sans">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/25 text-zinc-950 flex items-center justify-center font-bold text-xs mt-0.5">1</span>
              <span><strong>You are an artist (painter or photographer):</strong> You are looking for an easy way to exhibit your work physically, grow your local audience, and potentially sell your art without gallery commissions.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/25 text-zinc-950 flex items-center justify-center font-bold text-xs mt-0.5">2</span>
              <span><strong>You are a venue (any type of venue!):</strong> If you have empty wall space (cafes, bistros, hotels, office lobbies, workspaces), you can monetise that space and enrich it with great, rotating original artwork.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/25 text-zinc-950 flex items-center justify-center font-bold text-xs mt-0.5">3</span>
              <span><strong>You are an art lover:</strong> You want to discover local and global artists, attend exhibitions in your neighborhood, and purchase original artwork securely directly off the walls.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "availability",
      question: "Where is ArtB2B available?",
      category: "general",
      answer: (
        <p className="text-zinc-600 leading-relaxed font-sans">
          ArtB2B is available <strong>everywhere in the world</strong>! No matter where you are located, you can sign up and start utilizing the platform. If you want to explore collaboration or have specific local questions, just contact us at{" "}
          <a href="mailto:support@artb2b.art" className="font-semibold text-zinc-950 hover:text-brand-accent-hover underline transition-colors">
            support@artb2b.art
          </a>
          .
        </p>
      )
    },
    {
      id: "artist-profile",
      question: "How can I set up my artist profile?",
      category: "artist",
      answer: (
        <p className="text-zinc-600 leading-relaxed font-sans">
          To set up your artist profile, simply download the ArtB2B app from the App Store or Google Play and register as an artist! The app will guide you step by step through the registration process, allowing you to list your biography, select preferred exhibition terms, and upload pictures of your artwork. Once approved, you will be fully set up to discover venues around you and book your next exhibition!
        </p>
      )
    },
    {
      id: "venue-profile",
      question: "How do I set up my venue profile?",
      category: "venue",
      answer: (
        <p className="text-zinc-650 leading-relaxed font-sans">
          To set up your venue profile, download the app and register as a venue! You will be guided through the onboarding flow where you can provide essential details about your space, such as location, description, the number of exhibition spots, and the pricing you wish to charge. Remember to upload a few high quality pictures of your space so artists can easily visualize where their exhibitions will be held. After filling out this information, you will be ready to receive bookings from artists all around the world! If you have any questions along the way, do not hesitate to contact us!
        </p>
      )
    },
    {
      id: "how-to-work",
      question: "How can I work with ArtB2B?",
      category: "general",
      answer: (
        <div className="space-y-3 text-zinc-600 leading-relaxed font-sans">
          <p>
            The <strong>Ambassador Program</strong> at ArtB2B allows you to earn <strong>10% of the booking fees</strong> for any venues you add to our app. Here is how it works:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Contact our support team to register and receive your unique Ambassador Code.</li>
            <li>Introduce venue owners who have wall space to the ArtB2B app.</li>
            <li>Assist them with setting up their account and ensure they enter your Ambassador Code during registration.</li>
            <li>Once their venue is listed and becomes available for bookings, you start earning 10% of every booking made through that venue.</li>
          </ol>
          <p className="text-sm pt-2">
            You will receive your payout directly to your bank account after each exhibition concludes. This is a great way to support local art while earning a steady commission for your networking efforts. To get started, please contact us!
          </p>
        </div>
      )
    },
    {
      id: "venue-payment",
      question: "How do I get paid as a venue?",
      category: "venue",
      answer: (
        <p className="text-zinc-600 leading-relaxed font-sans">
          Every time an artist sends you a booking request on ArtB2B, you have full control to either accept or reject it. Once you accept, the booking is automatically added to your schedule. After the exhibition concludes, the booking payout is processed and included in your fortnightly payout schedule (directly into your bank account every two weeks). Please note that ArtB2B retains 30% of the booking amount as a service fee to facilitate platform operations, payments, and client connections.
        </p>
      )
    },
    {
      id: "artist-payment",
      question: "How do I get paid as an artist?",
      category: "artist",
      answer: (
        <p className="text-zinc-600 leading-relaxed font-sans">
          Selling your artwork through ArtB2B is seamless! You can sell pieces during live physical exhibitions or directly via the app. When your artwork is sold, we provide detailed instructions on how to prepare it for shipping. The buyer covers all shipping costs, so you do not need to worry about postage expenses. As soon as the buyer receives the artwork and its delivery is verified, we process your payout and transfer the funds directly to your bank account.
        </p>
      )
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof faq.answer === "string"
        ? faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        : faq.id.toLowerCase().includes(searchQuery.toLowerCase())); // Fallback basic match

    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "artist":
        return <Paintbrush className="w-4 h-4" />;
      case "venue":
        return <Building2 className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd] relative">
      {/* Background ambient glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-zinc-100 rounded-full blur-3xl pointer-events-none -z-10" />

      <Navbar />

      <main className="flex-grow py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1.5">
              <ShieldQuestion className="w-3.5 h-3.5 text-zinc-950" />
              FAQ Help Center
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-6 leading-tight">
              Frequently Asked <br className="hidden sm:inline" /> Questions
            </h1>
            <p className="font-sans text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about setting up profiles, getting paid, and using the ArtB2B application.
            </p>
          </div>

          {/* Search Bar & Filtering Tabs Container */}
          <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 shadow-sm mb-12 relative overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 -z-10" />

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {(["all", "general", "artist", "venue"] as const).map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? "bg-zinc-950 text-white shadow-md"
                          : "text-zinc-500 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100"
                      }`}
                    >
                      {cat !== "all" && getCategoryIcon(cat)}
                      <span>{cat === "all" ? "All Questions" : cat}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-xl pl-10 pr-4 py-2.5 font-sans text-xs text-zinc-900 placeholder-zinc-400 transition-colors shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`group border rounded-[2rem] transition-all duration-300 bg-white ${
                      isExpanded 
                        ? "border-zinc-950 shadow-md" 
                        : "border-zinc-200/80 hover:border-zinc-350 hover:shadow-sm"
                    }`}
                  >
                    {/* Header Button */}
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between text-left p-6 sm:p-8 cursor-pointer select-none font-heading"
                    >
                      <div className="flex gap-4 items-center pr-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          isExpanded ? "bg-brand-accent text-zinc-950" : "bg-zinc-50 text-zinc-400 group-hover:bg-zinc-100 group-hover:text-zinc-600"
                        }`}>
                          {getCategoryIcon(faq.category)}
                        </div>
                        <h3 className="font-bold text-base sm:text-lg text-zinc-950 leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-zinc-950" : ""
                        }`}
                      />
                    </button>

                    {/* Expandable Panel */}
                    <div
                      className={`overflow-hidden transition-all duration-350 ease-in-out ${
                        isExpanded ? "max-h-[800px] border-t border-zinc-100" : "max-h-0"
                      }`}
                    >
                      <div className="p-6 sm:p-8 pt-6 sm:pt-6 text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 bg-white border border-dashed border-zinc-200 rounded-3xl p-8">
                <HelpCircle className="w-12 h-12 text-zinc-350 mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-zinc-950">No FAQs found</h3>
                <p className="font-sans text-sm text-zinc-500 mt-2 max-w-sm mx-auto">
                  We couldn&apos;t find any questions matching your query &ldquo;{searchQuery}&rdquo;. Try using different keywords or categories.
                </p>
              </div>
            )}
          </div>

          {/* CTA support block */}
          <div className="mt-16 bg-zinc-950 text-white rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden border border-zinc-800 shadow-xl">
            {/* Decorative background blurs */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-left max-w-xl">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white font-sans text-[10px] font-bold uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
                  <MessageSquare className="w-3 h-3 text-brand-accent" />
                  Still have questions?
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                  We are here to help.
                </h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                  If you need additional assistance, want to inquire about custom spaces, or want to discuss local opportunities, get in touch with our team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-end">
                <a
                  href="mailto:support@artb2b.art"
                  className="px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-white text-center font-sans text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Email Support
                </a>
                <Link
                  href="/#partner-form"
                  className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 text-center font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Partner with Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
