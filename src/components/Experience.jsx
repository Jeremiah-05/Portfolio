"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import {
    FaArrowRight,
    FaShieldAlt,
    FaPython,
    FaCode,
    FaLinkedin,
    FaFilePdf,
    FaExternalLinkAlt,
    FaCheckCircle,
    FaReact,
    FaHtml5,
    FaLaptopCode,
    FaMicrochip,
} from "react-icons/fa";

/* ─── Timeline Data (chronological journey) ─── */
const timeline = [
    {
        year: "2022 – 2023",
        icon: FaHtml5,
        title: "Completed the Learning of HTML, CSS and JavaScript",
        subtitle: "Self-Taught",
        description:
            "Within the space of a year I worked on several personal projects which helped to perfect my skills on the rudiment of web development.",
        gradient: "from-orange-500 to-red-500",
        accentColor: "#f97316",
    },
    {
        year: "2023 – 2024",
        icon: FaReact,
        title: "Completed the Learning of React, Firebase and State Managements",
        subtitle: "Self-Taught",
        description:
            "I built on my previous knowledge by learning React.js, Redux, RTK, Context API, React Query, TypeScript for modern frontend development.",
        gradient: "from-cyan-500 to-blue-500",
        accentColor: "#06b6d4",
    },
    {
        year: "2024",
        icon: FaCode,
        title: "Web Development Internship",
        company: "Ediglobe",
        subtitle: "Internship · June 2024 – July 2024",
        description:
            "Built and deployed responsive web applications using modern frontend technologies, gaining hands-on experience in full-stack web development workflows.",
        gradient: "from-green-500 to-emerald-500",
        accentColor: "#10b981",
        certificate: "/Ediglobe-Internship-Certificate.pdf",
        linkedin: "https://www.linkedin.com/in/jeremiah-j-731241292/",
    },
    {
        year: "2025",
        icon: FaPython,
        title: "Python Programming Internship",
        company: "CodeTech IT Solutions",
        subtitle: "Internship · May 2025 – June 2025",
        description:
            "Developed practical skills in Python development, data handling, and building automation scripts for real-world IT solutions.",
        gradient: "from-yellow-500 to-orange-500",
        accentColor: "#f59e0b",
        certificate: "/CodeTech-IT-Solutions-Certificate.pdf",
        linkedin: "https://www.linkedin.com/in/jeremiah-j-731241292/",
    },
    {
        year: "2025",
        icon: FaShieldAlt,
        title: "Cybersecurity Virtual Internship",
        company: "Cisco",
        subtitle: "Internship · June 2025 – October 2025",
        description:
            "Cisco AICTE Virtual Internship Program 2025 — Gained hands-on experience in network security, threat analysis, and cybersecurity frameworks.",
        gradient: "from-blue-500 to-cyan-500",
        accentColor: "#06b6d4",
        certificate: "/Virtual-Internship-Cybersecurity.pdf",
        linkedin: "https://www.linkedin.com/in/jeremiah-j-731241292/",
    },
    {
        year: "2025",
        icon: FaMicrochip,
        title: "Built IoT Landslide Detection System",
        subtitle: "Project · ESP8266 + Blynk + ThingSpeak",
        description:
            "Designed and built a real-time early warning system for landslide-prone slopes with cloud data logging, remote alerts, and sensor-based monitoring.",
        gradient: "from-teal-500 to-cyan-500",
        accentColor: "#14b8a6",
    },
    {
        year: "2025 – Present",
        icon: FaLaptopCode,
        title: "Building LeadSync CRM & Full-Stack Systems",
        subtitle: "Active Development",
        description:
            "Developing an AI-powered CRM with Groq Llama-8b, microservices backend, and real-time messaging — while building scalable, production-ready applications.",
        gradient: "from-purple-500 to-violet-500",
        accentColor: "#8b5cf6",
    },
];

