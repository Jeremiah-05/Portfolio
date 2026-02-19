"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

const roles = [
    "Building Intelligent Systems for Real-World Impact",
    "Crafting AI-Powered Solutions at Scale",
    "Engineering the Future with IoT & Cloud",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayText === current) {
            timeout = setTimeout(() => setIsDeleting(true), 2500);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else if (isDeleting) {
            timeout = setTimeout(
                () => setDisplayText(current.slice(0, displayText.length - 1)),
                30
            );
        } else {
            timeout = setTimeout(
                () => setDisplayText(current.slice(0, displayText.length + 1)),
                60
            );
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 hero-grid" />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[200px]" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Open to Opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    <span className="gradient-text">Jeremiah </span>
                    <span className="text-white">J</span>
                </motion.h1>

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg sm:text-xl text-gray-400 font-medium mb-6"
                >
                    AI &amp; IoT Developer &nbsp;·&nbsp; Full Stack Engineer
                </motion.p>

                {/* Typewriter tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="h-10 sm:h-12 flex items-center justify-center mb-10"
                >
                    <p className="text-base sm:text-xl text-cyan-400/80 font-light">
                        {displayText}
                        <span className="inline-block w-[2px] h-5 sm:h-6 bg-cyan-400 ml-1 animate-pulse" />
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-base hover:opacity-90 transition-all hover:scale-105 active:scale-95"
                    >
                        View Projects
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-gray-300 font-medium text-base hover:bg-white/5 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
                    >
                        <FaEnvelope size={14} />
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator - positioned relative to section, not content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-purple-400"
                    />
                </div>
            </motion.div>
        </section>
    );
}
