"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Eleanor Vance",
    company: "Aurélia London",
    role: "Founder & Creative Director",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    review: "Keerthika is an extraordinary brand identity designer. She took our vision for Aurélia London and translated it into a luxury gold foil stationery system and brand guidelines that completely elevated our market positioning. Client inquiries doubled within two months!",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    company: "Noir & Gold Lifestyle",
    role: "Head of Marketing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    review: "The social media templates and carousel decks Keerthika designed for our Instagram campaigns were a game-changer. Our engagement rates jumped by 310% and ad conversion costs plummeted. Absolutely top-tier work!",
  },
  {
    id: 3,
    name: "Sophia Chen",
    company: "Aurélia Perfumes Paris",
    role: "Brand Director",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    review: "Keerthika's packaging design for our flagship perfume box and bottle labels won us the Best Cosmetic Packaging Award in Paris. Her attention to dieline accuracy and gold foil print specs is second to none.",
  },
  {
    id: 4,
    name: "David Ross",
    company: "Creovix Media",
    role: "Chief Operating Officer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    review: "Working with Keerthika on our agency rebrand was smooth, professional, and delivered well ahead of deadline. She understands business goals just as deeply as aesthetic beauty.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#0B0D14] relative border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            What Clients <span className="text-gold-gradient">Say</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl text-sm sm:text-base">
            Trusted by brand founders, marketing leaders, and creative agencies worldwide.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-transparent mt-4 rounded-full" />
        </div>

        {/* Testimonials Carousel Frame */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-surface-card border border-white/10 shadow-2xl backdrop-blur-xl">
          
          {/* Quote Icon Background watermark */}
          <Quote className="absolute top-6 right-8 w-24 h-24 text-gold-500/10 pointer-events-none rotate-180" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center max-w-3xl mx-auto"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6 text-gold-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl font-serif leading-relaxed text-foreground mb-8 italic">
                &ldquo;{current.review}&rdquo;
              </blockquote>

              {/* Client Profile */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <div className="text-base font-serif font-bold text-foreground">
                    {current.name}
                  </div>
                  <div className="text-xs text-gold-300 font-medium">
                    {current.role} — <span className="text-muted">{current.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-gold-400" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-foreground hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-foreground hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
