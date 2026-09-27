"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Calendar, User, Tag, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { portfolio, Project } from "@/src/data/portfolio"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    setActiveImageIndex(0)
  }, [project])

  const allImages = project ? [project.image, ...(project.additionalImages || [])] : []
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (project) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-white/10 bg-[#141414] shadow-2xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#181818]/60 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#FD6F00]/15 border border-[#FD6F00]/30 px-3 py-1 text-xs font-semibold text-[#FD6F00]">
                  {project.category}
                </span>
                <span className="text-xs text-[#71717A] font-mono">
                  {project.year}
                </span>
              </div>

              <button
                onClick={onClose}
                className="flex size-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close project view"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">

              {/* Real Project Image Stage with Carousel Navigation */}
              <div className="space-y-4">
                <div className="relative w-full h-72 sm:h-96 md:h-[430px] rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center p-4 overflow-hidden shadow-inner group">
                  <div className="relative w-full h-full">
                    <Image
                      src={allImages[activeImageIndex] || project.image}
                      alt={`${project.title} - view ${activeImageIndex + 1}`}
                      fill
                      unoptimized
                      priority
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 850px"
                    />
                  </div>

                  {/* Previous / Next Arrow Controls */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1))
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/75 hover:bg-[#FD6F00] text-white flex items-center justify-center border border-white/20 transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={22} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0))
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/75 hover:bg-[#FD6F00] text-white flex items-center justify-center border border-white/20 transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight size={22} />
                      </button>

                      {/* Image Counter Badge */}
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-white/90 border border-white/10 z-10">
                        {activeImageIndex + 1} / {allImages.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Horizontal Scrolling Gallery Carousel */}
                {allImages.length > 1 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider block">
                        Campaign Asset Gallery ({allImages.length} items)
                      </span>
                      <span className="text-xs text-[#71717A] font-mono hidden sm:inline">
                        Click asset or use arrows to view
                      </span>
                    </div>

                    <div className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 px-1 custom-scrollbar scroll-smooth">
                      {allImages.map((imgSrc, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-28 sm:w-36 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border transition-all duration-300 bg-[#0d0d0d] group text-left ${activeImageIndex === idx
                            ? "border-[#FD6F00] shadow-[0_0_15px_rgba(253,111,0,0.45)] scale-102 ring-1 ring-[#FD6F00]"
                            : "border-white/10 opacity-70 hover:opacity-100 hover:border-white/30"
                            }`}
                        >
                          <Image
                            src={imgSrc}
                            alt={`Asset ${idx + 1}`}
                            fill
                            unoptimized
                            className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute bottom-1 right-1 bg-black/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-mono text-white/90">
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Metadata */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A1A1AA] font-mono">
                  <span className="inline-flex items-center gap-1.5">
                    <User size={14} className="text-[#FD6F00]" />
                    <span>Client: <strong className="text-white font-sans">{project.client}</strong></span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#FD6F00]" />
                    <span>Year: <strong className="text-white font-sans">{project.year}</strong></span>
                  </span>
                  {project.metrics && (
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles size={14} className="text-[#FD6F00]" />
                      <span className="text-[#FD6F00]">{project.metrics}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base text-[#D4D4D8] leading-relaxed">
                  {project.abstract || project.tagline}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-[#FD6F00] mb-2 font-bold">
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-[#FD6F00] mb-2 font-bold">
                    The Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables & Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-[#71717A] font-mono mr-1">Deliverables:</span>
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#E4E4E7]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.behanceUrl || portfolio.links.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FD6F00] hover:bg-[#E05E00] px-5 py-2.5 text-xs font-bold text-white transition-all hover:scale-105"
                >
                  <span>View on Behance</span>
                  <ExternalLink size={13} />
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}