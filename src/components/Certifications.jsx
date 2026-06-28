"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import {
    FaMicrosoft,
    FaCloud,
    FaShieldAlt,
    FaTrophy,
    FaCertificate,
    FaExternalLinkAlt,
    FaLinkedinIn,
    FaPython,
    FaCode,
    FaBriefcase,
    FaAward,
} from "react-icons/fa";
import { SiOracle, SiGooglecloud } from "react-icons/si";

/* ─── Category Definitions ─── */
const categories = [
    {
        id: "hackathons",
        label: "Hackathons",
        icon: FaTrophy,
        gradient: "from-amber-500 to-yellow-500",
        accent: "#f59e0b",
        items: [
            {
                title: "IIC Hackathon Challenge 2026 — 2nd Place",
                issuer: "PSG College of Arts & Science",
                date: "February 2026",
                icon: FaTrophy,
                gradient: "from-amber-500 to-yellow-500",
                glowColor: "rgba(245, 158, 11, 0.15)",
                description:
                    "Secured 2nd Place at the IIC Hackathon Challenge during GATEWAY'26 National Level Symposium, winning ₹4,000 cash prize for innovative solution development.",
                credentialUrl: "https://www.linkedin.com/in/jeremiah-j-731241292/",
                badge: "🏆 Runner",
                isAward: true,
            },
            {
                title: "Smart India Hackathon (SIH) 2025 — Internal Round",
                issuer: "Karunya Institute of Technology and Sciences",
                date: "September 2025",
                icon: FaTrophy,
                gradient: "from-orange-500 to-red-500",
                glowColor: "rgba(249, 115, 22, 0.15)",
                description:
                    "Participated in the Smart India Hackathon 2025 Internal Round, developing innovative solutions for national-level problem statements.",
                credentialUrl: "https://www.linkedin.com/in/jeremiah-j-731241292/",
                badge: "SIH 2025",
                isAward: true,
            },
            {
                title: "Digital Campus 2.0 on Google Cloud — G-K Hacks",
                issuer: "Karunya Institute of Technology and Sciences",
                date: "November 2025",
                icon: SiGooglecloud,
                gradient: "from-blue-500 to-green-500",
                glowColor: "rgba(66, 133, 244, 0.15)",
                description:
                    "Participated in G-K Hacks under the Digital Campus 2.0 initiative on Google Cloud, building cloud-native solutions.",
                credentialUrl: "https://www.linkedin.com/in/jeremiah-j-731241292/",
                badge: "G-K Hacks",
                isAward: true,
            },
        ],
    },
    {
        id: "internships",
        label: "Internships",
        icon: FaBriefcase,
        gradient: "from-emerald-500 to-teal-500",
        accent: "#10b981",
        items: [
            {
                title: "Virtual Internship Program in Cybersecurity",
                issuer: "Cisco",
                date: "October 2025",
                icon: FaShieldAlt,
                gradient: "from-emerald-500 to-teal-500",
                glowColor: "rgba(16, 185, 129, 0.15)",
                description:
                    "Completed Cisco's virtual cybersecurity internship covering network security, threat detection, and secure infrastructure design.",
                credentialUrl: "https://www.linkedin.com/in/jeremiah-j-731241292/",
                badge: "Cisco",
            },
            {
                title: "Python Programming",
                issuer: "CodeTech IT Solutions",
                date: "June 2025",
                icon: FaPython,
                gradient: "from-yellow-500 to-blue-500",
                glowColor: "rgba(245, 158, 11, 0.15)",
                description:
                    "Completed internship in Python programming, building practical skills in development, data handling, and automation.",
                credentialUrl: "https://www.linkedin.com/in/jeremiah-j-731241292/",
                badge: "CodeTech",
            },
            {
                title: "Web Development",
                issuer: "EdiGlobe",
                date: "June 2024",
                icon: FaCode,
                gradient: "from-teal-500 to-cyan-500",
                glowColor: "rgba(20, 184, 166, 0.15)",
                description:
                    "Completed internship in web development, building responsive applications using modern frontend technologies.",
                credentialUrl: "https://www.linkedin.com/in/jeremiah-j-731241292/",
                badge: "EdiGlobe",
            },
        ],
    },
    {
        id: "certifications",
        label: "Certifications",
        icon: FaAward,
        gradient: "from-purple-500 to-violet-600",
        accent: "#a78bfa",
        items: [
            {
                title: "Microsoft Certified: Azure Fundamentals",
                issuer: "Microsoft",
                date: "April 2026",
                icon: FaMicrosoft,
                gradient: "from-blue-500 to-cyan-500",
                glowColor: "rgba(59, 130, 246, 0.15)",
                description:
                    "Demonstrated foundational knowledge of cloud concepts, Azure services, Azure workloads, security, privacy, pricing, and support.",
                credentialUrl: "https://www.linkedin.com/in/jeremiah-j-731241292/",
                badge: "AZ-900",
            },
            {
                title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
                issuer: "Oracle",
                date: "October 2025",
                icon: FaCloud,
                gradient: "from-red-500 to-orange-500",
                glowColor: "rgba(239, 68, 68, 0.15)",
                description:
                    "Validated expertise in Oracle Cloud Infrastructure data science services, machine learning pipelines, and model deployment strategies.",
                credentialUrl: "https://www.linkedin.com/in/jeremiah-j-731241292/",
                badge: "OCI DS",
            },
            {
                title: "Microsoft Certified: Azure Data Fundamentals",
                issuer: "Microsoft",
                date: "August 2025",
                icon: FaMicrosoft,
                gradient: "from-violet-500 to-purple-600",
                glowColor: "rgba(139, 92, 246, 0.15)",
                description:
                    "Demonstrated understanding of core data concepts, relational and non-relational data workloads, and analytics workloads on Azure.",
                credentialUrl: "https://www.linkedin.com/in/jeremiah-j-731241292/",
                badge: "DP-900",
            },
        ],
    },
];

