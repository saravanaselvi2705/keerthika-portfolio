"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { GraduationCap, MapPin, Calendar, ChevronDown, Sparkles, Building2, BookOpen } from "lucide-react"
import { portfolio } from "@/src/data/portfolio"

export function Experience() {
  const shouldReduceMotion = useReducedMotion()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#FD6F00]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#141416] text-[#FD6F00] text-xs font-mono font-medium mb-4">
            <Sparkles size={13} />
            <span>Career Trajectory &amp; Academic Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience &amp; Education
          </h2>
          <div className="h-1 w-16 bg-[#FD6F00] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Directing brand ecosystems, national newspaper publications, and commissioned fine arts across Kerala.
          </p>
        </div>

        {/* Professional Experience Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Vertical Glowing Line */}
          <div className="absolute left-2.5 sm:left-3.5 top-6 bottom-8 w-0.5 bg-gradient-to-b from-[#FD6F00] via-[#FD6F00]/40 to-transparent pointer-events-none -translate-x-1/2" />

          <div className="space-y-8">
            {portfolio.experience.map((item, idx) => {
              const isExpanded = expandedIndex === idx

              return (
                <motion.div
                  key={`${item.company}-${item.role}-${idx}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-6 sm:-left-10 top-6 -translate-x-1/2 flex items-center justify-center">
                    <div className="size-5 rounded-full border-2 border-[#FD6F00] bg-[#0c0c0c] flex items-center justify-center shadow-[0_0_15px_rgba(253,111,0,0.6)]">
                      <div className="size-2 rounded-full bg-[#FD6F00]" />
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="rounded-2xl border border-white/10 bg-[#141416]/90 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:border-[#FD6F00]/60 hover:shadow-[0_12px_35px_rgba(253,111,0,0.12)]">

                    {/* Header */}
                    <div
                      onClick={() => toggleExpand(idx)}
                      className="cursor-pointer flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-white/10 select-none group/title"
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
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="flex size-7 items-center justify-center rounded-lg bg-[#FD6F00]/15 border border-[#FD6F00]/30 text-[#FD6F00] font-bold text-xs font-mono">
                            0{idx + 1}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover/title:text-[#FD6F00] transition-colors">
                            {item.role}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#FD6F00] font-semibold">
                          <Building2 size={15} />
                          <span>{item.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A1A1AA]">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                          <Calendar size={13} className="text-[#FD6F00]" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4D4D8]">
                          <MapPin size={13} className="text-[#FD6F00]" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Highlight Lead */}
                    <p className="mt-4 text-sm text-[#D4D4D8] leading-relaxed">
                      {item.highlight}
                    </p>

                    {/* Expand/Collapse Trigger */}
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FD6F00] hover:text-[#FFA048] transition-colors focus-visible:outline-none"
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} responsibilities for ${item.role}`}
                    >
                      <span>{isExpanded ? "Hide Responsibilities" : "View Key Responsibilities"}</span>
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
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 pt-4 border-t border-white/10 space-y-2.5">
                            {item.responsibilities.map((resp) => (
                              <li
                                key={resp}
                                className="flex items-start gap-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed"
                              >
                                <span className="text-[#FD6F00] mt-1 shrink-0 font-bold">&bull;</span>
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

        {/* Academic Foundations & Fine Art Training */}
        <div className="mt-20 pt-16 border-t border-white/10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#141416] text-[#FD6F00] text-xs font-mono font-medium mb-3">
              <BookOpen size={13} />
              <span>Academic Credentials</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Academic Background &amp; Studio Foundations
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-2 max-w-xl mx-auto">
              Formal fine arts education from JJ College of Fine Arts paired with mathematical analytical rigor from St. Xavier&apos;s College.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {portfolio.education.map((edu, idx) => (
              <motion.div
                key={`${edu.degree}-${idx}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-white/10 bg-[#141416] p-6 hover:border-[#FD6F00]/60 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#FD6F00]/10 border border-[#FD6F00]/25 text-[#FD6F00] group-hover:bg-[#FD6F00] group-hover:text-white transition-colors">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-[11px] font-mono text-[#FD6F00] font-bold px-2 py-0.5 rounded-full bg-[#FD6F00]/10 border border-[#FD6F00]/20">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white leading-snug group-hover:text-[#FD6F00] transition-colors">
                  {edu.degree}
                </h4>

                <p className="text-xs text-[#FD6F00]/90 font-medium mt-1">
                  {edu.institution}
                </p>

                <p className="text-xs text-[#A1A1AA] mt-3 leading-relaxed">
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