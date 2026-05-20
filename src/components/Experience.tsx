"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    description: "Lead developer for a high-traffic SaaS platform. Architected the transition from a monolithic backend to microservices, improving system reliability by 40%.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "Creative Digital Agency",
    duration: "2019 - 2021",
    description: "Developed modern, responsive web applications for enterprise clients. Mentored junior developers and introduced strict typing with TypeScript across all new projects.",
    technologies: ["React", "Redux", "Tailwind CSS", "GraphQL"],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "StartUp Solutions",
    duration: "2017 - 2019",
    description: "Built and maintained the core company product. Improved frontend loading performance by implementing code splitting and lazy loading.",
    technologies: ["JavaScript", "React", "Express", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-charcoal">{exp.role}</h3>
                  <p className="text-lg font-medium text-accent">{exp.company}</p>
                </div>
                <div className="text-sm font-medium text-muted bg-gray-50 px-3 py-1 rounded-full self-start md:self-auto">
                  {exp.duration}
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-6">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-charcoal bg-gray-100 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
