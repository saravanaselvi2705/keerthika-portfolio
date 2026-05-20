import { Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-xl font-bold tracking-tight text-charcoal mb-2">
              Dev<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted">
              Built with Next.js & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium text-muted hover:text-charcoal transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-muted hover:text-charcoal transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-muted hover:text-charcoal transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted hover:text-charcoal transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted hover:text-charcoal transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted hover:text-charcoal transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for performance.</p>
        </div>
      </div>
    </footer>
  );
}
