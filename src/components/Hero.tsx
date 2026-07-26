"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#090A0F] overflow-hidden flex flex-col justify-between">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Geometric background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Cols 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 bg-surface/90 border border-gold-500/30 rounded-full shadow-lg backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                Available for Freelance & Contract Projects
              </span>
            </div>

            {/* Client-Focused Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
              Elevating Brands Through <br />
              <span className="text-gold-gradient">Iconic Visual Identity</span> & Design.
            </h1>

            {/* Short Value Proposition */}
            <p className="text-base sm:text-lg text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Senior Graphic & Brand Designer crafting luxury visual identities, high-converting social media creatives, premium packaging, print design, and custom artwork that transform businesses into category leaders.
            </p>

            {/* Credibility Indicators Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 py-4 px-5 bg-surface-card/60 border border-white/10 rounded-2xl backdrop-blur-md max-w-2xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left border-r border-white/5 last:border-r-0 pr-2">
                <div className="text-2xl lg:text-3xl font-serif font-bold text-gold-400">5+</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted">Years Experience</div>
              </div>
              <div className="text-center lg:text-left border-r sm:border-r border-white/5 pr-2">
                <div className="text-2xl lg:text-3xl font-serif font-bold text-gold-400">120+</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left border-r border-white/5 last:border-r-0 pr-2">
                <div className="text-2xl lg:text-3xl font-serif font-bold text-gold-400">85+</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-serif font-bold text-gold-400">99%</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted">Client Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-background rounded-full font-semibold text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 group hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-surface-card border border-gold-500/30 text-foreground rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gold-500/10 hover:border-gold-400 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Calendar size={18} className="text-gold-400" />
                Book a Call / Get Free Quote
              </a>
            </div>
          </motion.div>

          {/* Right Visual Element (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/40 via-purple-500/20 to-gold-400/30 rounded-3xl blur-2xl opacity-60" />
              
              {/* Workspace Mockup Card */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 bg-surface-card shadow-2xl">
                <Image
                  src="/project-branding.png"
                  alt="Keerthika Luxury Designer Workspace and Brand Identity Specs"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Glass Overlay Card 1: Brand System Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 left-4 p-3 rounded-xl bg-luxury-glass border border-gold-500/30 backdrop-blur-xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 font-bold">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-serif font-bold text-white">Brand System 3.0</div>
                    <div className="text-[10px] text-gold-300">Luxury Aesthetics</div>
                  </div>
                </motion.div>

                {/* Floating Glass Overlay Card 2: Satisfied Client Badge */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 right-4 p-3.5 rounded-xl bg-luxury-glass border border-white/20 backdrop-blur-xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">100% Client Success</div>
                    <div className="text-[10px] text-muted">High Converting Assets</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 pt-8 pb-4 text-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted hover:text-gold-400 transition-colors group"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-8 rounded-full border border-white/10 group-hover:border-gold-500/40 flex items-center justify-center"
          >
            <ChevronDown size={16} className="text-gold-400" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
