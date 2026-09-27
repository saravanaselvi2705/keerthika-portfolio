"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, Box, Compass, Globe2 } from "lucide-react";
import Image from "next/image";
import { portfolio } from "@/src/data/portfolio";

export function Hero() {
  const partnerBrands = [
    { name: "Talrop", icon: Layers },
    { name: "Makt Media", icon: Globe2 },
    { name: "Steyp EdTech", icon: Sparkles },
    { name: "Wise Talkies", icon: Compass },
    { name: "Redbolt Luggage", icon: Box },
  ];

  // Helper for jumping letters with staggered wave animation
  const renderJumpingLetters = (
    text: string,
    baseDelay: number,
    charClassName: string = ""
  ) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={`${char}-${index}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: [0, -18, 4, 0],
        }}
        transition={{
          opacity: { duration: 0.4, delay: baseDelay + index * 0.04 },
          y: {
            duration: 1.15,
            repeat: Infinity,
            repeatDelay: 3.2,
            delay: baseDelay + index * 0.07,
            ease: [0.34, 1.56, 0.64, 1], // elastic bounce
          },
        }}
        whileHover={{
          y: -22,
          scale: 1.12,
          color: "#FD6F00",
          transition: { type: "spring", stiffness: 450, damping: 10 },
        }}
        className={`inline-block select-none cursor-default will-change-transform ${charClassName}`}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section
      id="top"
      className="relative min-h-[95vh] sm:min-h-screen bg-[#080808] text-white flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden"
    >
      {/* Planetary Golden Orbital Glow Curve (from Reference Image) */}
      <div className="absolute top-[38%] right-[-10%] sm:right-[5%] w-[550px] sm:w-[750px] lg:w-[900px] h-[350px] sm:h-[450px] rounded-[100%] border-t-2 border-[#FD6F00]/30 bg-gradient-to-b from-[#FD6F00]/10 via-[#FD6F00]/5 to-transparent blur-[1px] pointer-events-none z-0 transform -rotate-12" />

      {/* Ambient Warm Golden Aura */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[650px] sm:w-[850px] h-[450px] bg-gradient-to-tr from-[#FD6F00]/15 via-amber-500/10 to-transparent blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Main Composition Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">

        {/* Hero Upper Headline Block: James Lux Style */}
        <div className="relative w-full flex flex-col items-center select-none pt-4 sm:pt-8">

          {/* Row 1: Giant Full Name Typography with Text Jumping Animation */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[132px] font-black uppercase tracking-tight text-white leading-none text-center drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)] z-0 flex flex-wrap justify-center items-center">
            {renderJumpingLetters("KEERTHIKA S", 0.1)}
          </h1>

          {/* Row 2: Flanking Roles (GRAPHIC [portrait gap] DESIGNER) */}
          {/* Using strict 3-segment grid with a reserved center corridor so GRAPHIC is NEVER hidden */}
          <div className="w-full grid grid-cols-12 items-center mt-2 sm:mt-4 z-0">

            {/* Left: GRAPHIC (Ends before her head with ample breathing room) */}
            <div className="col-span-4 sm:col-span-4 flex justify-end pr-3 sm:pr-8 md:pr-12 lg:pr-16 text-white/90">
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light tracking-[0.14em] sm:tracking-[0.18em] uppercase font-sans drop-shadow-md whitespace-nowrap">
                {renderJumpingLetters("GRAPHIC", 0.6)}
              </span>
            </div>

            {/* Center: Reserved space for her head and neck */}
            <div className="col-span-4 sm:col-span-4 pointer-events-none" />

            {/* Right: DESIGNER (Starts after her head with ample breathing room) */}
            <div className="col-span-4 sm:col-span-4 flex justify-start pl-3 sm:pl-8 md:pl-12 lg:pl-16 text-white/90">
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light tracking-[0.14em] sm:tracking-[0.18em] uppercase font-sans drop-shadow-md whitespace-nowrap">
                {renderJumpingLetters("DESIGNER", 0.85)}
              </span>
            </div>

          </div>

          {/* Center Cutout Portrait (Background Removed - Centered cleanly over the center gap) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-12 sm:top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 w-[260px] sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[500px] aspect-[896/1200] pointer-events-none z-10"
          >
            <Image
              src="/images/keerthika-cutout.png"
              alt="Keerthika S - Senior Graphic Designer"
              fill
              priority
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 400px, 500px"
              className="object-contain object-top filter contrast-[1.03]"
            />
          </motion.div>

        </div>

        {/* Lower Content Grid: Left Bio & CTAs (Flanking the Torso just like James Lux) */}
        <div className="relative z-20 mt-36 sm:mt-52 md:mt-64 lg:mt-72 max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-4">

          {/* Left Column: Freelance Status, Bio, Schedule Call Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-5 lg:col-span-4 text-left space-y-4 sm:space-y-5"
          >
            {/* Open for freelance works pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141416]/90 border border-white/10 backdrop-blur-xl shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
              </span>
              <span className="text-xs font-medium text-[#E4E4E7] tracking-wide">
                Open for freelance works.
              </span>
            </div>

            {/* Bio Statement */}
            <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed font-normal">
              Hey there! I&apos;m a <strong className="text-white font-semibold">Senior Graphic Designer &amp; Lead Visual Artist</strong> with over 4.5 years of experience in brand identity, newspaper layout, digital marketing, and fine arts.
            </p>

            {/* Schedule Call Button (White rounded pill matching James Lux style) */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href={portfolio.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-neutral-200 text-black px-7 py-3.5 text-sm font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <span>Schedule Call</span>
                <ArrowUpRight size={16} className="text-black" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-[#18181A]/90 hover:bg-[#222226] text-white border border-white/15 px-6 py-3.5 text-sm font-semibold transition-all hover:border-[#FD6F00] backdrop-blur-md"
              >
                <span>View Works</span>
              </a>
            </div>
          </motion.div>

          {/* Center Column: Spacer for Cutout Torso */}
          <div className="hidden md:block md:col-span-4 lg:col-span-5 pointer-events-none" />

          {/* Right Column: Mini Metric / Creative Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:flex lg:col-span-3 flex-col items-end text-right space-y-3"
          >
            <div className="p-3.5 rounded-2xl bg-[#141416]/80 border border-white/10 backdrop-blur-xl">
              <div className="text-2xl font-black text-[#FD6F00]">4.5+ Yrs</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">Agency &amp; Art Practice</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#141416]/80 border border-white/10 backdrop-blur-xl">
              <div className="text-2xl font-black text-white">40+ Brands</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">Launched Across Kerala</div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Partner Brand Row (Matching James Lux bottom bar) */}
      <div className="w-full border-t border-white/10 bg-[#080808]/90 backdrop-blur-xl py-5 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10 text-xs sm:text-sm font-mono tracking-wider text-[#8E8E93]">
            {partnerBrands.map((brand) => {
              const Icon = brand.icon;
              return (
                <div
                  key={brand.name}
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-default group"
                >
                  <Icon size={16} className="text-[#FD6F00] group-hover:scale-110 transition-transform" />
                  <span className="font-semibold tracking-widest uppercase">{brand.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}