/* ─── Timeline Node (center circle icon) ─── */
function TimelineNode({ icon: Icon, gradient, index }) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.15,
                duration: 0.4,
                type: "spring",
                stiffness: 200,
            }}
            className="relative z-10 flex items-center justify-center"
        >
            {/* Outer ring */}
            <div className="w-14 h-14 rounded-full bg-[#0a0a1a] border-2 border-gray-700 flex items-center justify-center shadow-xl">
                {/* Inner gradient circle */}
                <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg`}
                >
                    <Icon size={16} />
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Timeline Card ─── */
function TimelineCard({ item, index, side }) {
    const [expanded, setExpanded] = useState(false);
    const isLeft = side === "left";

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="relative"
        >
            <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`glass-card p-5 sm:p-6 overflow-hidden ${
                    item.certificate ? "cursor-pointer" : ""
                }`}
                onClick={() => item.certificate && setExpanded(!expanded)}
            >

                <h4
                    className="text-base sm:text-lg font-bold text-white mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    {item.title}
                </h4>

                {item.company && (
                    <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-sm text-gray-300 font-medium">
                            {item.company}
                        </span>
                        {item.linkedin && (
                            <FaCheckCircle
                                className="text-green-400"
                                size={11}
                                title="Verified on LinkedIn"
                            />
                        )}
                    </div>
                )}

                <p className="text-xs text-gray-500 mb-3 font-medium">
                    {item.subtitle}
                </p>

                <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                </p>

                {/* Expandable certificate/linkedin actions */}
                {item.certificate && (
                    <>
                        <AnimatePresence>
                            {expanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-wrap gap-2 pt-3 mt-3 border-t border-white/5">
                                        <a
                                            href={item.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-gray-300 hover:text-white transition-all border border-white/5 hover:border-white/15"
                                        >
                                            <FaFilePdf
                                                size={11}
                                                className="text-red-400"
                                            />
                                            <span>Certificate</span>
                                            <FaExternalLinkAlt
                                                size={8}
                                                className="opacity-50"
                                            />
                                        </a>
                                        <a
                                            href={item.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-xs text-[#0077b5] hover:text-[#00a0dc] transition-all border border-[#0077b5]/20 hover:border-[#0077b5]/40"
                                        >
                                            <FaLinkedin size={11} />
                                            <span>LinkedIn</span>
                                            <FaExternalLinkAlt
                                                size={8}
                                                className="opacity-50"
                                            />
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-600 mt-2">
                            <motion.span
                                animate={{ rotate: expanded ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaArrowRight size={8} />
                            </motion.span>
                            <span>
                                {expanded
                                    ? "Collapse"
                                    : "View certificate & verification"}
                            </span>
                        </div>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
}

/* ─── Main Experience Component ─── */
export default function Experience() {
    return (
        <SectionWrapper id="experience">
            <SectionTitle
                title="My Experience"
                subtitle="A timeline of growth — from learning the basics to building production systems."
            />

            {/* ═══ TIMELINE ═══ */}
            <div className="relative">
                {/* Central vertical line */}
                <div className="absolute left-[26px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-700 via-gray-700/60 to-transparent" />

                <div className="space-y-10 md:space-y-14">
                    {timeline.map((item, i) => {
                        const isLeft = i % 2 === 0;

                        return (
                            <div key={i} className="relative">
                                {/* ─── Desktop: alternating left/right ─── */}
                                <div className="hidden md:grid md:grid-cols-[1fr_56px_1fr] items-start">
                                    {/* Left column */}
                                    <div
                                        className={
                                            isLeft
                                                ? "pr-8"
                                                : "flex items-start justify-end pt-[18px] pr-6"
                                        }
                                    >
                                        {isLeft ? (
                                            <TimelineCard
                                                item={item}
                                                index={i}
                                                side="left"
                                            />
                                        ) : (
                                            <motion.span
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 }}
                                                className="text-sm font-semibold text-gray-500 tracking-wide whitespace-nowrap"
                                                style={{
                                                    fontFamily:
                                                        "'Outfit', sans-serif",
                                                }}
                                            >
                                                {item.year}
                                            </motion.span>
                                        )}
                                    </div>

                                    {/* Center node */}
                                    <div className="flex justify-center">
                                        <TimelineNode
                                            icon={item.icon}
                                            gradient={item.gradient}
                                            index={i}
                                        />
                                    </div>

                                    {/* Right column */}
                                    <div
                                        className={
                                            isLeft
                                                ? "flex items-start pt-[18px] pl-6"
                                                : "pl-8"
                                        }
                                    >
                                        {isLeft ? (
                                            <motion.span
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 }}
                                                className="text-sm font-semibold text-gray-500 tracking-wide whitespace-nowrap"
                                                style={{
                                                    fontFamily:
                                                        "'Outfit', sans-serif",
                                                }}
                                            >
                                                {item.year}
                                            </motion.span>
                                        ) : (
                                            <TimelineCard
                                                item={item}
                                                index={i}
                                                side="right"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* ─── Mobile: single column ─── */}
                                <div className="md:hidden flex gap-5">
                                    {/* Node on the line */}
                                    <div className="flex flex-col items-center shrink-0">
                                        <TimelineNode
                                            icon={item.icon}
                                            gradient={item.gradient}
                                            index={i}
                                        />
                                    </div>

                                    {/* Year + card */}
                                    <div className="flex-1 min-w-0 -mt-0.5">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            className="text-xs font-semibold text-gray-500 tracking-wide mb-2 block"
                                            style={{
                                                fontFamily:
                                                    "'Outfit', sans-serif",
                                            }}
                                        >
                                            {item.year}
                                        </motion.span>
                                        <TimelineCard
                                            item={item}
                                            index={i}
                                            side="right"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom end dot */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute left-[22px] md:left-1/2 md:-translate-x-[5px] -bottom-3 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 ring-4 ring-[#050510]"
                />
            </div>

            {/* LinkedIn banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-16"
            >
                <a
                    href="https://www.linkedin.com/in/jeremiah-j-731241292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/15 hover:border-[#0077b5]/30 transition-all group"
                >
                    <FaLinkedin size={20} className="text-[#0077b5]" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        Verify all experiences on LinkedIn
                    </span>
                    <FaExternalLinkAlt
                        size={11}
                        className="text-gray-500 group-hover:text-white transition-colors"
                    />
                </a>
            </motion.div>
        </SectionWrapper>
    );
}
