"use client";

import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/keerthikamskani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: Instagram, href: "https://instagram.com/_art_dreamer" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-charcoal px-6 md:px-20 py-24 border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#25d366]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left Column: Info */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Let&apos;s Create <br />
                            <span className="text-white/40">Something Bold.</span>
                        </h2>
                        <p className="text-white/50 max-w-md mb-12 text-lg leading-relaxed">
                            Whether you&apos;re looking for a brand identity, motion graphics, or a custom art commission,
                            I&apos;m here to bring your vision to life.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group cursor-pointer">
                                <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-[#25d366] group-hover:text-black transition-all">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <a href="tel:+918281082489" className="block text-sm">+91 828 108 2489</a>
                                    <a href="tel:+917708976625" className="block text-sm">+91 770 897 6625</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group cursor-pointer">
                                <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-[#25d366] group-hover:text-black transition-all">
                                    <Mail size={18} />
                                </div>
                                <a href="mailto:keerthika2396@gmail.com" className="text-sm">keerthika2396@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4 text-white/70 group">
                                <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-[#25d366] group-hover:text-black transition-all">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-sm">Munnar, Idukki, Kerala - 685612.</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {socialLinks.map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-full"
                            >
                                <social.icon size={20} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="flex flex-col justify-center">
                    <ContactForm />
                </div>
            </div>

            <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 uppercase tracking-widest gap-4">
                <span>© 2025 Keerthika S.</span>
                <span>Design & Development</span>
            </div>
        </footer>
    );
}
