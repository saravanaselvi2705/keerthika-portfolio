"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Layers, Box, FileText, Palette } from "lucide-react"
import { portfolio } from "@/src/data/portfolio"

const iconMap = {
  Layers: Layers,
  Box: Box,
  FileText: FileText,
  Palette: Palette,
}

export function Capabilities() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#121212] border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight inline-block relative">
            Services
            <span className="block h-1 w-12 bg-[#FD6F00] mx-auto mt-3 rounded-full" />
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA]">
            What I bring to the table — from concept to final production proof.
          </p>
        </div>

        {/* 4 Grid Cards: Staggered Cascade Entrance (0.2s Delay) + Top Shimmer & Lift */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Layers

            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.2, // 0.2s sequential cascade delay per card
                  ease: [0.34, 1.56, 0.64, 1], // Elastic responsive feel
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5, // Subtle vertical lift (-5px)
                        transition: { duration: 0.28, ease: [0.34, 1.56, 0.64, 1] },
                      }
                }
                className="card-shimmer-top group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1E1E1E] p-7 transition-colors duration-300 hover:border-[#FD6F00] hover:shadow-[0_15px_35px_rgba(253,111,0,0.18)] cursor-default will-change-transform"
              >
                <div>
                  {/* Card Icon Header */}
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#27272A] text-[#FD6F00] mb-6 transition-all duration-300 group-hover:bg-[#FD6F00] group-hover:text-white group-hover:scale-110 shadow-md">
                    <Icon size={24} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#FD6F00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Pills */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#A1A1AA] block mb-2 font-medium">
                    Core Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-[#161616] px-2.5 py-1 text-xs text-neutral-300 font-medium"
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
      </div>
    </section>
  )
}
