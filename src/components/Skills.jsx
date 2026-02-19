"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { FaCode, FaGlobe, FaBrain, FaMicrochip } from "react-icons/fa";

const categories = [
    {
        title: "Programming",
        icon: FaCode,
        color: "from-purple-500 to-violet-600",
        skills: [
            { name: "Java", level: 85 },
            { name: "C", level: 75 },
            { name: "Python", level: 90 },
            { name: "JavaScript", level: 88 },
        ],
    },
    {
        title: "Web & Backend",
        icon: FaGlobe,
        color: "from-cyan-500 to-blue-600",
        skills: [
            { name: "Node.js", level: 88 },
            { name: "Express", level: 85 },
            { name: "MongoDB", level: 82 },
            { name: "REST APIs", level: 90 },
            { name: "Git / GitHub", level: 85 },
        ],
    },
    {
        title: "AI & ML",
        icon: FaBrain,
        color: "from-pink-500 to-rose-600",
        skills: [
            { name: "Sentiment Analysis", level: 80 },
            { name: "NLP", level: 78 },
            { name: "LLM Integration", level: 82 },
            { name: "Whisper (ASR)", level: 75 },
            { name: "ML Basics", level: 70 },
        ],
    },
    {
        title: "IoT",
        icon: FaMicrochip,
        color: "from-emerald-500 to-teal-600",
        skills: [
            { name: "ESP8266", level: 85 },
            { name: "LoRa SX1278", level: 80 },
            { name: "DHT11 / Sensors", level: 88 },
            { name: "Blynk", level: 78 },
            { name: "ThingSpeak", level: 75 },
        ],
    },
];

function ProgressBar({ name, level, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="space-y-1.5">
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300 font-medium">{name}</span>
                <span className="text-xs text-gray-500">{level}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1.2, delay: delay * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                />
            </div>
        </div>
    );
}

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

                        {/* Skills */}
                        <div className="space-y-4">
                            {cat.skills.map((skill, si) => (
                                <ProgressBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    delay={si}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
