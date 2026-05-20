"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Linkedin, Github, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tight mb-6">
              Let&apos;s build something great together.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-md">
              I&apos;m currently available for freelance projects and full-time opportunities. 
              If you have a project in mind or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center text-charcoal hover:text-accent transition-colors group">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl mr-4 group-hover:bg-blue-50 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted mb-1">Email</div>
                  <div className="font-semibold">hello@example.com</div>
                </div>
              </a>
              
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-charcoal hover:text-accent transition-colors group">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl mr-4 group-hover:bg-blue-50 transition-colors">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted mb-1">WhatsApp</div>
                  <div className="font-semibold">+1 (234) 567-890</div>
                </div>
              </a>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-gray-100">
                <a href="#" className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-full text-muted hover:bg-charcoal hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-full text-muted hover:bg-charcoal hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal mb-6">Send a message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-charcoal text-white rounded-lg font-medium hover:bg-charcoal-light transition-colors flex items-center justify-center group"
                >
                  Send Message
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
