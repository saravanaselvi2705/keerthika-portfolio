"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhatsAppButton() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 group"
        >
            <Link
                href="https://wa.me/917708976625"
                target="_blank"
                className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
                {/* Pulse Effect */}
                <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-75 animate-ping"></span>

                <MessageCircle color="white" size={32} />
            </Link>
        </motion.div>
    );
}
