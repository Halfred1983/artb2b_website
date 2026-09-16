import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AudienceSplit from "@/components/AudienceSplit";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Ambassador from "@/components/Ambassador";
import Footer from "@/components/Footer";
import PaintbrushTrail from "@/components/PaintbrushTrail";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd] relative">
      <PaintbrushTrail />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <AudienceSplit />
        <Testimonials />
        <ContactForm />
        <Ambassador />
      </main>
      <Footer />
    </div>
  );
}
