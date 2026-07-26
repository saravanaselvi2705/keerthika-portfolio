"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const clientBrands = [
  { name: "AURÉLIA LONDON", category: "Luxury Jewelry" },
  { name: "NOIR & GOLD", category: "Lifestyle & Apparel" },
  { name: "CREOVIX MEDIA", category: "Digital Agency" },
  { name: "HOSFACE CARE", category: "Healthcare" },
  { name: "OPULENCE MAG", category: "Editorial Publishing" },
  { name: "VERVE COSMETICS", category: "Beauty & Packaging" },
  { name: "LUMINA TECH", category: "SaaS & Tech" },
  { name: "SOLIS REALTY", category: "Real Estate" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-[#0B0D14] border-t border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 flex items-center justify-center gap-2">
            <ShieldCheck size={16} /> Trusted By Ambitious Brands & Enterprises Worldwide
          </p>
        </div>

        {/* Marquee Banner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {clientBrands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-4 rounded-xl bg-surface-card/60 border border-white/5 hover:border-gold-500/30 transition-all duration-300 text-center group cursor-default"
            >
              <div className="text-xs font-serif font-bold tracking-wider text-muted group-hover:text-gold-300 transition-colors">
                {brand.name}
              </div>
              <div className="text-[9px] text-muted/60 mt-1 uppercase tracking-tight">
                {brand.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
