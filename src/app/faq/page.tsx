"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  ArrowRight,
  HelpCircle,
  Paintbrush,
  Building2,
  ShieldQuestion,
  Globe,
  MessageSquare,
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  category: "general" | "artist" | "venue";
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "general" | "artist" | "venue">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("subscriptions-vs-paybyday");

  const faqs: FAQItem[] = [
    {
      id: "subscriptions-vs-paybyday",
      question: "What is the difference between an ARTB2B Subscription and Pay by Day?",
      category: "artist",
      answer: (
        <div className="space-y-4 font-sans text-zinc-600 leading-relaxed">
          <p>
            <strong>ARTB2B Subscription:</strong> Choose one, two, three or four 1 × 1 m exhibition spaces (£100, £150, £200 or £250 per month). You deliver your approved artwork once to the ARTB2B operational hub in Hoxton. From there, ARTB2B manages storage, curatorial coordination, transportation to participating venues, installation and regular artwork rotation.
          </p>
          <p>
            <strong>Pay by Day:</strong> Book exhibition space without committing to a monthly Subscription. With Pay by Day, you arrange and manage your own artwork transport, installation, removal and related logistics directly with the participating venue.
          </p>
        </div>
      ),
    },
    {
      id: "subscription-delivery",
      question: "How does artwork delivery work for Subscriptions?",
      category: "artist",
      answer: (
        <p className="text-zinc-600 leading-relaxed font-sans">
          Artists deliver their artwork to the ARTB2B operational hub in Hoxton, London. ARTB2B does not collect artwork from artists&apos; studios. Once your artwork is received at our Hoxton hub, ARTB2B manages transportation to participating venues, installation and subsequent artwork rotation as part of the Subscription service.
        </p>
      ),
    },
    {
      id: "subscription-pricing",
      question: "How much does an ARTB2B Subscription cost?",
      category: "artist",
      answer: (
        <div className="space-y-3 text-zinc-600 leading-relaxed font-sans">
          <p>Each ARTB2B Space measures 1 × 1 m. Our current monthly plans are:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li><strong>One Space:</strong> £100 / month (1 × 1 m exhibition space)</li>
            <li><strong>Two Spaces:</strong> £150 / month (£75 per space · Save 25%)</li>
            <li><strong>Three Spaces:</strong> £200 / month (£66.67 per space · Save 33%)</li>
            <li><strong>Four Spaces:</strong> £250 / month (£62.50 per space · Best Value · Save 37.5%)</li>
          </ul>
          <p className="text-sm pt-1">
            Subscriptions have a 3 month minimum commitment and renew automatically every month. You can change your package anytime from your profile in the app.
          </p>
        </div>
      ),
    },
    {
      id: "artwork-sales",
      question: "What happens if my artwork sells during an exhibition?",
      category: "artist",
      answer: (
        <p className="text-zinc-600 leading-relaxed font-sans">
          You always set the sale price of your artwork in your artist profile. If your artwork sells through ARTB2B, we retain 30% as commission and you keep 70%.
        </p>
      ),
    },
    {
      id: "for-venues-network",
      question: "How can my venue join the ARTB2B Art Gallery Network?",
      category: "venue",
      answer: (
        <p className="text-zinc-600 leading-relaxed font-sans">
          Bring original art into your space and become part of the ARTB2B Art Gallery Network. We coordinate artwork selection, installation and rotation, helping cafés, restaurants, hotels and creative spaces offer guests a changing cultural experience. Visit our{" "}
          <Link href="/for-venues" className="font-semibold text-zinc-950 underline">
            For Venues
          </Link>{" "}
          page or use the Partner Inquiry form to get started.
        </p>
      ),
    },
    {
      id: "who-is-it-for",
      question: "Who is ARTB2B for?",
      category: "general",
      answer: (
        <div className="space-y-4">
          <p className="text-zinc-600 leading-relaxed font-sans">
            ARTB2B connects artists and venues, bringing original artwork into everyday spaces and creating new opportunities for discovery:
          </p>
          <ul className="list-none pl-0 space-y-3 text-sm text-zinc-600 font-sans">
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-brand-accent/25 text-zinc-950 flex items-center justify-center font-bold text-xs mt-0.5">
                1
              </span>
              <span>
                <strong>Visual Artists:</strong> Exhibit your work across participating cafés, restaurants, hotels and creative venues via a managed Subscription or flexible Pay by Day booking.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-brand-accent/25 text-zinc-950 flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </span>
              <span>
                <strong>Hospitality &amp; Creative Venues:</strong> Transform your walls into an active gallery space with coordinated artwork displays and regular rotations.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-brand-accent/25 text-zinc-950 flex items-center justify-center font-bold text-xs mt-0.5">
                3
              </span>
              <span>
                <strong>Guests &amp; Art Lovers:</strong> Discover and purchase contemporary artwork in the everyday places you already visit.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.id.toLowerCase().includes(searchQuery.toLowerCase());

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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-zinc-100 rounded-full blur-3xl pointer-events-none -z-10" />

      <Navbar />

      <main className="flex-grow py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-zinc-950 font-sans text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1.5">
              <ShieldQuestion className="w-3.5 h-3.5 text-zinc-950" />
              FAQ Help Centre
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mb-6 leading-tight">
              Frequently Asked <br className="hidden sm:inline" /> Questions
            </h1>
            <p className="font-sans text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Find answers about ARTB2B Subscriptions, our Hoxton operational hub, Pay by Day bookings and the ARTB2B Art Gallery Network.
            </p>
          </div>

          {/* Search Bar & Filtering Tabs Container */}
          <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 shadow-sm mb-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between text-left p-6 sm:p-8 cursor-pointer select-none font-heading"
                    >
                      <div className="flex gap-4 items-center pr-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                            isExpanded
                              ? "bg-brand-accent text-zinc-950"
                              : "bg-zinc-50 text-zinc-400 group-hover:bg-zinc-100 group-hover:text-zinc-600"
                          }`}
                        >
                          {getCategoryIcon(faq.category)}
                        </div>
                        <h3 className="font-bold text-base sm:text-lg text-zinc-950 leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-zinc-950" : ""
                        }`}
                      />
                    </button>

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
                  We could not find any questions matching your query &ldquo;{searchQuery}&rdquo;.
                </p>
              </div>
            )}
          </div>

          {/* CTA support block */}
          <div className="mt-16 bg-zinc-950 text-white rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden border border-zinc-800 shadow-xl">
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
                  Reach out to our team for questions about Subscriptions, Pay by Day or joining the ARTB2B Art Gallery Network.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-end">
                <a
                  href="mailto:info@artb2b.art"
                  className="px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-white text-center font-sans text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Email Us
                </a>
                <Link
                  href="/#partner-form"
                  className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-zinc-950 text-center font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Partner With Us</span>
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
