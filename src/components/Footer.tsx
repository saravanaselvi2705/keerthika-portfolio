"use client";

import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/keerthikamskani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: Instagram, href: "https://instagram.com/_art_dreamer" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-charcoal px-6 md:px-20 py-24 border-t border-white/5">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Let&apos;s Create <br />Something Bold.</h2>
                    <p className="text-white/50 max-w-md mb-12 text-lg">
                        Whether you&apos;re looking for a brand identity, motion graphics, or a custom art commission,
                        I&apos;m here to bring your vision to life.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                            <Phone size={20} />
                            <a href="tel:+918281082489">+91 828 108 2489</a>
                            <span className="text-white/20">/</span>
                            <a href="tel:+917708976625">+91 770 897 6625</a>
                        </div>
                        <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                            <Mail size={20} />
                            <a href="mailto:keerthika2396@gmail.com">keerthika2396@gmail.com</a>
                        </div>
                        <div className="flex items-start gap-4 text-white/70">
                            <MapPin size={20} className="mt-1" />
                            <span>Munnar, Idukki, <br />Kerala - 685612.</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                    <div className="flex gap-6 mb-12 md:mb-0">
                        {socialLinks.map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            >
                                <social.icon size={20} />
                            </Link>
                        ))}
                    </div>

                    <div className="text-right">
                        <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-2 font-mono">Design & Development</div>
                        <div className="text-sm font-serif font-bold italic">© 2025 Keerthika S. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
