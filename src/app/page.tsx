import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import PortfolioGallery from "@/components/PortfolioGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PortfolioGallery />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
