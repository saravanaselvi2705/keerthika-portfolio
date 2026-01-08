"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
};

export default function ProjectCard({ title, category, image }: ProjectCardProps) {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden cursor-pointer"
        >
            <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative aspect-[4/5] overflow-hidden bg-white/5 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-white/10"
            >
                <motion.div
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full relative"
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-mono tracking-widest text-[#25d366] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0 delay-75">
                        {category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-[#25d366] transition-colors">{title}</h3>
                </div>
            </motion.div>
        </motion.div>
    );
}
