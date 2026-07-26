"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles, CheckCircle2, Building2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Graphic Designer",
    company: "Creovix Media Group",
    location: "Tegain",
    duration: "2022 - Present",
    badge: "Current Role",
    description: "Head of visual design directing multi-channel brand campaigns, luxury packaging systems, and digital marketing graphics for enterprise clients.",
    achievements: [
      "Directed rebrand initiatives for 40+ client accounts, resulting in an average 35% growth in client social media conversions.",
      "Spearheaded luxury packaging production for cosmetic and retail clients, cutting print die-line errors to 0%.",
      "Mentored a team of 4 junior designers and established standard operating procedures for brand identity delivery.",
    ],
    technologies: ["Brand System Design", "Adobe Creative Suite", "Figma", "Packaging Dielines", "Art Direction"],
  },
  {
    id: 2,
    role: "Graphic Designer",
    company: "Talrop",
    location: "Kozhikode",
    duration: "2020 - 2022",
    badge: "Luxury Retail",
    description: "Lead graphic artist specializing in high-end print design, gold foil embossing specs, editorial magazine layouts, and corporate identity decks.",
    achievements: [
      "Designed Talrop's flagship brand identity and luxury stationery suite that secured international design accolades.",
      "Produced over 150+ social media carousel decks generating 2M+ organic impressions across Instagram and LinkedIn.",
      "Collaborated directly with luxury brand founders to translate business vision into high-converting visual assets.",
    ],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Print Foil Specs", "Social Media Creatives"],
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Career History
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            Work & <span className="text-gold-gradient">Leadership Experience</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl text-sm sm:text-base">
            Track record of driving client success, leading creative teams, and delivering luxury design work.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-transparent mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-8 w-6 h-6 rounded-full bg-[#090A0F] border-2 border-gold-400 text-gold-400 shadow-lg shadow-gold-500/30 flex items-center justify-center -translate-x-1/2 z-10 hidden sm:flex">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? "sm:mr-auto" : "sm:ml-auto"}`}>
                    <div className="p-8 rounded-2xl bg-surface-card border border-white/10 hover:border-gold-500/40 transition-all duration-300 shadow-xl group">

                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-[11px] font-semibold uppercase tracking-wider">
                          {exp.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-muted">
                          <Calendar size={13} className="text-gold-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-serif font-bold text-foreground mb-1 group-hover:text-gold-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-semibold text-gold-400 mb-4">
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                        <span className="text-muted font-normal">• {exp.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-muted leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Key Achievements Bullet Points */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                          Key Achievements & Impact:
                        </div>
                        {exp.achievements.map((ach) => (
                          <div key={ach} className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed">
                            <CheckCircle2 size={14} className="text-gold-400 flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology / Skill Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-medium text-foreground/70 bg-surface border border-white/10 px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
