"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 tracking-tight">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I am a results-driven Full Stack Developer with a strong focus on building scalable,
              maintainable, and highly optimized web applications. My expertise lies in the modern JavaScript ecosystem,
              specifically React, Next.js, TypeScript, and Node.js.
            </p>
            <p>
              I approach software development with a product-first mindset. My goal isn&apos;t just to write code,
              but to solve complex business problems through clean architecture and intuitive user experiences.
              I value clear communication, agile methodologies, and test-driven development.
            </p>
            <p>
              Over the years, I have collaborated with diverse teams ranging from fast-paced startups to established
              agencies, delivering products that are robust, secure, and ready for production.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-charcoal mb-1">5+</div>
              <div className="text-sm font-medium text-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-charcoal mb-1">30+</div>
              <div className="text-sm font-medium text-muted">Projects Shipped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-charcoal mb-1">100%</div>
              <div className="text-sm font-medium text-muted">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
