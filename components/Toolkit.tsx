"use client"

import { portfolio } from "@/src/data/portfolio"
import { Sparkles, Layers, Box, Feather, Grid } from "lucide-react"

export function Toolkit() {
  const sections = [
    {
      title: "Design & Production Suite",
      icon: Box,
      items: portfolio.toolkit.designAndProduction,
    },
    {
      title: "Specialized Print & Pre-Press",
      icon: Layers,
      items: portfolio.toolkit.specializedPrint,
    },
    {
      title: "Fine Art & Tactile Media",
      icon: Feather,
      items: portfolio.toolkit.fineArtPhysical,
    },
    {
      title: "Systems & Visual Strategy",
      icon: Grid,
      items: portfolio.toolkit.systemsStrategy,
    },
  ]

  return (
    <section id="toolkit" className="py-24 lg:py-32 border-t border-border/80 bg-card/20 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border/80">
          <div>
            <span className="eyebrow block mb-3">05 / SPECIALIZED TOOLKIT</span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-medium tracking-tight text-foreground max-w-2xl leading-[1.02]">
              Calibrated instruments across digital vectors &amp; studio chemistry.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            Proficiency honed through rigorous commercial packaging production, large-format museum canvases, and modular vector identity architectures.
          </p>
        </div>

        {/* 4 Categorized Sections Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <div
                key={section.title}
                className="flex flex-col rounded-2xl border border-border/70 bg-background/90 p-6 backdrop-blur-xs transition-all duration-300 hover:border-foreground/30 hover:shadow-md"
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-border/60">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-card text-accent">
                    <Icon size={14} />
                  </div>
                  <h3 className="font-editorial text-lg font-medium text-foreground tracking-tight">
                    {section.title}
                  </h3>
                </div>

                {/* Items List */}
                <div className="mt-5 divide-y divide-border/40">
                  {section.items.map((tool) => (
                    <div key={tool.name} className="py-3.5 first:pt-0 last:pb-0 group">
                      <div className="flex items-center justify-between">
                        <span className="font-editorial text-base font-normal text-foreground group-hover:text-accent transition-colors">
                          {tool.name}
                        </span>
                        <span className="rounded-full border border-border/60 bg-card px-2 py-0.5 text-[9px] font-mono text-muted-foreground uppercase tracking-wider">
                          {tool.level}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-snug">
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
