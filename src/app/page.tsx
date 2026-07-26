import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import Statistics from "@/components/Statistics";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AdditionalCTA from "@/components/AdditionalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-gold-500/30 selection:text-gold-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <Statistics />
      <Experience />
      <Skills />
      <AdditionalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
