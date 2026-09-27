"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Layers, Palette, Newspaper, Printer, ArrowUpRight, Sparkles } from "lucide-react"
import { portfolio } from "@/src/data/portfolio"

const iconMap: Record<string, React.ElementType> = {
  Layers: Layers,
  Palette: Palette,
  Newspaper: Newspaper,
  Printer: Printer,
}

export function Capabilities() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0c0c0c] border-t border-white/5 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FD6F00]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#161616] text-[#FD6F00] text-xs font-mono font-medium mb-4">
            <Sparkles size={13} />
            <span>Core Creative Specializations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services &amp; Capabilities
          </h2>
          <div className="h-1 w-16 bg-[#FD6F00] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Delivering strategic brand communication across physical print prepress, digital media, and fine art commissions.
          </p>
        </div>

        {/* Refined 4 Core Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {portfolio.services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Layers

            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.25, ease: "easeOut" },
                      }
                }
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141416] p-7 transition-all duration-300 hover:border-[#FD6F00] hover:bg-[#18181A] hover:shadow-[0_15px_35px_rgba(253,111,0,0.15)] will-change-transform"
              >
                {/* Number Watermark in Background */}
                <div className="absolute top-4 right-5 text-4xl font-mono font-black text-white/5 group-hover:text-[#FD6F00]/15 transition-colors select-none">
                  {service.number}
                </div>

                <div>
                  {/* Card Icon Header */}
                  <div className="flex size-13 items-center justify-center rounded-xl bg-[#1E1E22] border border-white/10 text-[#FD6F00] mb-6 transition-all duration-300 group-hover:bg-[#FD6F00] group-hover:text-white group-hover:scale-105 shadow-md">
                    <Icon size={24} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#FD6F00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Pills */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block mb-2.5 font-semibold">
                    Core Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/5 bg-[#1C1C20] px-2 py-1 text-[11px] text-[#D4D4D8] font-medium group-hover:border-white/15 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

        {/* Section Bottom Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#71717A] font-mono">
            Have a specialized requirement? Custom dielines, newspaper prepress, and bespoke fine art commissions available.
          </p>
        </div>

      </div>
    </section>
  )
}
