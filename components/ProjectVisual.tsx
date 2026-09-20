"use client"

import { Project } from "@/src/data/portfolio"

interface ProjectVisualProps {
  project: Project
  className?: string
}

export function ProjectVisual({ project, className = "" }: ProjectVisualProps) {
  switch (project.id) {
    case "talrop-ventures":
      return (
        <div
          className={`relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#18181B] via-[#1F1F23] to-[#121214] text-white flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none group ${className}`}
        >
          {/* Subtle Radiant Orange Studio Glow */}
          <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#FD6F00]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          {/* Top Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FD6F00]/15 border border-[#FD6F00]/30 px-3 py-1 text-[11px] font-mono font-bold text-[#FD6F00] uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-[#FD6F00] animate-pulse" />
              Brand System
            </span>
            <span className="font-mono text-xs text-[#A1A1AA]">2024</span>
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center text-center">
            <div className="size-20 sm:size-24 rounded-2xl bg-gradient-to-tr from-[#FD6F00] to-[#FF8C33] p-[2px] shadow-xl mb-4 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-2xl bg-[#121212] flex items-center justify-center">
                <span className="font-extrabold text-3xl sm:text-4xl text-white">
                  T
                </span>
              </div>
            </div>
            <h4 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              TALROP ECOSYSTEM
            </h4>
            <span className="text-xs text-[#A1A1AA] mt-1 font-medium">
              15+ Sub-Brands • Dynamic Tokens
            </span>
          </div>

          {/* Bottom */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-[#A1A1AA]">
            <span>Figma • Illustrator</span>
            <span className="text-[#FD6F00]">Identity Architecture</span>
          </div>
        </div>
      )

    case "nectar-and-ore":
      return (
        <div
          className={`relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#15241B] via-[#1A2E23] to-[#0E1A13] text-[#F3EFE6] flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none group ${className}`}
        >
          {/* Gold & Orange Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          {/* Top Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-3 py-1 text-[11px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
              Packaging Dieline
            </span>
            <span className="font-mono text-xs text-[#A1A1AA]">2024</span>
          </div>

          {/* Center 3D Box Mockup Face */}
          <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center">
            <div className="w-36 sm:w-44 py-6 px-4 rounded-xl bg-gradient-to-b from-[#1C3125] to-[#122018] border border-[#D4AF37]/40 shadow-2xl group-hover:scale-105 transition-transform duration-300 flex flex-col items-center">
              <div className="size-12 rounded-full bg-[#122018] border border-[#D4AF37] flex items-center justify-center mb-2 shadow-md">
                <span className="font-bold text-lg text-[#D4AF37]">N</span>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-white tracking-tight">
                NECTAR &amp; ORE
              </h4>
              <span className="font-mono text-[9px] text-[#D4AF37] tracking-wider uppercase mt-0.5">
                Gold Foil Stamped
              </span>
            </div>
          </div>

          {/* Bottom */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-[#A1A1AA]">
            <span className="text-[#D4AF37]">CMYK + 2 Pantones</span>
            <span>Zero Plastics</span>
          </div>
        </div>
      )

    case "epilogue-monograph":
      return (
        <div
          className={`relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#161618] via-[#1B1B1E] to-[#111113] text-white flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none group ${className}`}
        >
          {/* Flame Ribbon Accent */}
          <div className="absolute top-0 right-8 w-3.5 h-16 bg-[#FD6F00] shadow-lg group-hover:h-24 transition-all duration-300 z-20" />

          {/* Top Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FD6F00]/15 border border-[#FD6F00]/30 px-3 py-1 text-[11px] font-mono font-bold text-[#FD6F00] uppercase tracking-wider">
              Editorial Design
            </span>
            <span className="font-mono text-xs text-[#A1A1AA]">2023</span>
          </div>

          {/* Center Book Spread Presentation */}
          <div className="relative z-10 my-auto py-4">
            <span className="font-mono text-[10px] text-[#FD6F00] tracking-widest uppercase block mb-1 font-bold">
              Hardcover Publication
            </span>
            <h4 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              EPILOGUE
            </h4>
            <p className="text-xs text-[#A1A1AA] mt-2 max-w-xs">
              Asymmetrical 8-column baseline layout &amp; Smyth-sewn binding.
            </p>
          </div>

          {/* Bottom */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-[#A1A1AA]">
            <span>260 Pages</span>
            <span className="text-white">Silver Spot Inks</span>
          </div>
        </div>
      )

    case "ethereal-topographies":
      return (
        <div
          className={`relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#1C1713] via-[#241E1A] to-[#14100E] text-white flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none group ${className}`}
        >
          {/* Subtle Orange Strata Glow */}
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#FD6F00]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          {/* Top Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FD6F00]/15 border border-[#FD6F00]/30 px-3 py-1 text-[11px] font-mono font-bold text-[#FD6F00] uppercase tracking-wider">
              Fine Art Canvas
            </span>
            <span className="font-mono text-xs text-[#A1A1AA]">180 × 120 cm</span>
          </div>

          {/* Center Fine Art Presentation */}
          <div className="relative z-10 my-auto py-4 flex flex-col">
            <div className="w-full h-10 rounded-lg overflow-hidden flex shadow-lg border border-white/10 mb-3 group-hover:scale-105 transition-transform">
              <div className="w-1/4 h-full bg-[#221E1B]" title="Raw Umber" />
              <div className="w-1/4 h-full bg-[#FD6F00]" title="Radiant Earth" />
              <div className="w-1/4 h-full bg-[#5C7066]" title="Sage Wash" />
              <div className="w-1/4 h-full bg-[#DCD2C4]" title="Sand Strata" />
            </div>
            <h4 className="font-bold text-xl sm:text-2xl text-white tracking-tight">
              Ethereal Topographies
            </h4>
            <p className="text-xs text-[#A1A1AA] mt-1">
              Mineral pigments &amp; heavy impasto acrylics on raw Belgian linen.
            </p>
          </div>

          {/* Bottom */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-[#A1A1AA]">
            <span className="text-[#FD6F00]">Series IV</span>
            <span>Private Collection</span>
          </div>
        </div>
      )

    case "komorebi-teas":
      return (
        <div
          className={`relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#142018] via-[#1A2A20] to-[#0E1711] text-[#FAF6EE] flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none group ${className}`}
        >
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FD6F00]/15 border border-[#FD6F00]/30 px-3 py-1 text-[11px] font-mono font-bold text-[#FD6F00] uppercase tracking-wider">
              Packaging
            </span>
            <span className="font-mono text-xs text-[#A1A1AA]">2023</span>
          </div>

          <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center">
            <div className="size-16 rounded-full bg-[#1A2A20] border-2 border-[#BFA475] shadow-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="font-extrabold text-2xl text-[#BFA475]">K</span>
            </div>
            <h4 className="font-extrabold text-xl text-white">KOMOREBI RESERVE</h4>
            <p className="text-xs text-[#A1A1AA] mt-1">
              Matte tin canister with washi wrapper &amp; wax seal.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-[#A1A1AA]">
            <span className="text-[#FD6F00]">Tea Canister</span>
            <span>Distinction Award</span>
          </div>
        </div>
      )

    case "aethel-geometry":
    default:
      return (
        <div
          className={`relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#16161A] via-[#1B1B20] to-[#101014] text-white flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none group ${className}`}
        >
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FD6F00]/15 border border-[#FD6F00]/30 px-3 py-1 text-[11px] font-mono font-bold text-[#FD6F00] uppercase tracking-wider">
              Brand Identity
            </span>
            <span className="font-mono text-xs text-[#A1A1AA]">2022</span>
          </div>

          <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center">
            <span className="font-extrabold text-6xl sm:text-7xl font-mono text-white leading-none group-hover:text-[#FD6F00] transition-colors">
              &amp;Q
            </span>
            <h4 className="font-bold text-lg text-white mt-2">AETHEL GEOMETRIC</h4>
            <p className="text-xs text-[#A1A1AA]">Type specimen identity &amp; posters.</p>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-[#A1A1AA]">
            <span className="text-[#FD6F00]">Silkscreen</span>
            <span>64 Pages</span>
          </div>
        </div>
      )
  }
}
