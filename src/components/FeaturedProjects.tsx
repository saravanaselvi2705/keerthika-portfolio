"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, X, ArrowUpRight, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  category: "Brand Identity" | "Social Media" | "Packaging Design" | "Print & Illustration" | "Key Visuals";
  description: string;
  image: string;
  additionalImages?: string[]; // Added gallery asset support
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
    id: "corporate-brand-identity",
    title: "Corporate Identity & Merchandise Ecosystem",
    category: "Brand Identity",
    description: "Complete visual identity guidelines, corporate apparel, executive stationery, and brand collateral systems.",
    image: "/images/portfolio/corporate-branding/corporate-branding.png",
    additionalImages: [
      "/images/portfolio/corporate-branding/image1.jpeg",
      "/images/portfolio/corporate-branding/image2.jpeg",
      "/images/portfolio/corporate-branding/image3.jpeg",
      "/images/portfolio/corporate-branding/image4.jpeg",
      "/images/portfolio/corporate-branding/branding-5.jpeg",
      "/images/portfolio/corporate-branding/branding-6.jpeg",
      "/images/portfolio/corporate-branding/branding-7.jpeg",
      "/images/portfolio/corporate-branding/branding-8.jpeg",
      "/images/portfolio/corporate-branding/branding-9.jpeg",
      "/images/portfolio/corporate-branding/branding-10.jpeg",
      "/images/portfolio/corporate-branding/branding-11.jpeg",
      "/images/portfolio/corporate-branding/branding-12.jpeg",
      "/images/portfolio/corporate-branding/branding-13.jpeg",
      "/images/portfolio/corporate-branding/branding-14.jpeg"
    ],
    tags: ["Logo System", "Corporate Identity", "Merchandise", "Brand Guidelines"],
    overview: "Full-scale corporate identity development for tech and service brands across physical, digital, and outdoor media.",
    challenge: "Building brand systems that scale seamlessly from 32px digital favicons to 40-foot outdoor highway billboards.",
    process: "Developed minimalist logomarks with strict clear-space formulas, consistent merchandise applications, and executive stationery.",
    deliverables: ["Billboard Art", "Lanyards & ID Kits", "Company Apparel", "Stationery"],
    results: "Successfully launched 3 corporate brand systems with complete visual guidelines and cross-medium consistency.",
    client: "AidMak, HOSFACE & Spinvic",
    year: "2025"
  },
  {
    id: "wise-talkies-campaign",
    title: "Wise Talkies – Global Media Campaign & Tour Art",
    category: "Social Media",
    description: "High-impact event promotional key visuals, celebrity tour posters, and interactive course brochures.",
    image: "/images/portfolio/wisetalkies-suite/wisetalkies-suite.png",
    additionalImages: [
      "/images/portfolio/wisetalkies-suite/Image1.jpeg",
      "/images/portfolio/wisetalkies-suite/image2.jpeg",
      "/images/portfolio/wisetalkies-suite/image3.jpeg",
      "/images/portfolio/wisetalkies-suite/image4.jpeg",
      "/images/portfolio/wisetalkies-suite/image5.jpeg",
      "/images/portfolio/wisetalkies-suite/image6.jpeg",
      "/images/portfolio/wisetalkies-suite/image7.jpeg",
      "/images/portfolio/wisetalkies-suite/image8.jpeg",
      "/images/portfolio/wisetalkies-suite/image9.jpeg",
      "/images/portfolio/wisetalkies-suite/image10.jpeg"
    ],
    tags: ["Poster Design", "Social Media Kits", "Print Media", "Key Visuals"],
    overview: "End-to-end design production for the Wise Talkies learning ecosystem featuring masterclasses and international event tours.",
    challenge: "Coordinating multi-format deliverables spanning folded brochures, print newspapers, and stage posters under tight deadlines.",
    process: "Engineered a high-contrast dark aesthetic with vibrant cyan and emerald accents for strong shelf and screen recall.",
    deliverables: ["Tour Posters", "Course Guides", "Press Releases", "Print Brochures"],
    results: "Distributed across 420+ colleges with high engagement rates.",
    client: "Talrop / Wonderwall Entertainment",
    year: "2026"
  },
  {
    id: "redbolt-ecommerce",
    title: "Redbolt Luggage – E-Commerce & Festive Ads",
    category: "Packaging Design",
    description: "Festival sales promotional campaign, digital storefront visuals, and product presentation layouts.",
    image: "/images/portfolio/ecom-rebolt/ecom-redbolt.png",
    additionalImages: [
      "/images/portfolio/ecom-rebolt/rebolt-1.jpeg",
      "/images/portfolio/ecom-rebolt/rebolt-2.jpeg",
      "/images/portfolio/ecom-rebolt/rebolt-3.jpeg",
      "/images/portfolio/ecom-rebolt/rebolt-4.jpeg",
      "/images/portfolio/ecom-rebolt/rebolt-5.jpeg",
      "/images/portfolio/ecom-rebolt/rebolt-6.jpeg",
      "/images/portfolio/ecom-rebolt/rebolt-7.jpeg"
    ],
    tags: ["Product Showcase", "E-Commerce", "Ad Creatives", "Retail Assets"],
    overview: "Festival sales promotional campaign and digital storefront visuals for ergonomic backpacks and luggage.",
    challenge: "Highlighting functional bag storage utility and festival sale value propositions simultaneously without clutter.",
    process: "Created playful line illustrations paired with bright contrast cards and clean studio photography cutouts.",
    deliverables: ["Festive Ad Creatives", "Product Visuals", "Feature Breakdowns"],
    results: "Achieved a 3.2x campaign engagement surge during seasonal sales.",
    client: "Redbolt Luggage & Travel Gear",
    year: "2025"
  },
  {
    id: "fine-art-portraits",
    title: "Handcrafted Fine Art & Realistic Commissions",
    category: "Print & Illustration",
    description: "Classical charcoal portraits, realistic color-pencil studies, and geometric line compositions.",
    image: "/images/portfolio/fine-arts/fine-art-portraits.png",
    additionalImages: [
      "/images/portfolio/fine-arts/image5.jpeg",
      "/images/portfolio/fine-arts/image6.jpeg"
    ],
    tags: ["Classical Art", "Portraiture", "Handcrafted", "Ink & Charcoal"],
    overview: "Series of private fine art commissions executing classical hyperrealistic portraiture and ink line studies.",
    challenge: "Capturing emotional depth and likeness across varied mediums including charcoal, color pencil, and ink.",
    process: "Leveraged mathematical facial proportion grids combined with classical Renaissance shading techniques.",
    deliverables: ["Charcoal on Canvas", "Colored Pencil Studies", "Minimalist Ink"],
    results: "Delivered 15+ commissioned original artworks to private collectors.",
    client: "Private Art Commissions",
    year: "2024"
  },
  {
    id: "talrop-stationery-conclave",
    title: "Edu-Tech Conclave Collateral & Stationery",
    category: "Packaging Design",
    description: "Event entry passes, eco-kraft shopping bags, business cards, and official press kit collateral.",
    image: "/images/portfolio/corporate-stationary/corporate-stationery.png",
    additionalImages: [
      "/images/portfolio/corporate-stationary/img1.jpeg",
      "/images/portfolio/corporate-stationary/img2.jpeg",
      "/images/portfolio/corporate-stationary/img3.jpeg",
      "/images/portfolio/corporate-stationary/img4.jpeg"
    ],
    tags: ["Event Kit", "Print Prepress", "Bag Dieline", "Corporate Stationery"],
    overview: "Comprehensive print collateral package for international executive conclaves and tech park launches.",
    challenge: "Strict color-matching requirements across textured kraft paper, gloss cardstock, and fabric lanyard ribbons.",
    process: "Configured unified spot-color CMYK profiles with QR-integrated security passes and die-cut bags.",
    deliverables: ["Security Passes", "Eco Kraft Bag", "Spot UV Cards", "Press Kit"],
    results: "Produced for 1,000+ conclave delegates with pristine print execution and zero color mismatch.",
    client: "Talrop Techies Park",
    year: "2025"
  },
  {
    id: "masterclass-director-series",
    title: "Masterclass Director Key Art & OTT Media",
    category: "Key Visuals",
    description: "Cinematic lighting layouts, digital thumbnails, promotional director banners, and OTT campaign visuals.",
    image: "/images/portfolio/masterclass-keyart.png",
    additionalImages: [],
    tags: ["Key Visuals", "Streaming Art", "Film Media", "Thumbnail Design"],
    overview: "Visual hierarchy and promotional creative suite honoring national award-winning filmmakers and artists.",
    challenge: "Harmonizing photography from distinct live sets and production eras into a unified visual standard.",
    process: "Developed warm ambient backlighting formulas and clean lower-third typographic identity ribbons.",
    deliverables: ["Director Banner Suite", "OTT Thumbnails", "Social Teasers", "Key Art"],
    results: "Achieved 100k+ digital views across streaming and academy promotional channels.",
    client: "Talrop Digital Academy",
    year: "2025"
  }
];

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = ["All", "Brand Identity", "Social Media", "Packaging Design", "Print & Illustration", "Key Visuals"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory || p.tags.some(t => t.toLowerCase() === selectedCategory.toLowerCase()));

  const handleOpenModal = (project: Project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const allModalImages = activeProject ? [activeProject.image, ...(activeProject.additionalImages || [])] : [];

  return (
    <section id="portfolio" className="py-24 bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Works
          </h2>
          <div className="h-1 w-16 bg-[#FD6F00] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#A1A1AA] text-sm sm:text-base">
            High-impact brand identity systems, digital campaigns, packaging dielines, and visual art.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${selectedCategory === cat
                ? "bg-[#FD6F00] text-white shadow-[0_0_20px_rgba(253,111,0,0.4)] scale-105"
                : "bg-[#18181B] text-[#A1A1AA] border border-white/10 hover:text-white hover:border-white/30"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-[#141414] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#FD6F00]/70 hover:shadow-[0_0_30px_rgba(253,111,0,0.18)]"
            >
              {/* Standout Featured Image Display */}
              <div className="relative w-full h-64 sm:h-72 bg-[#101010] border-b border-white/5 overflow-hidden flex items-center justify-center p-0">
                <div className="relative w-full h-full transform-gpu transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover" // <--- Change object-contain to object-cover here
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD6F00] text-white text-xs font-bold shadow-lg">
                    <Eye size={14} /> Quick View
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#FD6F00] bg-[#FD6F00]/15 px-3 py-1 rounded-full border border-[#FD6F00]/30">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#71717A]">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#FD6F00] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-white/5 border border-white/5 text-[#A1A1AA] text-[11px] px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#FD6F00] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Project <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Modal Gallery Carousel View */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-white/10 bg-[#161616] shadow-2xl overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1c1c1c]">
                <span className="text-xs font-semibold text-[#FD6F00] bg-[#FD6F00]/15 px-3 py-1 rounded-full">
                  {activeProject.category}
                </span>
                <button
                  onClick={() => setActiveProject(null)}
                  className="size-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scroll Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar">

                {/* Active Preview Image */}
                <div className="relative w-full h-72 sm:h-96 md:h-[430px] bg-[#0a0a0a] rounded-xl border border-white/5 flex items-center justify-center p-4 overflow-hidden group">
                  <div className="relative w-full h-full">
                    <Image
                      src={allModalImages[activeImageIndex] || activeProject.image}
                      alt={activeProject.title}
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  {/* Previous / Next Arrow Controls */}
                  {allModalImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : allModalImages.length - 1));
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/75 hover:bg-[#FD6F00] text-white flex items-center justify-center border border-white/20 transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={22} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev < allModalImages.length - 1 ? prev + 1 : 0));
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/75 hover:bg-[#FD6F00] text-white flex items-center justify-center border border-white/20 transition-all duration-200 hover:scale-110 shadow-lg backdrop-blur-sm z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight size={22} />
                      </button>

                      {/* Image Counter Badge */}
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-white/90 border border-white/10 z-10">
                        {activeImageIndex + 1} / {allModalImages.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Horizontal Scrolling Gallery Carousel */}
                {allModalImages.length > 1 && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider block">
                      Campaign Asset Gallery ({allModalImages.length} items)
                    </span>
                    <div className="flex items-center gap-4 overflow-x-auto pb-3 pt-1 px-1 custom-scrollbar scroll-smooth">
                      {allModalImages.map((imgSrc, idx) => (
                        <div
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-36 sm:w-44 aspect-[4/3] rounded-xl overflow-hidden shrink-0 cursor-pointer border transition-all duration-300 bg-[#0d0d0d] group ${activeImageIndex === idx
                            ? "border-[#FD6F00] shadow-[0_0_15px_rgba(253,111,0,0.4)] scale-102"
                            : "border-white/10 opacity-70 hover:opacity-100 hover:border-white/30"
                            }`}
                        >
                          <Image
                            src={imgSrc}
                            alt={`Gallery asset ${idx + 1}`}
                            fill
                            unoptimized
                            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute bottom-1.5 right-1.5 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-mono text-white">
                            0{idx + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Meta details */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-6 text-xs text-[#A1A1AA] font-mono">
                    <span className="flex items-center gap-1.5"><User size={14} className="text-[#FD6F00]" /> Client: <strong className="text-white font-sans">{activeProject.client}</strong></span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#FD6F00]" /> Year: <strong className="text-white font-sans">{activeProject.year}</strong></span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{activeProject.title}</h3>
                  <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">{activeProject.overview}</p>
                </div>

                {/* Challenge & Process */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <h4 className="text-xs uppercase font-mono text-[#FD6F00] font-bold mb-2">The Challenge</h4>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">{activeProject.challenge}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <h4 className="text-xs uppercase font-mono text-[#FD6F00] font-bold mb-2">The Process</h4>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">{activeProject.process}</p>
                  </div>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  <span className="text-xs text-[#71717A] font-mono mr-2 self-center">Deliverables:</span>
                  {activeProject.deliverables.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white">
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}