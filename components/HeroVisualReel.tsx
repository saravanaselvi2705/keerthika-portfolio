"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react"
import { portfolio, Project } from "@/src/data/portfolio"
import { ProjectVisual } from "./ProjectVisual"

interface HeroVisualReelProps {
  onSelectProject?: (project: Project) => void
}

export function HeroVisualReel({ onSelectProject }: HeroVisualReelProps) {
  const reelProjects = portfolio.projects.filter((p) => p.featuredInReel).slice(0, 3)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Autoplay rotation every 5.5s
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reelProjects.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [isPaused, reelProjects.length])

  const currentProject = reelProjects[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reelProjects.length) % reelProjects.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reelProjects.length)
  }

  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Studio Lighting Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Reel Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-border/80">
        <div className="flex items-center gap-2">
          <span className="flex size-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Flagship Reel 0{activeIndex + 1}
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span className="font-mono text-xs text-muted-foreground uppercase">
            {currentProject.category}
          </span>
        </div>

        {/* Prev / Next Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            aria-label="Previous project in showcase reel"
            className="flex size-8 items-center justify-center rounded-full border border-border bg-background/80 text-foreground hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next project in showcase reel"
            className="flex size-8 items-center justify-center rounded-full border border-border bg-background/80 text-foreground hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Interactive Visual Canvas with Click-To-Open Case Study */}
      <div
        onClick={() => onSelectProject?.(currentProject)}
        className="relative z-10 my-4 cursor-pointer group/canvas rounded-2xl overflow-hidden border border-border/70 shadow-lg transition-transform duration-300 hover:scale-[1.01]"
        role="button"
        tabIndex={0}
        aria-label={`Inspect case study for ${currentProject.title}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onSelectProject?.(currentProject)
          }
        }}
      >
        <ProjectVisual project={currentProject} />

        {/* Hover Inspect Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-xs font-mono uppercase tracking-widest font-bold shadow-2xl">
            <Maximize2 size={13} />
            <span>View Case Study</span>
          </span>
        </div>
      </div>

      {/* Project Meta Footer */}
      <div className="relative z-10 pt-4 border-t border-border/80 flex items-center justify-between">
        <div>
          <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
            {currentProject.title}
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5 font-sans line-clamp-1">
            {currentProject.tagline}
          </p>
        </div>

        {/* Indicators */}
        <div className="flex items-center gap-1.5 ml-4">
          {reelProjects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-7 bg-accent"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
