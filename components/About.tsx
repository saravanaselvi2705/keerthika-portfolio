"use client"

import { motion, useReducedMotion } from "framer-motion"
import { GraduationCap, Briefcase, Sparkles, Compass, CheckCircle2, Layers, Award } from "lucide-react"
import { portfolio } from "@/src/data/portfolio"

export function About() {
  const shouldReduceMotion = useReducedMotion()

  const competencies = [
    {
      title: "Dual Creative Foundation",
      subtitle: "KGCE in fine arts + B.Sc. Mathematics",
      desc: "Trained at JJ College of Fine Arts in classical perspective and anatomy, combined with mathematical geometry and optical proportion formulas.",
      icon: GraduationCap,
    },
    {
      title: "Enterprise Creative Leadership",
      subtitle: "Talrop / Makt Media (Calicut & Kochi)",
      desc: "4.5+ years spearheading visual identity systems, multi-format media campaigns, celebrity tour posters, and state conclave collateral.",
      icon: Briefcase,
    },
    {
      title: "Prepress & Publication Precision",
      subtitle: "Newspaper & Packaging Dielines",
      desc: "Extensive background in high-density newspaper layout creation, strict spot-color CMYK color management, and packaging dieline production.",
      icon: Layers,
    },
    {
      title: "Commissioned Fine Art Realism",
      subtitle: "Charcoal, Graphite & Mixed Media",
      desc: "Creating bespoke collector-grade portraiture and classical figurative studies with disciplined mastery of light, shadow, and likeness.",
      icon: Award,
    },
  ]

  const toolStack = [
    { name: "Adobe Photoshop", role: "Key Art & Retouching", level: "98%" },
    { name: "Adobe Illustrator", role: "Vector & Logo Systems", level: "96%" },
    { name: "Adobe InDesign", role: "Newspaper & Editorial", level: "94%" },
    { name: "Packaging Dielines", role: "Structural Production", level: "92%" },
    { name: "Traditional Charcoal", role: "Fine Art Realism", level: "95%" },
    { name: "Brand Guidelines", role: "Design Systems", level: "96%" },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0e0e0e] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FD6F00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#161616] text-[#FD6F00] text-xs font-mono font-medium mb-4">
            <Sparkles size={13} />
            <span>Behind The Craft</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Keerthika S
          </h2>
          <div className="h-1 w-16 bg-[#FD6F00] mt-4 rounded-full" />
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            A rare intersection of mathematical rigor, high-speed agency creative direction, and classical fine art intuition.
          </p>
        </div>

        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

          {/* LEFT: Deep Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base leading-relaxed">
            <div className="p-8 rounded-2xl border border-white/10 bg-[#141414]/90 backdrop-blur-xl shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                Mathematical Structure Meets Classical Fine Art
              </h3>
              <p className="mb-4">
                With over <strong className="text-white">4.5 years of industry experience</strong>, I lead graphic design operations, brand identity development, and high-impact visual campaigns for enterprises, tech ecosystems, and fine art collectors.
              </p>
              <p className="mb-4">
                My approach is shaped by two complementary disciplines: a <strong className="text-white">KGCE in fine arts</strong> from the prestigious <span className="text-[#FD6F00] font-semibold">JJ College of Fine Arts</span> in Thrissur, paired with an analytical foundation in <strong className="text-white">B.Sc. Mathematics</strong> from St. Xavier&apos;s College for Women, Aluva.
              </p>
              <p>
                This synthesis allows me to build design systems that aren&apos;t just aesthetically captivating, but structurally flawless—whether engineering a 40-foot outdoor highway billboard, typesetting a national newspaper spread, or rendering hyper-realistic charcoal portraits on canvas.
              </p>
            </div>

            {/* Experience Focus Box */}
            <div className="p-7 rounded-2xl border border-white/10 bg-[#141414]/90 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="size-2 rounded-full bg-[#FD6F00]" />
                <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs font-mono">
                  Agency Leadership &bull; Talrop / Makt Media
                </h4>
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Operating across <strong className="text-white">Calicut and Kochi</strong>, I have directed creative strategy for major brand ecosystems including Wise Talkies, AidMak, HOSFACE, Spinvic, and Talrop Techies Park conclaves attended by over 1,000+ international delegates.
              </p>
            </div>

            {/* Software & Craft Progress Cards */}
            <div className="p-7 rounded-2xl border border-white/10 bg-[#141414]/90 backdrop-blur-xl">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A1A1AA] mb-4">
                Core Production Arsenal
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {toolStack.map((tool) => (
                  <div key={tool.name} className="p-3 rounded-xl border border-white/5 bg-[#181818]">
                    <div className="text-xs font-bold text-white truncate">{tool.name}</div>
                    <div className="text-[10px] text-[#A1A1AA] truncate mt-0.5">{tool.role}</div>
                    <div className="text-[11px] font-mono font-bold text-[#FD6F00] mt-1.5">{tool.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: 4 Distinct Competency Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {competencies.map((comp, idx) => {
              const Icon = comp.icon

              return (
                <motion.div
                  key={comp.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl border border-white/10 bg-[#141414]/80 backdrop-blur-md hover:border-[#FD6F00]/60 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(253,111,0,0.12)] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="size-11 shrink-0 rounded-xl bg-[#FD6F00]/10 border border-[#FD6F00]/25 text-[#FD6F00] flex items-center justify-center group-hover:bg-[#FD6F00] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-[#FD6F00] transition-colors">
                        {comp.title}
                      </h4>
                      <div className="text-xs font-mono font-medium text-[#FD6F00] mb-2">
                        {comp.subtitle}
                      </div>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
