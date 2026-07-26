"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Share2, 
  Printer, 
  PenTool, 
  Briefcase, 
  UserCheck, 
  Building2, 
  Sparkles,
  Layers
} from "lucide-react";

const highlightCards = [
  {
    title: "Brand Identity",
    desc: "Complete visual identity systems, logo design, typography guides & brand equity strategy.",
    icon: Palette,
    accent: "from-amber-500/20 to-gold-500/5",
  },
  {
    title: "Social Media Design",
    desc: "High-converting social templates, Instagram grids, LinkedIn assets & digital campaign graphics.",
    icon: Share2,
    accent: "from-blue-500/20 to-purple-500/5",
  },
  {
    title: "Print & Packaging Design",
    desc: "Luxurious product packaging, brochure layouts, editorial print design & premium business cards.",
    icon: Printer,
    accent: "from-emerald-500/20 to-teal-500/5",
  },
  {
    title: "Illustration & Artwork",
    desc: "Custom vector illustrations, brand iconography, digital art & bespoke graphics.",
    icon: PenTool,
    accent: "from-rose-500/20 to-gold-500/5",
  },
];

const industries = [
  "E-Commerce & Retail",
  "Luxury & Fashion",
  "Technology & SaaS",
  "Real Estate & Property",
  "Hospitality & Dining",
  "Corporate & Finance",
];

const softwareProficiency = [
  { name: "Adobe Photoshop", level: "98%", category: "Photo Editing & Manipulation", color: "text-blue-400" },
  { name: "Adobe Illustrator", level: "96%", category: "Vector & Logo Design", color: "text-amber-500" },
  { name: "Adobe InDesign", level: "92%", category: "Editorial & Print Layout", color: "text-pink-500" },
  { name: "Figma", level: "94%", category: "UI/UX & Visual Prototypes", color: "text-purple-400" },
  { name: "Canva Pro", level: "90%", category: "Fast Social Media Delivery", color: "text-cyan-400" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Craft & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            About <span className="text-gold-gradient">Keerthika</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-transparent mt-4 rounded-full" />
        </div>

        {/* 3 Core Content Columns: Who I Am, What I Do, Industries I Work With */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Who I Am Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-surface-card border border-white/10 hover:border-gold-500/30 transition-all flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
              <UserCheck size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">Who I Am</h3>
            <p className="text-muted leading-relaxed text-sm flex-grow">
              I am a Senior Brand & Graphic Designer with over 5 years of professional experience crafting iconic visual experiences. Passionate about minimalism, elegant typography, and luxury aesthetic, I transform abstract business goals into compelling design solutions.
            </p>
          </motion.div>

          {/* What I Do Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-surface-card border border-white/10 hover:border-gold-500/30 transition-all flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">What I Do</h3>
            <p className="text-muted leading-relaxed text-sm flex-grow">
              I bridge strategic brand thinking with bespoke artistic execution. From complete corporate brand identities and packaging to high-engagement social media campaigns and editorial print design, every project is meticulously built to convert audience interest into brand loyalty.
            </p>
          </motion.div>

          {/* Industries I Work With Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-surface-card border border-white/10 hover:border-gold-500/30 transition-all flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">Industries I Work With</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-3 py-1.5 rounded-lg bg-surface/80 border border-white/10 text-xs font-medium text-gold-300"
                >
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Small Highlight Cards: Brand Identity, Social Media Design, Print Design, Illustration */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
            Core Design Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-glass-card border border-white/10 hover:border-gold-500/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-gold-300 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Software Proficiency Section */}
        <div className="p-8 rounded-2xl bg-surface-card/80 border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground">Software Proficiency & Toolkit</h3>
              <p className="text-xs text-muted mt-1">Mastery across industry-standard graphic design platforms.</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold">
              <Layers size={14} /> Expert Level Execution
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {softwareProficiency.map((tool) => (
              <div key={tool.name} className="p-4 rounded-xl bg-surface border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-bold ${tool.color}`}>{tool.name}</span>
                    <span className="text-xs font-serif font-bold text-gold-400">{tool.level}</span>
                  </div>
                  <div className="text-[11px] text-muted mb-3">{tool.category}</div>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-gold-500 to-gold-300 h-full rounded-full"
                    style={{ width: tool.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
