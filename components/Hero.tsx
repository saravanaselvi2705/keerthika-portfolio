"use client"

import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion"
import { ArrowUpRight, ExternalLink, ChevronDown } from "lucide-react"
import Image from "next/image"
import { portfolio } from "@/src/data/portfolio"

const heroImages = [
  { src: "/images/hero-mockups/wise-talkies.png", alt: "Wise Talkies Poster Design" },
  { src: "/images/hero-mockups/branding.png", alt: "Editorial & Brochure Layout" },
  { src: "/images/hero-mockups/packaging.png", alt: "Packaging Design Work" },
  { src: "/images/hero-mockups/packaging-bag.png", alt: "Packaging Bag & Dieline" },
  { src: "/images/hero-mockups/masterclass-grid.png", alt: "Masterclass Still Artwork" },
  { src: "/images/hero-mockups/editorial-spread.png", alt: "Editorial Spread" },
  { src: "/images/hero-mockups/Cards.png", alt: "Cards" },
  { src: "/images/hero-mockups/Idcards.png", alt: "Id Cards" },
  { src: "/images/hero-mockups/tshirt.png", alt: "Tshirt" },
  { src: "/images/hero-mockups/Indosudan.png", alt: "Indo Sudan" },

]

const textContainerVariants = (delayChildren = 0, staggerSpeed = 0.03): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerSpeed,
      delayChildren: delayChildren,
    },
  },
})

const charVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 16, stiffness: 180 },
  },
}

function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.025,
  shouldReduceMotion = false,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  shouldReduceMotion?: boolean | null
}) {
  if (shouldReduceMotion) return <span className={className}>{text}</span>

  return (
    <motion.span
      variants={textContainerVariants(delay, stagger)}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap ${className}`}
      aria-label={text}
    >
      {Array.from(text).map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={charVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  const headlineY = useTransform(scrollY, [0, 480], [0, 24])
  const headlineOpacity = useTransform(scrollY, [0, 480], [1, 0.9])

  const name = portfolio.name || "Keerthika S"
  const leadRole = portfolio.roleLead || "Graphic Designer"
  const secondRole = portfolio.roleSecond || "& Fine Artist"

  // Duplicate the 6 images to 12 items for an uninterrupted top-to-down loop
  const loopedImages = [...heroImages, ...heroImages]

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0c0c0c]"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FD6F00]/12 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0"
        style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Clean Left-Aligned Typography & Actions */}
          <div className="flex flex-col items-start text-left">

            {/* Animated Name */}
            <div className="mb-4">
              <AnimatedText
                text={name}
                delay={0.1}
                stagger={0.035}
                shouldReduceMotion={shouldReduceMotion}
                className="text-base sm:text-xl font-bold tracking-[0.2em] text-[#E4E4E7] uppercase"
              />
            </div>

            {/* Role Headline */}
            <motion.h1
              style={shouldReduceMotion ? undefined : { y: headlineY, opacity: headlineOpacity }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 will-change-transform"
            >
              <span className="block text-[#FD6F00]">
                <AnimatedText
                  text={leadRole}
                  delay={0.45}
                  stagger={0.022}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </span>
              <span className="block text-white mt-1">
                <AnimatedText
                  text={secondRole}
                  delay={0.9}
                  stagger={0.022}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </span>
            </motion.h1>

            {/* Bio */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed mb-8">
              {portfolio.bio}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-8">
              <a
                href={portfolio.links.behance}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance Profile"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-[#1E1E1E]/90 backdrop-blur-md text-white hover:border-[#FD6F00] hover:text-[#FD6F00] hover:bg-[#252525] transition-all hover:scale-110 shadow-sm"
              >
                <span className="font-bold text-xs tracking-tighter">Bē</span>
              </a>
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-[#1E1E1E]/90 backdrop-blur-md text-white hover:border-[#FD6F00] hover:text-[#FD6F00] hover:bg-[#252525] transition-all hover:scale-110 shadow-sm"
              >
                <span className="font-bold text-xs">in</span>
              </a>
              <a
                href={portfolio.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-[#1E1E1E]/90 backdrop-blur-md text-white hover:border-[#FD6F00] hover:text-[#FD6F00] hover:bg-[#252525] transition-all hover:scale-110 shadow-sm"
              >
                <span className="font-bold text-xs">ig</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={portfolio.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-radial-glow inline-flex items-center gap-2 rounded-full bg-[#FD6F00] hover:bg-[#E05E00] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00]"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href={portfolio.links.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#1E1E1E]/90 backdrop-blur-md px-7 py-4 text-sm font-semibold text-white hover:border-[#FD6F00] hover:bg-[#252525] transition-all hover:scale-105"
              >
                <span>View Behance</span>
                <ExternalLink size={15} className="text-[#A1A1AA]" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Infinite Vertical Top-to-Down Showcase */}
          <div
            className="relative h-[560px] lg:h-[620px] w-full flex justify-center lg:justify-end items-start overflow-hidden"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: ["-50%", "0%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-col gap-10 w-60 sm:w-72 lg:w-80 h-fit self-start will-change-transform"
            >
              {loopedImages.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className="relative w-full aspect-[3/4] shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
                  style={{ aspectRatio: "3/4", minHeight: "320px" }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    unoptimized
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="object-contain"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    onError={() => {
                      console.error("Image failed to load:", item.src)
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 lg:mt-20 flex justify-center">
          <a
            href="#services"
            className="scroll-cue-indicator group inline-flex flex-col items-center gap-2 text-xs font-mono tracking-widest text-[#A1A1AA] hover:text-[#FD6F00] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00]"
            aria-label="Scroll to explore services and portfolio"
          >
            <span className="uppercase text-[11px] tracking-[0.22em] text-[#71717A] group-hover:text-[#FD6F00] transition-colors">
              Scroll to explore
            </span>
            <div className="flex size-7 items-center justify-center rounded-full border border-white/15 bg-[#1E1E1E] text-[#FD6F00] shadow-md group-hover:border-[#FD6F00]/60 transition-colors">
              <ChevronDown size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}