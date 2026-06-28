"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { FaCode, FaGlobe, FaBrain, FaMicrochip } from "react-icons/fa";

const categories = [
    {
        title: "Programming",
        icon: FaCode,
        color: "from-purple-500 to-violet-600",
        accent: "#a78bfa",
        skills: ["Java", "C", "Python", "JavaScript", "HTML", "CSS"],
    },
    {
        title: "Web & Backend",
        icon: FaGlobe,
        color: "from-cyan-500 to-blue-600",
        accent: "#22d3ee",
        skills: ["Node.js", "Express", "MongoDB", "REST APIs", "React", "Next.js", "Git / GitHub"],
    },
    {
        title: "AI & ML",
        icon: FaBrain,
        color: "from-pink-500 to-rose-600",
        accent: "#f472b6",
        skills: ["Sentiment Analysis", "NLP", "LLM Integration", "Whisper (ASR)", "ML Basics"],
    },
    {
        title: "IoT",
        icon: FaMicrochip,
        color: "from-emerald-500 to-teal-600",
        accent: "#34d399",
        skills: ["ESP8266", "LoRa SX1278", "DHT11 / Sensors", "Blynk", "ThingSpeak"],
    },
];

export default function Skills() {
    return (
        <SectionWrapper id="skills">
            <SectionTitle
                title="Skills & Tech"
                subtitle="A constantly evolving toolkit built for modern AI, IoT, and full-stack engineering."
            />

            <div className="grid sm:grid-cols-2 gap-6">
                {categories.map((cat, ci) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.15, duration: 0.5 }}
                        whileHover={{ y: -4 }}
                        className="glass-card p-6 sm:p-8"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white`}
                            >
                                <cat.icon size={18} />
                            </div>
                            <h3
                                className="text-lg font-semibold text-white"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                                {cat.title}
                            </h3>
                        </div>

                        {/* Skill Badges */}
                        <div className="flex flex-wrap gap-2.5">
                            {cat.skills.map((skill, si) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: ci * 0.1 + si * 0.05,
                                        duration: 0.35,
                                        ease: "easeOut",
                                    }}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    className="px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-colors"
                                    style={{
                                        background: `${cat.accent}15`,
                                        color: cat.accent,
                                        border: `1px solid ${cat.accent}30`,
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
