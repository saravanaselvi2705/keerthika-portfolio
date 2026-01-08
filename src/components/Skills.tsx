"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
    {
        title: "Software",
        skills: ["Adobe Photoshop", "Illustrator", "InDesign", "Tally ERP"],
    },
    {
        title: "Core Competencies",
        skills: ["Branding", "Social Media Creatives", "Typography", "Sketching", "Fine Arts"],
    },
    {
        title: "Languages",
        skills: ["English", "Malayalam", "Hindi", "Tamil"],
    },
];

export default function Skills() {
    return (
        <section className="py-24 px-6 md:px-20 bg-[#070707]">
            <SectionHeading title="Expertise" subtitle="The tools and techniques I use to bring ideas to life." />

            <div className="grid md:grid-cols-3 gap-12 mt-16">
                {skillGroups.map((group, i) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        className="p-8 bg-charcoal-light border border-white/5 hover:border-white/20 transition-all group"
                    >
                        <h3 className="text-xl font-serif font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 transition-all" />
                            {group.title}
                        </h3>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className="flex flex-wrap gap-3"
                        >
                            {group.skills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    className="px-4 py-2 bg-white/5 border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
