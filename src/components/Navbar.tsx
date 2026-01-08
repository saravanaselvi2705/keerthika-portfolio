"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/keerthikamskani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: Instagram, href: "https://instagram.com/_art_dreamer" },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex items-center justify-between"
        >
            <Link href="/" className="text-2xl font-serif font-bold tracking-tighter">
                KEERTHIKA S
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium hover:text-white/70 transition-colors uppercase tracking-widest"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                {socialLinks.map((social, i) => (
                    <Link
                        key={i}
                        href={social.href}
                        target="_blank"
                        className="text-white/60 hover:text-white transition-colors"
                    >
                        <social.icon size={20} />
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
