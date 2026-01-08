"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Branding", "Social Media", "Print", "Art"];

const projects = [
    {
        title: "MediaOne Conclave",
        category: "Branding",
        image: "/project-mediaone.png", // Ensure these exist or use placeholders
    },
    {
        title: "Wise Talkies",
        category: "Print",
        image: "/project-cards.png",
    },
    {
        title: "Talrop Techies",
        category: "Social Media",
        image: "/project-mediaone.png",
    },
    {
        title: "Hosface Identity",
        category: "Branding",
        image: "/project-hosface.png",
    },
    {
        title: "Freedia USA",
        category: "Print",
        image: "/project-branding.png",
    },
    {
        title: "Pencil Portraits",
        category: "Art",
        image: "/project-arts.png",
    },
];

export default function PortfolioGallery() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(
        (p) => filter === "All" || p.category === filter
    );

    return (
        <section id="portfolio" className="py-32 px-6 md:px-20 bg-[#0a0a0a]">

            <div className="mb-20">
                <SectionHeading
                    title="Selected Works"
                    subtitle="A curated selection of projects where strategy meets design."
                />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 text-xs uppercase tracking-[0.2em] transition-all border border-transparent ${filter === cat
                            ? "bg-white text-black border-white"
                            : "text-white/40 hover:text-white border-white/10 hover:border-white/40"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, i) => (
                        <ProjectCard
                            key={`${project.title}-${i}`}
                            title={project.title}
                            category={project.category}
                            image={project.image}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
