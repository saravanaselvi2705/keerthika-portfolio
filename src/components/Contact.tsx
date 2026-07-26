"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Brand Identity",
    budget: "$1,000 - $3,000",
    timeline: "2-4 Weeks",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate response feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Direct Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            Let&apos;s Build <span className="text-gold-gradient">Something Amazing</span> Together
          </h2>
          <p className="text-muted mt-4 max-w-2xl text-sm sm:text-base">
            Have a project in mind or looking for a custom brand consultation? Fill out the form below or reach out via email / WhatsApp.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-transparent mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-2xl bg-surface-card border border-white/10 space-y-6">
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                Get in Touch
              </h3>
              
              {/* Email */}
              <a
                href="mailto:keerthika2306@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-gold-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">Email Studio</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-gold-300 transition-colors">
                    keerthika2306@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/918281082489"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-gold-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">WhatsApp / Phone</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-emerald-300 transition-colors">
                    +91 82810 82489
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">Studio Location</div>
                  <div className="text-sm font-semibold text-foreground">
                    Kozhikode, Kerala, India
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Guarantee Card */}
            <div className="p-6 rounded-2xl bg-gold-500/10 border border-gold-500/20">
              <div className="flex items-center gap-3 text-gold-400 text-sm font-semibold mb-2">
                <CheckCircle2 size={18} /> Response Guarantee
              </div>
              <p className="text-xs text-muted leading-relaxed">
                All client inquiries and project quote requests receive a prompt response within 24 business hours.
              </p>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-white/10 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Proposal Request Received!
                  </h3>
                  <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Keerthika will review your project requirements and get in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:bg-gold-500/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-foreground focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-muted/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-foreground focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-muted/50"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Required Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-foreground focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-muted/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="service-select" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                        Service Required *
                      </label>
                      <select
                        id="service-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-foreground focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                      >
                        <option value="Brand Identity">Brand Identity</option>
                        <option value="Logo Design">Logo Design</option>
                        <option value="Social Media Creatives">Social Media Creatives</option>
                        <option value="Packaging Design">Packaging Design</option>
                        <option value="Business Cards">Business Cards</option>
                        <option value="Brochure Design">Brochure Design</option>
                        <option value="Print Design">Print Design</option>
                        <option value="Illustration">Illustration</option>
                        <option value="Custom Artwork">Custom Artwork</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-foreground focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                      >
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-foreground focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                      >
                        <option value="< 1 Week">&lt; 1 Week (Express)</option>
                        <option value="1-2 Weeks">1 - 2 Weeks</option>
                        <option value="2-4 Weeks">2 - 4 Weeks</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      Project Description & Goals *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell me about your business, target audience, and design deliverables required..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-foreground focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all resize-none placeholder:text-muted/50"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-background font-semibold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Project Request</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