/* ─── Card Component ─── */
function CertCard({ cert, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="glass-card overflow-hidden group relative"
        >
            {/* Top accent line */}
            <div className={`h-1 bg-gradient-to-r ${cert.gradient}`} />

            {/* Background glow on hover */}
            <div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: cert.glowColor }}
            />

            <div className="p-6 sm:p-8 relative z-10">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
                            style={{ boxShadow: `0 8px 30px ${cert.glowColor}` }}
                        >
                            <cert.icon size={20} />
                        </div>
                        <div>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {cert.issuer}
                            </span>
                            <p className="text-xs text-gray-600 mt-0.5">{cert.date}</p>
                        </div>
                    </div>
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                            cert.isAward
                                ? "bg-amber-500/15 text-amber-400 border border-amber-500/25"
                                : "bg-white/5 text-gray-400 border border-white/10"
                        }`}
                    >
                        {cert.badge}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    {cert.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {cert.description}
                </p>

                {/* View credential link */}
                <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                    <FaExternalLinkAlt size={11} />
                    <span className="group-hover/link:underline">View Credential</span>
                </a>
            </div>
        </motion.div>
    );
}

/* ─── Category Section Header ─── */
function CategoryHeader({ category, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
        >
            <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg`}
            >
                <category.icon size={18} />
            </div>
            <div>
                <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    {category.label}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                    {category.items.length} {category.items.length === 1 ? "item" : "items"}
                </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
        </motion.div>
    );
}

/* ─── Tab Filter Button ─── */
function TabButton({ category, isActive, onClick }) {
    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClick}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive
                    ? "bg-white/10 text-white border border-white/15 shadow-lg"
                    : "bg-white/[0.03] text-gray-500 border border-white/5 hover:bg-white/[0.06] hover:text-gray-300"
            }`}
            style={
                isActive
                    ? { boxShadow: `0 4px 20px ${category.accent}25` }
                    : {}
            }
        >
            <category.icon size={14} style={isActive ? { color: category.accent } : {}} />
            <span>{category.label}</span>
            <span
                className={`ml-1 text-xs px-2 py-0.5 rounded-full ${
                    isActive
                        ? "bg-white/10 text-white"
                        : "bg-white/5 text-gray-600"
                }`}
            >
                {category.items.length}
            </span>
        </motion.button>
    );
}

/* ─── Main Component ─── */
export default function Certifications() {
    const [activeTab, setActiveTab] = useState("all");

    const filteredCategories =
        activeTab === "all"
            ? categories
            : categories.filter((c) => c.id === activeTab);

    return (
        <SectionWrapper id="certifications">
            <SectionTitle
                title="Certifications & Awards"
                subtitle="Industry-recognized credentials, hackathon achievements, and internship completions."
            />

            {/* Tab filters */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveTab("all")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeTab === "all"
                            ? "bg-white/10 text-white border border-white/15 shadow-lg"
                            : "bg-white/[0.03] text-gray-500 border border-white/5 hover:bg-white/[0.06] hover:text-gray-300"
                    }`}
                >
                    <FaCertificate size={14} style={activeTab === "all" ? { color: "#a78bfa" } : {}} />
                    <span>All</span>
                    <span
                        className={`ml-1 text-xs px-2 py-0.5 rounded-full ${
                            activeTab === "all"
                                ? "bg-white/10 text-white"
                                : "bg-white/5 text-gray-600"
                        }`}
                    >
                        {categories.reduce((sum, c) => sum + c.items.length, 0)}
                    </span>
                </motion.button>
                {categories.map((cat) => (
                    <TabButton
                        key={cat.id}
                        category={cat}
                        isActive={activeTab === cat.id}
                        onClick={() => setActiveTab(cat.id)}
                    />
                ))}
            </div>

            {/* Category sections */}
            <div className="space-y-14">
                {filteredCategories.map((category, ci) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <CategoryHeader category={category} index={ci} />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((cert, i) => (
                                <CertCard key={cert.title} cert={cert} index={i} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* LinkedIn CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex justify-center mt-14"
            >
                <a
                    href="https://www.linkedin.com/in/jeremiah-j-731241292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-blue-600/10 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                    <FaLinkedinIn size={16} />
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                    <FaExternalLinkAlt size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
            </motion.div>
        </SectionWrapper>
    );
}
