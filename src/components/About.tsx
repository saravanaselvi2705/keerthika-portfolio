"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-20 bg-charcoal">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="aspect-[3/4] md:aspect-square relative overflow-hidden group border border-white/10 bg-white/5"
                >
                    <Image
                        src="/keerthika-about.png"
                        alt="Keerthika S - Professional Artist"
                        fill
                        className="object-contain md:object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                </motion.div>

                <div>
                    <SectionHeading title="About Me" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                            Creative and detail-oriented Graphic Designer with nearly 4 years of experience
                            in branding, digital design, and marketing creatives. Currently leading the
                            design team at <span className="text-white font-semibold">Talrop</span>.
                            Skilled in Adobe Creative Suite, I craft visually engaging designs that
                            communicate effectively.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-white/50">
                                <MapPin size={20} className="text-white" />
                                <span className="text-white">Kozhikode & Munnar, Kerala, India</span>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 p-6 border border-white/10 bg-white/[0.02]"
                        >
                            <h4 className="font-serif text-xl mb-4 italic">&ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;</h4>
                            <p className="text-sm uppercase tracking-widest text-white/40">&mdash; Steve Jobs (A Philosophy I follow in Branding)</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
