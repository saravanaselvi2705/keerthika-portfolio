"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Image as ImageIcon, Layout, Palette } from "lucide-react";

export const skillCards = [
  {
    name: "Adobe Photoshop",
    category: "Photo Manipulation & Retouching",
    proficiency: "98%",
    level: "Master",
    description: "High-end skin retouching, photo compositing, color grading, mockups, and raster design.",
    icon: ImageIcon,
    color: "from-blue-600/20 to-blue-900/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
  },
  {
    name: "Adobe Illustrator",
    category: "Vector & Brand Identity",
    proficiency: "96%",
    level: "Expert",
    description: "Vector logo creation, custom icon sets, brand style guides, gold foil art, and packaging dielines.",
    icon: Sparkles,
    color: "from-amber-600/20 to-amber-900/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
  },
  {
    name: "Adobe InDesign",
    category: "Editorial & Print Publication",
    proficiency: "92%",
    level: "Expert",
    description: "Multi-page corporate brochures, magazines, catalogs, PDF interactive reports, and print grid systems.",
    icon: Layout,
    color: "from-pink-600/20 to-pink-900/10",
    borderColor: "border-pink-500/30",
    textColor: "text-pink-400",
  },
  {
    name: "Figma",
    category: "UI/UX & Design Systems",
    proficiency: "94%",
    level: "Expert",
    description: "Interactive UI prototypes, component libraries, social media design decks, and design handoff.",
    icon: Layers,
    color: "from-purple-600/20 to-purple-900/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
  },
  {
    name: "Canva Pro",
    category: "Rapid Social Media Asset Delivery",
    proficiency: "90%",
    level: "Advanced",
    description: "Client-editable social templates, marketing story decks, fast turnarounds, and brand kits.",
    icon: Palette,
    color: "from-cyan-600/20 to-cyan-900/10",
    borderColor: "border-cyan-500/30",
    textColor: "text-cyan-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            Design Tools & <span className="text-gold-gradient">Software Mastery</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl text-sm sm:text-base">
            Professional proficiency across industry-standard graphic design, vector, and editorial software applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-transparent mt-4 rounded-full" />
        </div>

        {/* 5 Modern Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCards.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-2xl bg-surface-card border ${skill.borderColor} hover:border-gold-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} border ${skill.borderColor} flex items-center justify-center ${skill.textColor} group-hover:scale-110 transition-transform`}>
                      <Icon size={28} />
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-serif font-bold text-gold-400">{skill.proficiency}</span>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">{skill.level}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-foreground mb-1 group-hover:text-gold-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className={`text-xs font-semibold ${skill.textColor} mb-3`}>
                    {skill.category}
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="flex justify-between text-[11px] font-medium text-muted">
                    <span>Proficiency Index</span>
                    <span className="text-foreground">{skill.proficiency}</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.proficiency }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 h-full rounded-full"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
