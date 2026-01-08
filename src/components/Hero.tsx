"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
            {/* Background Decor */}
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 left-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/60 uppercase tracking-[0.3em] text-sm mb-6 block"
                >
                    Senior Graphic Designer & Artist
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-8"
                >
                    Elevating Brands <br />
                    <span className="text-white/40 italic">through Strategic Design.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed"
                >
                    I am Keerthika S, a Senior Graphic Designer & Professional Artist.
                    I blend creativity with strategy to deliver impactful visual solutions
                    for brands like Talrop, MediaOne, and Steyp.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-wrap gap-6"
                >
                    <Link
                        href="#portfolio"
                        className="px-8 py-4 bg-white text-black font-semibold rounded-none hover:bg-white/90 transition-all flex items-center gap-2"
                    >
                        View Portfolio <ArrowRight size={20} />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 border border-white/20 hover:border-white transition-all font-semibold"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
