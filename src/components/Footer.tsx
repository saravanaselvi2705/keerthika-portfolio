"use client";

import { ArrowUp, Mail, Phone, MapPin, Instagram, Linkedin, Dribbble, Sparkles, MessageSquare } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const servicesList = [
  "Brand Identity Systems",
  "Logo & Visual Marks",
  "Social Media Creatives",
  "Product Packaging",
  "Luxury Business Cards",
  "Brochure & Editorial Print",
  "Vector Illustration",
];

const socialLinks = [
  { name: "Behance", icon: Sparkles, href: "https://behance.net" },
  { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "WhatsApp", icon: MessageSquare, href: "https://wa.me/918281082489" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#06070A] text-foreground border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-background font-serif font-bold text-xl shadow-lg">
                K
              </div>
              <span className="text-xl font-serif font-bold tracking-wider text-foreground">
                KEERTHIKA<span className="text-gold-400">.</span>
              </span>
            </a>

            <p className="text-xs text-muted leading-relaxed max-w-sm">
              Senior Brand & Graphic Designer based in Kozhikode, Kerala. Crafting visual identities, social media creatives, premium packaging, print design, and custom vector artwork.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-gold-400 hover:border-gold-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Navigation Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-xs text-muted hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Services Offered
            </h3>
            <ul className="space-y-2.5">
              {servicesList.map((svc) => (
                <li key={svc} className="text-xs text-muted">
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-muted">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold-400 flex-shrink-0" />
                <span className="truncate">keerthika2306@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold-400 flex-shrink-0" />
                <span>+91 82810 82489</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-gold-400 flex-shrink-0" />
                <span>Kozhikode, Kerala</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar, Powered By & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted text-center sm:text-left">
            © {new Date().getFullYear()} Keerthika Portfolio. All rights reserved. • <span className="text-gold-400 font-semibold">Powered by Creovixstack</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-white/10 hover:border-gold-400 text-xs font-semibold text-foreground hover:text-gold-400 transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-gold-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
