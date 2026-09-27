"use client"

import React, { useState } from "react"
import { CheckCircle2, ArrowUpRight, Send, Mail, Phone, MapPin, Sparkles, MessageSquare } from "lucide-react"
import { portfolio } from "@/src/data/portfolio"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Brand Identity & Logo Branding",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission for client-side demo
    console.log("Contact form inquiry:", formData)
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      service: "Brand Identity & Logo Branding",
      message: "",
    })
    setSubmitted(false)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Subtle Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FD6F00]/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Main Glassmorphic Inquiry Container */}
      <div className="relative rounded-3xl border border-white/10 bg-[#121214]/90 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Creator Value & Direct Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#18181A] text-[#FD6F00] text-xs font-mono font-medium mb-6">
                <Sparkles size={13} />
                <span>Start A Collaboration</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Let&apos;s create something <span className="text-[#FD6F00]">remarkable</span> together.
              </h2>

              <p className="mt-5 text-[#A1A1AA] leading-relaxed text-sm sm:text-base">
                Whether you need enterprise brand identity systems, high-density newspaper editorial layouts, corporate conclave marketing collateral, or bespoke commissioned fine art—I’m available for select client engagements.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#18181C] border border-white/10 hover:border-[#FD6F00]/60 text-[#D4D4D8] hover:text-white transition-all text-sm group shadow-sm"
              >
                <div className="size-9 rounded-lg bg-[#FD6F00]/10 border border-[#FD6F00]/25 flex items-center justify-center text-[#FD6F00] group-hover:bg-[#FD6F00] group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">Email Inquiry</div>
                  <div className="font-mono text-xs sm:text-sm font-semibold">{portfolio.email}</div>
                </div>
              </a>

              <a
                href={portfolio.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#18181C] border border-white/10 hover:border-[#FD6F00]/60 text-[#D4D4D8] hover:text-white transition-all text-sm group shadow-sm"
              >
                <div className="size-9 rounded-lg bg-[#FD6F00]/10 border border-[#FD6F00]/25 flex items-center justify-center text-[#FD6F00] group-hover:bg-[#FD6F00] group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">Phone / WhatsApp</div>
                  <div className="font-mono text-xs sm:text-sm font-semibold">{portfolio.phone}</div>
                </div>
                <ArrowUpRight size={15} className="ml-auto text-[#71717A] group-hover:text-[#FD6F00] transition-colors" />
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#18181C] border border-white/5 text-[#A1A1AA] text-xs">
                <div className="size-9 rounded-lg bg-white/5 flex items-center justify-center text-[#A1A1AA]">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">Base &amp; Studio</div>
                  <div className="text-white font-medium">{portfolio.location}</div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <div>
              <a
                href={portfolio.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#FD6F00] hover:text-[#FFA048] transition-colors"
              >
                <MessageSquare size={14} />
                <span>Prefer direct chat? Message directly on WhatsApp &rarr;</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7 bg-[#16161A] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="size-16 rounded-2xl bg-[#FD6F00]/10 border border-[#FD6F00]/30 flex items-center justify-center text-[#FD6F00]">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Inquiry Received!</h3>
                <p className="text-sm text-[#A1A1AA] max-w-md leading-relaxed">
                  Thank you for reaching out, <strong className="text-white">{formData.name || "there"}</strong>. Keerthika will review your project requirements and respond promptly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-xl border border-white/15 bg-[#202026] hover:border-[#FD6F00] text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#A1A1AA] mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Ramesh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#111114] border border-white/10 text-white placeholder-[#52525B] focus:outline-none focus:border-[#FD6F00] focus:ring-1 focus:ring-[#FD6F00] text-sm transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#A1A1AA] mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#111114] border border-white/10 text-white placeholder-[#52525B] focus:outline-none focus:border-[#FD6F00] focus:ring-1 focus:ring-[#FD6F00] text-sm transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#A1A1AA] mb-2 uppercase tracking-wider">
                    Creative Specialization Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#111114] border border-white/10 text-[#D4D4D8] focus:outline-none focus:border-[#FD6F00] focus:ring-1 focus:ring-[#FD6F00] text-sm transition"
                  >
                    <option value="Brand Identity & Logo Branding">Brand Identity &amp; Logo Branding</option>
                    <option value="Fine Arts & Custom Drawings">Fine Arts &amp; Custom Drawings (Charcoal &amp; Canvas)</option>
                    <option value="Newspaper Editing & Creation">Newspaper Editing &amp; Publication Creation</option>
                    <option value="Print Collateral & Marketing Creatives">Print Collateral &amp; Conclave Marketing Kits</option>
                    <option value="Packaging & Dielines">Packaging &amp; Structural Dielines</option>
                    <option value="Comprehensive Creative Direction">Comprehensive Creative Direction / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#A1A1AA] mb-2 uppercase tracking-wider">
                    Project Scope &amp; Brief *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, goals, key deliverables, and target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#111114] border border-white/10 text-white placeholder-[#52525B] focus:outline-none focus:border-[#FD6F00] focus:ring-1 focus:ring-[#FD6F00] text-sm transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#FD6F00] hover:bg-[#E05E00] text-white font-bold text-sm tracking-wide transition-all shadow-[0_4px_25px_rgba(253,111,0,0.35)] hover:shadow-[0_6px_30px_rgba(253,111,0,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00]"
                >
                  <span>Submit Creative Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
