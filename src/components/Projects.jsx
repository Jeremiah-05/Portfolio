"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import {
    FaBrain,
    FaComments,
    FaTelegram,
    FaInstagram,
    FaRocket,
    FaCloud,
    FaMountain,
    FaExclamationTriangle,
    FaSatelliteDish,
    FaMobileAlt,
    FaExternalLinkAlt,
    FaGithub,
    FaRobot,
    FaBolt,
    FaArrowRight,
} from "react-icons/fa";

const projects = [
    {
        title: "LeadSync CRM – AI Smart Inbox",
        description:
            "An AI-powered CRM platform that transforms how businesses handle inbound leads with real-time messaging across Telegram and Instagram.",
        features: [
            { icon: FaBrain, text: "AI sentiment scoring (-5 to +5) using Groq Llama-8b" },
            { icon: FaComments, text: "Automatic intent detection (ORDERING, SUPPORT, INQUIRY)" },
            { icon: FaRocket, text: "Reduced manual response effort by ~60% (simulated testing)" },
            { icon: FaTelegram, text: "Microservices backend handling concurrent conversations" },
        ],
        tech: [
            "Node.js",
            "Express",
            "MongoDB",
            "Groq Llama-8b",
            "React",
            "Vercel",
            "Railway",
        ],
        gradient: "from-purple-600/20 to-violet-600/20",
        borderColor: "border-purple-500/20",
        accentColor: "text-purple-400",
        impact: "Microservices-based backend with REST APIs and real-time event handling",
        live: "https://leadsync.vercel.app",
        github: "https://github.com/Jeremiah-05/LeadSync",
    },
    {
        title: "IoT-Based Landslide Detection System",
        description:
            "A life-saving early warning system monitoring environmental conditions using IoT sensors with long-range communication.",
        features: [
            { icon: FaMountain, text: "Real-time soil moisture, rain & vibration monitoring" },
            { icon: FaRocket, text: "Achieved real-time alert latency under 3 seconds" },
            { icon: FaSatelliteDish, text: "Long-range communication (~2–5 km using LoRa)" },
            { icon: FaCloud, text: "Designed for rural deployment with low-power communication" },
        ],
        tech: [
            "ESP8266",
            "LoRa SX1278",
            "DHT11",
            "ThingSpeak",
            "Blynk",
            "C++",
            "Arduino",
        ],
        gradient: "from-cyan-600/20 to-teal-600/20",
        borderColor: "border-cyan-500/20",
        accentColor: "text-cyan-400",
        impact: "Achieved real-time alert latency under 3 seconds for rural disaster warning",
        live: "#",
        github: "https://github.com/Jeremiah-05/IoT-Landslide-Detection",
    },
];

/* ─── Currently Working On Data ─── */
const focuses = [
    {
        icon: FaRobot,
        title: "Scaling LeadSync CRM",
        description:
            "Enhancing LeadSync CRM with better AI automation for intelligent lead qualification and real-time messaging.",
        status: "Active Development",
        gradient: "from-purple-500 to-violet-600",
    },
    {
        icon: FaComments,
        title: "Advanced LLM Integrations",
        description:
            "Exploring and integrating advanced Large Language Models into real-time systems for smarter data processing.",
        status: "Research & Building",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        icon: FaBolt,
        title: "Full-Stack Systems",
        description:
            "Building more scalable, production-ready full-stack applications to solve real-world problems.",
        status: "Continuous",
        gradient: "from-pink-500 to-rose-600",
    },
];

export default function Projects() {
    return (
        <SectionWrapper id="projects">
            <SectionTitle
                title="Featured Projects"
                subtitle="High-impact projects built with production-grade engineering and real-world deployment."
            />

            <div className="space-y-8">
                {projects.map((project, pi) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pi * 0.2, duration: 0.6 }}
                        className={`glass-card overflow-hidden group`}
                    >
                        {/* Top gradient accent */}
                        <div className={`h-1 bg-gradient-to-r ${project.gradient.replace('/20', '')}`} />

                        <div className="p-6 sm:p-10">
                            {/* Title */}
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                <h3
                                    className="text-2xl sm:text-3xl font-bold text-white"
                                    style={{ fontFamily: "'Outfit', sans-serif" }}
                                >
                                    {project.title}
                                </h3>
                                <div className="flex gap-2">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                                        aria-label="View on GitHub"
                                    >
                                        <FaGithub size={16} />
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        target={project.live !== "#" ? "_blank" : undefined}
                                        rel={project.live !== "#" ? "noopener noreferrer" : undefined}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                                        aria-label="View live"
                                    >
                                        <FaExternalLinkAlt size={14} />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                                {project.description}
                            </p>

                            {/* Features */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {project.features.map((feature, fi) => (
                                    <motion.div
                                        key={fi}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: fi * 0.1 + 0.3, duration: 0.4 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-lg bg-white/5 flex-shrink-0 flex items-center justify-center ${project.accentColor}`}
                                        >
                                            <feature.icon size={14} />
                                        </div>
                                        <span className="text-sm text-gray-300 leading-relaxed pt-1">
                                            {feature.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Tech stack badges */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span key={t} className="tech-badge">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Impact line */}
                            <div className={`flex items-center gap-2 ${project.accentColor} text-sm font-medium`}>
                                <FaExclamationTriangle size={12} />
                                <span>{project.impact}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ─── Currently Working On Section ─── */}
            <div className="mt-20">
                <SectionTitle
                    title="Currently Working On"
                    subtitle="What I'm actively building and exploring — pushing the boundaries of AI and automation."
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {focuses.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            whileHover={{ y: -6 }}
                            className="glass-card p-6 sm:p-8 flex flex-col group relative overflow-hidden"
                        >
                            {/* Background gradient glow */}
                            <div
                                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity`}
                            />

                            {/* Status */}
                            <div className="flex items-center gap-2 mb-5 relative z-10">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs font-medium text-green-400 uppercase tracking-wider">
                                    {item.status}
                                </span>
                            </div>

                            {/* Icon */}
                            <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-5 relative z-10`}
                            >
                                <item.icon size={20} />
                            </div>

                            {/* Content */}
                            <h3
                                className="text-lg font-bold text-white mb-3 relative z-10"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed flex-grow relative z-10">
                                {item.description}
                            </p>

                            {/* Arrow */}
                            <div className="mt-5 flex items-center gap-2 text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                                <span>Learn more</span>
                                <FaArrowRight
                                    size={12}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
