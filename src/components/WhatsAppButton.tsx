"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* Hover Tooltip */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-surface-card border border-white/10 text-xs font-semibold text-gold-300 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>

      <a
        href="https://wa.me/918281082489"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-2xl shadow-emerald-500/30 hover:scale-110 hover:shadow-emerald-500/50 transition-all duration-300"
      >
        {/* Pulse Ripple */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-400 opacity-75 animate-ping" />
        <MessageCircle className="text-background" size={28} />
      </a>
    </motion.div>
  );
}
