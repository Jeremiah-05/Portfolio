"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { FaRocket, FaServer, FaBrain, FaMapMarkerAlt, FaGraduationCap, FaUniversity } from "react-icons/fa";

const highlights = [
    { icon: FaBrain, label: "AI & ML Systems" },
    { icon: FaServer, label: "Full Stack Development" },
    { icon: FaRocket, label: "Production Deployed" },
    { icon: FaMapMarkerAlt, label: "IoT Solutions" },
];

export default function About() {
    return (
        <SectionWrapper id="about">
            <SectionTitle
                title="About Me"
                subtitle="Engineering intelligent solutions at the intersection of AI, IoT, and modern web technologies."
            />

            <div className="grid md:grid-cols-5 gap-8 items-start">
                {/* Bio card */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className="md:col-span-3 glass-card p-8 sm:p-10"
                >
                    <div className="space-y-5 text-gray-300 leading-relaxed text-base sm:text-lg">
                        <p>
                            I&rsquo;m <span className="text-white font-semibold">Jeremiah J</span>, a{" "}
                            <span className="text-purple-400">B.Tech CSE student</span>{" "}
                            at{" "}
                            <span className="text-white font-medium">Karunya Institute of Technology and Sciences</span>,{" "}
                            focused on building <span className="text-cyan-400">AI-powered systems</span> and{" "}
                            <span className="text-cyan-400">real-time IoT solutions</span>.
                        </p>
                        <p>
                            Currently, I&rsquo;m developing scalable backend systems and intelligent automation tools, including a deployed AI CRM (LeadSync) and a LoRa-based landslide detection system for early disaster warning.
                        </p>
                        <p>
                            I specialize in combining AI + real-world systems to create practical, production-ready solutions. I focus on building scalable and production-ready systems.
                        </p>

                        <div className="pt-4 space-y-2">
                            <h4 className="text-white font-semibold text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>💡 Key Strengths</h4>
                            <ul className="list-disc pl-5 text-gray-400 space-y-1 text-base">
                                <li>Building production-ready full-stack systems</li>
                                <li>Integrating AI into real-world applications</li>
                                <li>Designing IoT systems with real-time data pipelines</li>
                                <li>Fast learner with strong problem-solving mindset</li>
                            </ul>
                        </div>

                        {/* Education info */}
                        <div className="flex flex-wrap gap-4 pt-3">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <FaGraduationCap className="text-purple-400" size={14} />
                                <span>B.Tech CSE</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <FaUniversity className="text-cyan-400" size={14} />
                                <span>Karunya Institute of Technology</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Highlight cards */}
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className="glass-card p-5 flex flex-col items-center justify-center text-center gap-3 group cursor-default"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                <item.icon size={22} />
                            </div>
                            <span className="text-sm font-medium text-gray-300">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
