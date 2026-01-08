"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// PLACEHOLDER: Paste your Google Apps Script Web App URL here
const GOOGLE_SCRIPT_URL = "PLACEHOLDER_URL";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
            alert("Please fill in Name and Email.");
            return;
        }

        setStatus("SENDING");

        try {
            // Using FormData for Google Apps Script compatibility
            const data = new FormData();
            data.append("name", formData.name);
            data.append("phone", formData.phone);
            data.append("email", formData.email);
            data.append("message", formData.message);

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: data,
                mode: "no-cors", // Important for Google Script
            });

            setStatus("SUCCESS");
            setFormData({ name: "", phone: "", email: "", message: "" });

            // Reset status after 5 seconds
            setTimeout(() => setStatus("IDLE"), 5000);

        } catch (error) {
            console.error("Submission error", error);
            setStatus("ERROR");
        }
    };

    return (
        <div className="w-full max-w-md bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-serif font-bold mb-6">Start a Project</h3>

            <AnimatePresence mode="wait">
                {status === "SUCCESS" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                    >
                        <CheckCircle2 size={48} className="text-[#25d366] mb-4" />
                        <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                        <p className="text-white/60">I&apos;ll get back to you within 24 hours.</p>
                        <button
                            onClick={() => setStatus("IDLE")}
                            className="mt-6 text-sm underline text-white/40 hover:text-white"
                        >
                            Send another
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Tell me about the project..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20 resize-none"
                            />
                        </div>

                        {status === "ERROR" && (
                            <div className="flex items-center gap-2 text-red-400 text-xs">
                                <AlertCircle size={14} />
                                <span>Something went wrong. Please check your URL or connection.</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "SENDING"}
                            className="w-full bg-white text-black font-semibold py-4 hover:bg-white/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "SENDING" ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" /> Sending...
                                </>
                            ) : (
                                "Send Enquiry"
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
