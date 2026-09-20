"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Capabilities } from "@/components/Capabilities"
import { PortfolioShowcase } from "@/components/PortfolioShowcase"
import { Experience } from "@/components/Experience"
import { ContactSection } from "@/components/ContactSection"
import { ContactFooter } from "@/components/ContactFooter"
import { ProjectModal } from "@/components/ProjectModal"
import { Project } from "@/src/data/portfolio"

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main id="top" className="min-h-screen bg-[#121212] text-white selection:bg-[#FD6F00] selection:text-white">
      {/* Brand Header & Centered Navigation with Radiant Orange Dot */}
      <Navbar />

      {/* Hero Section: Left Bio/Stats & Right Featured Creative Showcase */}
      <Hero />

      {/* Services / Capabilities Section: 4 #1E1E1E Cards */}
      <Capabilities />

      {/* Selected Portfolio Works Grid with Orange Glow & Modal Trigger */}
      <PortfolioShowcase onSelectProject={(project) => setSelectedProject(project)} />

      {/* Work Trajectory & Academic Background */}
      <Experience />

      {/* 2-Column Contact Section with Integrated Form */}
      <ContactSection />

      {/* Clean Footer Bar */}
      <ContactFooter />

      {/* Case Study Details Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  )
}
