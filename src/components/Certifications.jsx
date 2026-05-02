"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
} from "react-icons/fa";
import { SiOracle } from "react-icons/si";

const certifications = [
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
        badge: "🏆 Winner",
        isAward: true,
    },
];

function CertCard({ cert, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="glass-card overflow-hidden group relative"
        >
            {/* Top accent line */}
            <div
                className={`h-1 bg-gradient-to-r ${cert.gradient}`}
            />

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

export default function Certifications() {
    return (
        <SectionWrapper id="certifications">
            <SectionTitle
                title="Certifications & Awards"
                subtitle="Industry-recognized credentials validating expertise in cloud, data, cybersecurity, and innovation."
            />

            {/* Certifications grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {certifications.map((cert, i) => (
                    <CertCard key={cert.title} cert={cert} index={i} />
                ))}
            </div>

            {/* LinkedIn CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex justify-center"
            >
                <a
                    href="https://www.linkedin.com/in/jeremiah-j-731241292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-blue-600/10 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                    <FaLinkedinIn size={16} />
                    <span className="text-sm font-medium">View all credentials on LinkedIn</span>
                    <FaExternalLinkAlt size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
            </motion.div>
        </SectionWrapper>
    );
}
