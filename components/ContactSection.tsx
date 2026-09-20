"use client"

import React, { useState } from "react"
import { CheckCircle2, ArrowUpRight, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Packaging & Dielines",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // submit handler logic
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: "", email: "", service: "Packaging & Dielines", message: "" })
    setSubmitted(false)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Outer Card with subtle gradient background */}
      <div className="relative rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950/90 p-8 sm:p-12 lg:p-16 backdrop-blur-md overflow-hidden">
        {/* Top ambient warm glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                Let&apos;s Connect
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Let’s create something <span className="text-orange-500">remarkable</span> together.
              </h2>

              <p className="mt-4 text-neutral-400 leading-relaxed text-sm sm:text-base">
                Whether you need an end-to-end brand identity system, structural packaging dielines, or bespoke fine art commissions—let’s build it.
              </p>
            </div>

            {/* Direct contact pills */}
            <div className="space-y-3 pt-4 border-t border-neutral-800/70">
              <a
                href="mailto:keerthika2396@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/50 text-neutral-300 hover:text-white transition-all text-sm group"
              >
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">✉</span>
                <span className="font-mono text-xs sm:text-sm">keerthika2396@gmail.com</span>
              </a>

              <a
                href="tel:+9182810 82489"
                className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/50 text-neutral-300 hover:text-white transition-all text-sm group"
              >
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">📞</span>
                <span className="font-mono text-xs sm:text-sm">+91 82810 82489</span>
              </a>

              <p className="text-xs text-neutral-500 pt-2 flex items-center gap-1.5">
                <span>📍</span> Kozhikode, Kerala, India
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-neutral-950/70 border border-neutral-800/90 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Message Received!</h3>
                <p className="text-sm text-neutral-400 max-w-md">
                  Thank you for reaching out, {formData.name || "there"}. Keerthika will review your inquiry and get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-5 py-2.5 rounded-xl border border-neutral-700 bg-neutral-900 hover:border-orange-500 text-xs font-semibold text-neutral-200 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Ramesh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 text-sm transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 text-sm transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">Project Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 focus:outline-none focus:border-orange-500 text-sm transition"
                  >
                    <option value="Packaging & Dielines">Packaging &amp; Dielines</option>
                    <option value="Brand Identity">Brand Identity &amp; Direction</option>
                    <option value="Fine Art Commission">Fine Art Commission</option>
                    <option value="Other">Other / Full Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, timeline, or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 text-sm transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium text-sm transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <span>↗</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
