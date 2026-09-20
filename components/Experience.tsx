"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { GraduationCap, MapPin, Calendar, ChevronDown, Award } from "lucide-react"
import { portfolio } from "@/src/data/portfolio"

export function Experience() {
  const shouldReduceMotion = useReducedMotion()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight inline-block relative">
            Experience &amp; Background
            <span className="block h-1 w-12 bg-[#FD6F00] mx-auto mt-3 rounded-full" />
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
            Directing brand ecosystems, creative campaigns, and precision visual art.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto pl-8 sm:pl-12">
          {/* Vertical SVG Tracing Spine Line */}
          <div className="absolute left-2.5 sm:left-3.5 top-6 bottom-10 w-1 pointer-events-none -translate-x-1/2">
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 4 100"
            >
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="100"
                stroke="#FD6F00"
                strokeWidth="3"
                strokeLinecap="round"
                initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
                whileInView={shouldReduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </div>

          <div className="space-y-6">
            {portfolio.experience.map((item, idx) => {
              const isExpanded = expandedIndex === idx

              return (
                <motion.div
                  key={`${item.company}-${item.role}-${idx}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -28 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.15,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="relative"
                >
                  {/* Timeline Glowing Node Dot */}
                  <div className="absolute -left-8 sm:-left-12 top-6 -translate-x-1/2 flex items-center justify-center">
                    <div className="size-5 rounded-full border-2 border-[#FD6F00] bg-[#0e0e0e] flex items-center justify-center shadow-[0_0_12px_rgba(253,111,0,0.6)]">
                      <div className="size-2 rounded-full bg-[#FD6F00]" />
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="rounded-xl border border-white/10 bg-[#161616] p-5 sm:p-7 transition-all duration-300 hover:border-[#FD6F00]/50 hover:shadow-[0_8px_30px_rgba(253,111,0,0.1)]">

                    {/* Header */}
                    <div
                      onClick={() => toggleExpand(idx)}
                      className="cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3.5 border-b border-white/5 select-none group/title"
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          toggleExpand(idx)
                        }
                      }}
                    >
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="flex size-7 items-center justify-center rounded-lg bg-[#FD6F00]/15 text-[#FD6F00] font-bold text-xs font-mono">
                            0{idx + 1}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover/title:text-[#FD6F00] transition-colors">
                            {item.role}
                          </h3>
                        </div>
                        <span className="text-[#FD6F00] font-medium text-xs sm:text-sm mt-1 inline-block">
                          {item.company}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-[#71717A]">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-[#FD6F00]" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} className="text-[#FD6F00]" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Highlight */}
                    <p className="mt-3.5 text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                      {item.highlight}
                    </p>

                    {/* Expand Button */}
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#FD6F00] hover:text-[#FFA048] transition-colors focus-visible:outline-none"
                      aria-label={`${isExpanded ? "Hide" : "View"} responsibilities for ${item.role}`}
                    >
                      <span>{isExpanded ? "Hide Details" : "View Responsibilities"}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-3 pt-3 border-t border-white/5 space-y-2">
                            {item.responsibilities.map((resp) => (
                              <li
                                key={resp}
                                className="flex items-start gap-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed"
                              >
                                <span className="text-[#FD6F00] mt-0.5">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Education & Foundations */}
        <div id="about" className="mt-16 pt-12 border-t border-white/5 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Education &amp; Foundations
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
              Mathematics &amp; analytical logic paired with formal fine arts foundations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {portfolio.education.map((edu, idx) => (
              <motion.div
                key={`${edu.degree}-${idx}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="rounded-xl border border-white/10 bg-[#161616] p-5 hover:border-[#FD6F00]/50 transition-colors"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-[#FD6F00] mb-3">
                  <GraduationCap size={18} />
                </div>
                <span className="text-[11px] font-mono text-[#FD6F00] font-bold block mb-1">
                  {edu.period}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {edu.degree}
                </h4>
                <p className="text-xs text-[#71717A] mt-1 font-medium">
                  {edu.institution}
                </p>
                <p className="text-xs text-[#A1A1AA] mt-2.5 leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}