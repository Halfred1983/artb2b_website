import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ArtistGallery() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd]">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col items-center justify-center text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-zinc-950 mb-6">
          Artist Gallery
        </h1>
        <p className="font-sans text-lg text-zinc-600 max-w-xl mb-10 leading-relaxed">
          This page will showcase the beautiful art collections shared by our visual artists.
        </p>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full bg-zinc-950 text-white font-sans text-sm font-semibold hover:bg-zinc-800 transition-all border border-zinc-950 shadow-sm"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
