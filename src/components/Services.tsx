"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Sparkles, 
  Share2, 
  Box, 
  CreditCard, 
  BookOpen, 
  Printer, 
  PenTool, 
  Brush, 
  ArrowRight,
  Check
} from "lucide-react";

export const servicesData = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    icon: Palette,
    price: "From $850",
    description: "Complete visual identity guidelines, logo mark, color system, typography pairs, and brand equity documentation for long-term recognition.",
    features: ["Primary & Secondary Logos", "Brand Style Guide PDF", "Color & Typography System", "Social & Web Assets"],
  },
  {
    id: "logo-design",
    title: "Logo Design",
    icon: Sparkles,
    price: "From $450",
    description: "Bespoke logo marks crafted from concept to vector perfection. Includes full ownership, vector formats, and monograms.",
    features: ["3 Unique Concepts", "Full Vector Deliverables", "Favicon & Avatar Formats", "Monogram Variant"],
  },
  {
    id: "social-creatives",
    title: "Social Media Creatives",
    icon: Share2,
    price: "From $350",
    description: "Eye-catching Instagram feeds, carousel story decks, LinkedIn banners, and ad creative templates designed to maximize engagement.",
    features: ["10 Custom Post Templates", "Carousel Slide System", "Editable Canva/Figma Source", "Ad Performance Layouts"],
  },
  {
    id: "packaging-design",
    title: "Packaging Design",
    icon: Box,
    price: "From $950",
    description: "Luxury product boxes, cosmetic bottles, labels, and pouch designs engineered for retail shelf stand-out and premium unboxing.",
    features: ["3D Realistic Mockups", "Print-Ready Dielines", "Label & Container Art", "Supplier Spec Sheet"],
  },
  {
    id: "business-cards",
    title: "Business Cards",
    icon: CreditCard,
    price: "From $180",
    description: "Exclusive corporate and personal business card layouts featuring gold foil embossing, spot UV, and luxury matte finishes.",
    features: ["Dual-Sided Layouts", "Specialty Foil Specs", "Print PDF & Vector Files", "Multiple Name Variations"],
  },
  {
    id: "brochure-design",
    title: "Brochure Design",
    icon: BookOpen,
    price: "From $400",
    description: "Multi-page corporate brochures, tri-fold pamphlets, and company profile decks designed with clear visual hierarchy.",
    features: ["Bi-Fold & Tri-Fold Layouts", "Interactive Digital PDF", "High-Res Print PDF", "Custom Infographics"],
  },
  {
    id: "print-design",
    title: "Print Design",
    icon: Printer,
    price: "From $300",
    description: "Posters, flyers, banners, magazine ads, and event collateral crafted with precise typography and CMYK print standards.",
    features: ["Event Posters & Flyers", "Large Format Banners", "CMYK Color Accuracy", "Bleed & Margin Ready"],
  },
  {
    id: "illustration",
    title: "Illustration",
    icon: PenTool,
    price: "From $350",
    description: "Custom vector illustrations, brand mascots, digital artwork, and icon sets tailored to elevate brand storytelling.",
    features: ["Vector Scalability", "Custom Character Art", "Infographic Graphics", "Commercial License"],
  },
  {
    id: "custom-artwork",
    title: "Custom Artwork",
    icon: Brush,
    price: "Custom Quote",
    description: "Bespoke digital paintings, wall graphics, merch prints, and editorial illustrations designed for unique visual impact.",
    features: ["One-of-a-Kind Design", "Ultra-High Resolution", "Art Directing Consultation", "Full Copyright Transfer"],
  },
];

export default function Services() {
  const handleServiceSelect = (serviceTitle: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      // Pre-select service dropdown if element exists
      const selectElement = document.getElementById("service-select") as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = serviceTitle;
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Specialized Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            Design Services & <span className="text-gold-gradient">Solutions</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl text-sm sm:text-base">
            Client-focused design packages tailored for ambitious startups, luxury brands, and growing businesses seeking market distinction.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-transparent mt-4 rounded-full" />
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-8 rounded-2xl bg-surface-card border border-white/10 hover:border-gold-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-serif font-semibold text-gold-300 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs text-foreground/80">
                        <Check size={14} className="text-gold-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleServiceSelect(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-gold-500 hover:text-background hover:border-gold-500 transition-all duration-300 group/btn"
                >
                  <span>Request Quote</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
