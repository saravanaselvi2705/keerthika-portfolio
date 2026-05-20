"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Python", "NestJS"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose"],
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
            Technical Skills
          </h2>
          <p className="text-muted mt-4 max-w-2xl">
            Technologies I use to build robust and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-charcoal mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background border border-gray-200 text-charcoal text-sm font-medium rounded-lg hover:border-gray-300 transition-colors"
                  >
                    {skill}
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
