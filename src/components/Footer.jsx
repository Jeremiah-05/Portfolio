"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Jeremiah-05", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/jeremiah-j-731241292/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:jeremiahj7162@gmail.com", label: "Email" },

];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[#030308]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs">
                            JJ
                        </div>
                        <span
                            className="text-lg font-semibold"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            Jeremiah J
                        </span>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-colors"
                                aria-label={s.label}
                            >
                                <s.icon size={16} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        © {new Date().getFullYear()} Jeremiah J.
                    </p>
                </div>
            </div>
        </footer>
    );
}
