"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, X, ArrowUpRight, CheckCircle2, Layers, Tag } from "lucide-react";
import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  category: "Brand Identity" | "Social Media" | "Packaging Design" | "Print & Illustration";
  description: string;
  image: string;
  tags: string[];
  overview: string;
  challenge: string;
  process: string;
  deliverables: string[];
  results: string;
  client: string;
  year: string;
}

const projects: Project[] = [
  {
    id: "mediaone-branding",
    title: "Mediaone Media — Brand Identity & Guidelines",
    category: "Brand Identity",
    description: "Complete corporate identity system including primary & secondary logo marks, brand equity guidelines, typography hierarchy, and corporate stationary.",
    image: "/project-branding.png",
    tags: ["Logo System", "Brand Guidelines", "Typography System", "Stationery"],
    overview: "Mediaone required a modern, unified visual identity to reflect their growth as a premier digital media agency.",
    challenge: "The brand lacked visual consistency across print, digital channels, and client presentation decks.",
    process: "Developed a clean geometric logo mark paired with bold corporate typography and an authoritative dark-gold color palette.",
    deliverables: [
      "Master Logo & Monogram Assets",
      "Brand Guidelines Manual",
      "Corporate Business Cards & Letterheads",
      "Digital Presentation Suite",
    ],
    results: "Rebrand elevated brand perception, securing 3 major corporate retainers in Q1.",
    client: "Mediaone Media Ltd.",
    year: "2024",
  },
  {
    id: "mediaone-social",
    title: "Mediaone — High-Engagement Social Media Creatives",
    category: "Social Media",
    description: "Strategic Instagram grid layouts, carousel deck templates, and digital advertising campaign graphics.",
    image: "/project-mediaone.png",
    tags: ["Instagram Feed", "Carousel Decks", "Ad Templates", "Social Strategy"],
    overview: "Designing a high-converting social media template system for digital ad campaigns and organic growth.",
    challenge: "Inconsistent ad visual styling was leading to low engagement rates and high customer acquisition costs.",
    process: "Created modular post decks and carousel frameworks emphasizing bold headlines, high contrast, and brand recognition.",
    deliverables: [
      "20+ Editable Social Post Templates",
      "10 Swipeable Carousel Story Layouts",
      "Figma & Canva Master Kits",
      "Ad Creative Best-Practice Guide",
    ],
    results: "Boosted organic social engagement by 280% and reduced social ad acquisition cost by 32%.",
    client: "Mediaone Digital",
    year: "2024",
  },
  {
    id: "hosface-brochure",
    title: "Hosface Care — Medical Brochure & Print Package",
    category: "Print & Illustration",
    description: "Multi-page corporate healthcare brochure with custom vector iconography, patient infographics, and print-ready CMYK specs.",
    image: "/project-hosface.png",
    tags: ["Brochure Layout", "Infographics", "Corporate Print", "Custom Icons"],
    overview: "Comprehensive promotional print brochure showcasing specialized medical services and patient care.",
    challenge: "Formatting complex healthcare procedures into a clean, reassuring, and readable layout.",
    process: "Structured information into clean visual grids with ample white space, custom icons, and soothing color hierarchy.",
    deliverables: [
      "12-Page Tri-Fold Corporate Brochure",
      "Custom Healthcare Icon Set",
      "High-Resolution CMYK Print PDF",
      "Interactive Digital PDF Edition",
    ],
    results: "Distributed across 20+ healthcare centers with excellent feedback from patients and partners.",
    client: "Hosface Care Facilities",
    year: "2023",
  },
  {
    id: "luxury-business-cards",
    title: "Luxury Business Cards & Specialty Print Suite",
    category: "Packaging Design",
    description: "Premium business card layouts featuring specialty gold foil stamping, spot UV accents, and tactile black velvet paper stock.",
    image: "/project-cards.png",
    tags: ["Foil Stamping", "Spot UV", "Stationery Suite", "Print Production"],
    overview: "Designing memorable physical touchpoints for executive networking and brand prestige.",
    challenge: "Achieving flawless metallic foil alignment and crisp typography contrast on dark textured paper.",
    process: "Prepared precision vector foil layer masks and die-cut guidelines for luxury print production.",
    deliverables: [
      "Dual-Sided Business Card Specs",
      "Spot UV & Gold Foil Layer Files",
      "Executive Letterhead & Folder Artwork",
      "Print Supplier Technical Guidelines",
    ],
    results: "Delivered premium tactile branding experience praised by corporate leadership.",
    client: "Executive Client Suite",
    year: "2023",
  },
  {
    id: "vector-arts-illustration",
    title: "Bespoke Vector Illustration & Custom Artwork",
    category: "Print & Illustration",
    description: "Custom vector illustrations, brand iconography, digital art compositions, and ornamental graphic artwork.",
    image: "/project-arts.png",
    tags: ["Vector Art", "Custom Graphics", "Iconography", "Digital Illustration"],
    overview: "Creating unique vector artwork and digital illustrations tailored for brand campaigns and merchandise.",
    challenge: "Designing scalable artwork that retains intricate artistic detail at any scale from mobile screens to billboards.",
    process: "Hand-crafted vector paths with infinite scaling capabilities and clean color layer management.",
    deliverables: [
      "Scalable Vector Files (AI, SVG, EPS)",
      "High-Resolution PNG Assets",
      "Custom Icon Pack",
      "Full Commercial Ownership Rights",
    ],
    results: "Featured across digital marketing campaigns, apparel, and corporate print materials.",
    client: "Creative Studio Client",
    year: "2023",
  },
];

const categories = ["All", "Brand Identity", "Social Media", "Packaging Design", "Print & Illustration"];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Selected Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
            Featured <span className="text-gold-gradient">Design Works</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl text-sm sm:text-base">
            Explore recent real brand identity, social media, packaging, brochure, and custom vector illustration projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-transparent mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-background font-bold shadow-lg shadow-gold-500/20"
                    : "text-muted hover:text-white bg-surface-card border border-white/10"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-surface-card border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:shadow-gold-500/10 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container with Zoom & Hover Overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-6 text-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500 text-background font-semibold text-xs uppercase tracking-wider shadow-lg">
                        <Eye size={14} /> View Case Study
                      </span>
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-surface-card/90 border border-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-gold-300 shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted mb-2">
                      <span>Client: {project.client}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-gold-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags & Action Button */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium text-foreground/70 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-gold-500 hover:text-background hover:border-gold-500 transition-all duration-300 group/btn"
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-surface-card border border-gold-500/30 rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090A0F]/90 backdrop-blur-md border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-muted">Client: {selectedProject.client}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:text-gold-400 hover:border-gold-400 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                
                {/* Banner Image */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                  
                  {/* Overview */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <Layers size={14} /> Project Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>

                  {/* Client Challenge */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <Tag size={14} /> Client Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* Design Process */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <Sparkles size={14} /> Design Process
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      {selectedProject.process}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <CheckCircle2 size={14} /> Final Deliverables
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedProject.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Outcome & Results Callout */}
                <div className="p-6 rounded-2xl bg-gold-500/10 border border-gold-500/30 backdrop-blur-md">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-2">
                    Outcome & Business Results
                  </h4>
                  <p className="text-sm font-serif font-semibold text-white leading-relaxed">
                    &ldquo;{selectedProject.results}&rdquo;
                  </p>
                </div>

                {/* Action CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="text-xs text-muted">
                    Interested in a similar project for your brand?
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-background font-semibold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-gold-500/25 transition-all"
                  >
                    Discuss Your Project
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
