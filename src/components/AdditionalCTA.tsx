"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function AdditionalCTA() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#090A0F] relative border-t border-white/5 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 sm:p-16 rounded-3xl bg-surface-card border border-gold-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Start Your Design Journey
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight mb-6">
            Ready to <span className="text-gold-gradient">Elevate Your Brand</span>?
          </h2>

          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Let&apos;s collaborate to build an iconic visual identity, high-impact packaging, or conversion-driven social creatives tailored for your market distinction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-background rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold-500/25 transition-all group"
            >
              <Calendar size={18} />
              Schedule a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#portfolio"
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-surface border border-white/20 text-foreground rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider hover:border-gold-400 hover:text-gold-300 transition-all"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
