"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Smile, Trophy } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Projects Completed",
    value: "120+",
    icon: CheckCircle2,
    desc: "Delivered across brand, print & digital",
  },
  {
    id: 2,
    label: "Happy Clients",
    value: "85+",
    icon: Users,
    desc: "Global founders, luxury brands & agencies",
  },
  {
    id: 3,
    label: "Years Experience",
    value: "5+",
    icon: Award,
    desc: "Professional brand identity & graphic craft",
  },
  {
    id: 4,
    label: "Client Satisfaction",
    value: "99%",
    icon: Smile,
    desc: "Repeat clients & 5-star ratings",
  },
  {
    id: 5,
    label: "Design Awards",
    value: "8+",
    icon: Trophy,
    desc: "Packaging & graphic excellence honors",
  },
];

export default function Statistics() {
  return (
    <section className="py-16 bg-[#090A0F] border-t border-b border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-surface-card border border-white/10 hover:border-gold-500/40 transition-all text-center flex flex-col items-center justify-between group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-gold-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-muted">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
