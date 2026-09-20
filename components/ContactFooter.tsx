"use client"

import { ArrowUp } from "lucide-react"
import { portfolio } from "@/src/data/portfolio"

export { ContactSection } from "./ContactSection"

export function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-white/10 bg-[#121212] pt-8 pb-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Clean Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-2 font-medium">
            <span>© {new Date().getFullYear()} {portfolio.name}.</span>
            <span>All rights reserved.</span>
          </div>

          {/* Quick Social Handles & Back-To-Top */}
          <div className="flex items-center gap-6 font-semibold">
            <a
              href={portfolio.links.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FD6F00] transition-colors"
            >
              Behance ↗
            </a>
            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FD6F00] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={portfolio.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FD6F00] transition-colors"
            >
              Instagram ↗
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-[#1E1E1E] text-white hover:bg-[#FD6F00] transition-colors cursor-pointer"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
