import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Doctors from "@/components/sections/Doctors";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Media from "@/components/sections/Media";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Doctors />
      <BeforeAfter />
      <Media />
      <Testimonials />
      <Booking />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
