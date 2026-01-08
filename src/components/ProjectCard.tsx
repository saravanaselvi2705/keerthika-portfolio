"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    index: number;
}

export default function ProjectCard({ title, category, image, index }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative bg-charcoal-light border border-white/5 overflow-hidden ring-1 ring-white/10 hover:ring-white/30 transition-all"
        >
            <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                    >
                        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-3 block transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                            {category}
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-white leading-tight mb-2 transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                            {title}
                        </h3>
                        <div className="w-0 group-hover:w-12 h-[1px] bg-white/40 transition-all duration-700 delay-300" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
