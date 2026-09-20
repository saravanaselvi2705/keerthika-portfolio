"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { portfolio } from "@/src/data/portfolio"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "About Me", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo on Left: "Keerthika S." with Radiant Orange Dot */}
        <a
          href="#top"
          className="group flex items-center gap-1 text-xl sm:text-2xl font-extrabold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] rounded-lg"
          aria-label="Keerthika S Home"
        >
          <span>Keerthika S</span>
          <span className="text-[#FD6F00] text-2xl leading-none transition-transform group-hover:scale-125 inline-block">
            .
          </span>
        </a>

        {/* Centered Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-white relative group"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FD6F00] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button: Radiant Orange Pill "Hire Me" */}
        <div className="flex items-center gap-4">
          <a
            href={portfolio.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#FD6F00] hover:bg-[#E05E00] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-[0_0_25px_rgba(253,111,0,0.4)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00]"
          >
            <span>Hire Me</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-[#1E1E1E] p-2 md:hidden text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#121212]/95 backdrop-blur-2xl px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-medium text-white hover:text-[#FD6F00] transition-colors border-b border-white/5"
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} className="text-[#A1A1AA]" />
              </a>
            ))}
            <a
              href={portfolio.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#FD6F00] px-6 py-3 text-sm font-semibold text-white shadow-lg"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
