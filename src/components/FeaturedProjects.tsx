"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce SaaS Platform",
    description: "A multi-tenant e-commerce platform allowing businesses to create and manage their online stores. Features include inventory management, payment processing, and analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Financial Dashboard Analytics",
    description: "Real-time financial dashboard tracking cryptocurrency portfolios and market trends. Includes interactive charting and automated alert systems.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Redux", "Node.js", "Chart.js", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Developer Documentation Tool",
    description: "An open-source documentation generator that parses markdown files and generates beautiful, searchable, and accessible static sites for developer tooling.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Algolia"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted max-w-2xl text-lg">
            A selection of my recent work, highlighting full-stack capabilities, performance optimization, and clean UI design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-charcoal bg-gray-100 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-charcoal hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1.5" /> Live Preview
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-muted hover:text-charcoal transition-colors"
                  >
                    <Github size={16} className="mr-1.5" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
