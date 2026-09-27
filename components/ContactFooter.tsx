"use client"

import { ArrowUp, ArrowUpRight } from "lucide-react"
import { portfolio } from "@/src/data/portfolio"

export { ContactSection } from "./ContactSection"

export function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Featured Works", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#080808] pt-16 pb-12 relative overflow-hidden">
      {/* Ambient footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#FD6F00]/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* Top Footer Section: Brand Identity & Quick Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-2xl font-extrabold tracking-tight text-white group"
            >
              <span>{portfolio.name}</span>
              <span className="text-[#FD6F00] text-3xl leading-none transition-transform group-hover:scale-125 inline-block">.</span>
            </a>
            <p className="text-xs font-mono font-medium text-[#FD6F00]">
              {portfolio.roleLead} {portfolio.roleSecond}
            </p>
            <p className="text-xs text-[#A1A1AA] max-w-md leading-relaxed">
              Trained in classical fine arts at JJ College of Fine Arts and analytical mathematics. 4.5+ years directing brand identities, newspaper publications, and multi-format media campaigns across Calicut and Kochi.
            </p>
          </div>

          {/* Navigation Directory (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#71717A] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#A1A1AA] hover:text-[#FD6F00] transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence & Portfolio (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#71717A] mb-4">
              Profiles &amp; Portfolio
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a
                  href={portfolio.links.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4D4D8] hover:text-[#FD6F00] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Behance Portfolio</span>
                  <ArrowUpRight size={13} className="text-[#71717A] group-hover:text-[#FD6F00]" />
                </a>
              </li>
              <li>
                <a
                  href={portfolio.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4D4D8] hover:text-[#FD6F00] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={13} className="text-[#71717A] group-hover:text-[#FD6F00]" />
                </a>
              </li>
              <li>
                <a
                  href={portfolio.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4D4D8] hover:text-[#FD6F00] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Instagram Gallery</span>
                  <ArrowUpRight size={13} className="text-[#71717A] group-hover:text-[#FD6F00]" />
                </a>
              </li>
              <li>
                <a
                  href={portfolio.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FD6F00] hover:text-[#FFA048] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Direct WhatsApp Chat</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#71717A]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {portfolio.name}.</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-[#52525B]">
              Designed in Behance Creator Aesthetic
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-[#16161A] text-white hover:bg-[#FD6F00] hover:border-[#FD6F00] transition-all cursor-pointer shadow-md"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
