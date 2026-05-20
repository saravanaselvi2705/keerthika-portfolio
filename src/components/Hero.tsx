"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full">
              Available for new opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight mb-6 tracking-tight">
              Building scalable <br className="hidden md:block" />
              web experiences.
            </h1>
            <p className="text-lg text-muted mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I&apos;m a Full Stack Developer specializing in React, Next.js, and Node. 
              I help startups and businesses build production-ready, high-performance applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-charcoal text-white rounded-lg font-medium hover:bg-charcoal-light transition-colors group"
              >
                View Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white text-charcoal border border-gray-200 rounded-lg font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md md:max-w-none"
          >
            <div className="aspect-square bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center overflow-hidden relative">
              {/* Using a clean placeholder structure since we don't have a specific image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white" />
              <div className="relative text-center p-8">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-6 rotate-3">
                  <span className="text-4xl font-bold text-accent">{"</>"}</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Clean Code.</h3>
                <p className="text-muted text-sm">Professional architecture.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
