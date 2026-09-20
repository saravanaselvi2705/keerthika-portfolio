"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { portfolio, Project } from "@/src/data/portfolio"

interface PortfolioShowcaseProps {
  onSelectProject?: (project: Project) => void
}

export function PortfolioShowcase({ onSelectProject }: PortfolioShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const shouldReduceMotion = useReducedMotion()

  const filteredProjects =
    activeFilter === "All"
      ? portfolio.projects
      : portfolio.projects.filter((p: Project) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-[#0e0e0e] border-t border-white/5 relative overflow-hidden">

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10 px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight inline-block relative">
          Featured Works
          <span className="block h-1 w-10 bg-[#FD6F00] mx-auto mt-2.5 rounded-full" />
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA]">
          High-impact brand systems, structural packaging dielines &amp; media key art.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {portfolio.categories.map((category: string) => {
            const isActive = activeFilter === category

            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] ${isActive
                  ? "bg-[#FD6F00] text-white shadow-[0_0_15px_rgba(253,111,0,0.35)] scale-105"
                  : "bg-[#161616] border border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/30"
                  }`}
              >
                <span>{category}</span>
              </button>
            )
          })}
        </div>

        {/* 3-Column Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                key={project.id}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject?.(project)}
                className="group cursor-pointer flex flex-col rounded-xl border border-white/10 bg-[#141414] overflow-hidden transition-all duration-300 hover:border-[#FD6F00]/70 hover:shadow-[0_0_24px_rgba(253,111,0,0.15)]"
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title}`}
              >
                {/* Image Stage */}
                <div className="relative w-full h-44 sm:h-52 bg-[#101010] border-b border-white/5 overflow-hidden flex items-center justify-center p-3">
                  <div className="relative w-full h-full transform-gpu transition-transform duration-300 ease-out group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="rounded-full bg-[#FD6F00]/15 border border-[#FD6F00]/30 px-2.5 py-0.5 text-[11px] font-semibold text-[#FD6F00]">
                        {project.category}
                      </span>
                      <span className="text-[11px] text-[#71717A] font-mono truncate max-w-[130px]">
                        {project.client || project.year}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#FD6F00] transition-colors mb-1 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.pillTags.slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded border border-white/5 bg-[#181818] px-1.5 py-0.5 text-[10px] text-[#A1A1AA]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#FD6F00] group-hover:translate-x-1 transition-transform">
                      <span>View</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}