"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import {
    FaArrowRight,
    FaBriefcase,
    FaShieldAlt,
    FaPython,
    FaCode,
    FaLinkedin,
    FaFilePdf,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaExternalLinkAlt,
    FaCheckCircle,
} from "react-icons/fa";

/* ─── Internship & Work Experience Data (Verified via LinkedIn) ─── */
const experiences = [
    {
        icon: FaShieldAlt,
        title: "Cybersecurity",
        company: "Cisco",
        companyLogo: "cisco",
        duration: "June 2025 – October 2025",
        type: "Hybrid",
        category: "Internship",
        tags: [
            "Education / Teaching / Training",
            "Engineering and Technology",
        ],
        description:
            "Cisco AICTE Virtual Internship Program 2025 — Gained hands-on experience in network security, threat analysis, and cybersecurity frameworks through Cisco's industry-leading program.",
        certificate: "/Virtual-Internship-Cybersecurity.pdf",
        linkedin:
            "https://www.linkedin.com/in/jeremiah-j-731241292/",
        gradient: "from-blue-500 to-cyan-500",
        accentColor: "#06b6d4",
    },
    {
        icon: FaPython,
        title: "Python Programming",
        company: "CodeTech IT Solutions",
        companyLogo: "codetech",
        duration: "May 2025 – June 2025",
        type: "Hybrid",
        category: "Internship",
        tags: [
            "Education / Teaching / Training",
            "Engineering and Technology",
        ],
        description:
            "Internship Program in Python Programming — Developed practical skills in Python development, data handling, and building automation scripts for real-world IT solutions.",
        certificate: "/CodeTech-IT-Solutions-Certificate.pdf",
        linkedin:
            "https://www.linkedin.com/in/jeremiah-j-731241292/",
        gradient: "from-yellow-500 to-orange-500",
        accentColor: "#f59e0b",
    },
    {
        icon: FaCode,
        title: "Web Development",
        company: "Ediglobe",
        companyLogo: "ediglobe",
        duration: "June 2024 – July 2024",
        type: "Hybrid",
        category: "Internship",
        tags: [
            "Education / Teaching / Training",
            "Engineering and Technology",
        ],
        description:
            "Internship with EdiGlobe — Built and deployed responsive web applications using modern frontend technologies, gaining hands-on experience in full-stack web development workflows.",
        certificate: "/Ediglobe-Internship-Certificate.pdf",
        linkedin:
            "https://www.linkedin.com/in/jeremiah-j-731241292/",
        gradient: "from-green-500 to-emerald-500",
        accentColor: "#10b981",
        featured: true,
    },
];


/* ─── Company Logo Component ─── */
function CompanyAvatar({ company, gradient }) {
    const initial = company.charAt(0).toUpperCase();
    return (
        <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg`}
        >
            {initial}
        </div>
    );
}

/* ─── Experience Card ─── */
function ExperienceCard({ exp, index }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            className="relative group"
        >
            {/* Timeline connector */}
            {index < experiences.length - 1 && (
                <div className="absolute left-6 top-[72px] bottom-0 w-[2px] bg-gradient-to-b from-white/10 to-transparent hidden md:block" />
            )}

            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-0 overflow-hidden cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                {/* Top accent bar */}
                <div
                    className={`h-1 w-full bg-gradient-to-r ${exp.gradient}`}
                />

                <div className="p-6 sm:p-8">
                    {/* Header row */}
                    <div className="flex items-start gap-4 mb-4">
                        <CompanyAvatar
                            company={exp.company}
                            gradient={exp.gradient}
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h3
                                    className="text-xl font-bold text-white"
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                    }}
                                >
                                    {exp.title}
                                </h3>
                                {exp.featured && (
                                    <span className="text-yellow-400 text-sm">
                                        ★
                                    </span>
                                )}
                                <FaCheckCircle
                                    className="text-green-400 shrink-0"
                                    size={14}
                                    title="Verified on LinkedIn"
                                />
                            </div>
                            <p className="text-gray-400 text-sm mt-0.5">
                                {exp.company}
                            </p>
                        </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <FaCalendarAlt size={11} />
                            {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt size={11} />
                            {exp.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FaBriefcase size={11} />
                            {exp.category}
                        </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span
                            className="text-xs font-medium px-3 py-1 rounded-full"
                            style={{
                                background: `${exp.accentColor}20`,
                                color: exp.accentColor,
                                border: `1px solid ${exp.accentColor}30`,
                            }}
                        >
                            {exp.category}
                        </span>
                        {exp.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-5">
                        {exp.description}
                    </p>

                    {/* Expandable actions */}
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-wrap gap-3 pt-2 pb-1 border-t border-white/5">
                                    {/* View Certificate */}
                                    <a
                                        href={exp.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-300 hover:text-white transition-all border border-white/5 hover:border-white/15 group/btn"
                                    >
                                        <FaFilePdf
                                            size={14}
                                            className="text-red-400"
                                        />
                                        <span>View Certificate</span>
                                        <FaExternalLinkAlt
                                            size={10}
                                            className="opacity-0 group-hover/btn:opacity-100 transition-opacity"
                                        />
                                    </a>

                                    {/* Verify on LinkedIn */}
                                    <a
                                        href={exp.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-sm text-[#0077b5] hover:text-[#00a0dc] transition-all border border-[#0077b5]/20 hover:border-[#0077b5]/40 group/btn"
                                    >
                                        <FaLinkedin size={14} />
                                        <span>LinkedIn</span>
                                        <FaExternalLinkAlt
                                            size={10}
                                            className="opacity-0 group-hover/btn:opacity-100 transition-opacity"
                                        />
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Expand hint */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-600 mt-2">
                        <motion.span
                            animate={{ rotate: expanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaArrowRight size={10} />
                        </motion.span>
                        <span>
                            {expanded
                                ? "Click to collapse"
                                : "Click for certificate & verification"}
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─── Main Experience Component ─── */
export default function Experience() {
    return (
        <SectionWrapper id="experience">
            {/* Internship & Work Experience Section */}
            <SectionTitle
                title="Internship & Work Experience"
                subtitle="Click any card to view certificate and LinkedIn profile."
            />

            <div className="grid gap-6 mb-20">
                {experiences.map((exp, i) => (
                    <ExperienceCard key={exp.title} exp={exp} index={i} />
                ))}
            </div>

            {/* LinkedIn verification banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20"
            >
                <a
                    href="https://www.linkedin.com/in/jeremiah-j-731241292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/15 hover:border-[#0077b5]/30 transition-all group"
                >
                    <FaLinkedin size={20} className="text-[#0077b5]" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        LinkedIn Profile
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
