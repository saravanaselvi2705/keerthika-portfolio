"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Branding", "Social Media", "Print", "Art"];

const projects = [
    {
        title: "MediaOne Business Conclave",
        category: "Branding",
        image: "/project-mediaone.png",
        tags: ["Event Branding", "YouTube Thumbnails", "Stage Backdrops"],
    },
    {
        title: "Wise Talkies",
        category: "Print",
        image: "/project-cards.png",
        tags: ["Business Cards", "Brand Identity"],
    },
    {
        title: "Talrop Techies Park",
        category: "Social Media",
        image: "/project-mediaone.png",
        tags: ["Marketing Flyers", "Social Media Campaigns"],
    },
    {
        title: "Hosface & Redbolt",
        category: "Branding",
        image: "/project-hosface.png",
        tags: ["Logo Design", "Brand Identity"],
    },
    {
        title: "Freedia Entertainment USA",
        category: "Print",
        image: "/project-branding.png",
        tags: ["Tour Posters", "Event Visuals"],
    },
    {
        title: "Fine Arts Collection",
        category: "Art",
        image: "/project-arts.png",
        tags: ["Pencil Portraits", "Sketches"],
    },
    {
        title: "Eco-Brand Identity",
        category: "Branding",
        image: "/project-branding.png",
        tags: ["Sustainability", "Visual Design"],
    },
    {
        title: "Digital Art Series",
        category: "Art",
        image: "/project-arts.png",
        tags: ["Illustrations", "Digital Painting"],
    },
];

export default function PortfolioGallery() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(
        (p) => filter === "All" || p.category === filter
    );

    return (
        <section id="portfolio" className="py-24 px-6 md:px-20">
            <SectionHeading
                title="Works"
                subtitle="Exploring the intersection of strategy and visual storytelling."
            />

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 text-xs uppercase tracking-widest transition-all ${filter === cat
                            ? "bg-white text-black"
                            : "border border-white/10 text-white/40 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            category={project.category}
                            image={project.image}
                            index={i}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
