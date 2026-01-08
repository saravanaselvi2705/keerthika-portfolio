"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
    {
        year: "2024 - Present",
        role: "Senior Graphic Designer (Team Lead)",
        company: "Talrop",
        location: "Calicut",
        description: "Leading the design team, overseeing branding initiatives and marketing campaigns.",
    },
    {
        year: "2022 - 2024",
        role: "Graphic Designer",
        company: "Steyp",
        location: "Kochi",
        description: "Developed visual identities and educational marketing materials for an EdTech startup.",
    },
    {
        year: "2020 - Ongoing",
        role: "Freelance Professional Artist",
        company: "Fine Arts & Commissioned Work",
        location: "Remote",
        description: "Specializing in pencil portraits, sketches, and bespoke fine art commissions.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-20 border-t border-white/5">
            <SectionHeading
                title="Experience"
                subtitle="A journey through brands and art boards."
            />

            <div className="mt-20 relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

                <div className="space-y-24">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-white rounded-full -translate-x-1/2 z-10 hidden md:block" />

                            <div className="w-full md:w-1/2">
                                <div className={`p-8 bg-charcoal border border-white/10 hover:border-white/30 transition-colors ${i % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <span className="text-white/40 font-mono text-sm uppercase tracking-widest block mb-2">{exp.year}</span>
                                    <h3 className="text-2xl font-serif font-bold mb-1">{exp.role}</h3>
                                    <div className="text-white/60 mb-4">{exp.company} • {exp.location}</div>
                                    <p className="text-white/70 leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
