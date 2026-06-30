"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import {
    FaExternalLinkAlt,
    FaLinkedinIn,
    FaBookOpen,
    FaUserGraduate,
    FaCalendarAlt,
    FaChevronDown,
    FaQuoteLeft,
} from "react-icons/fa";
import {
    SiGooglescholar,
} from "react-icons/si";
import {
    HiOutlineAcademicCap,
    HiOutlineBeaker,
    HiOutlineBookOpen,
    HiOutlineGlobeAlt,
} from "react-icons/hi";

/* ─── Publications Data ─── */
const publications = [
    {
        id: 1,
        number: "01",
        title: "Federated Digital Twins (FDT) for Geriatric Remote Patient Monitoring",
        venue: "Book of Proceedings — ICSHI 2026",
        sponsor: "AICTE Sponsored International Conference",
        publicationType: "Conference Proceedings",
        year: "2026",
        role: "Co-Author",
        authors: [
            { name: "Jerome Prince P.", role: "Author" },
            { name: "Jeremiah J.", role: "Co-Author", isMe: true },
        ],
        abstract:
            "Proposed a Federated Digital Twins (FDT) architecture for geriatric remote patient monitoring by integrating Edge AI, Federated Learning, and Generative AI. The framework enhances patient data privacy, reduces communication latency, and supports intelligent real-time healthcare monitoring across IoMT devices.",
        domains: [
            "Federated Learning",
            "Digital Twins",
            "Edge AI",
            "Generative AI",
            "IoMT",
            "Healthcare AI",
            "Privacy-Preserving AI",
            "Remote Patient Monitoring",
        ],
        gradient: "from-cyan-500 to-blue-600",
        glowColor: "rgba(6, 182, 212, 0.15)",
        accentColor: "#06b6d4",
        publicationUrl:
            "https://www.linkedin.com/posts/jeremiah-j-731241292_researchpublication-aiinhealthcare-federatedlearning-ugcPost-7477581147980509185-NuLE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbextUB1ESi7i26c5HKFp9ayd7SH5XxRiM",
        icon: HiOutlineBeaker,
    },
];

/* ─── Stat Counter ─── */
const stats = [
    { label: "Publications", value: "1", icon: HiOutlineBookOpen },
    { label: "Research Domains", value: "8", icon: HiOutlineGlobeAlt },
    { label: "Conference Papers", value: "1", icon: HiOutlineAcademicCap },
];

/* ─── Pre-computed particle configs (avoids hydration mismatch from Math.random) ─── */
const particles = [
    { w: 5, h: 4, left: "25%", top: "18%", bg: "rgba(6, 182, 212, 0.2)", dur: 5.2 },
    { w: 4, h: 6, left: "48%", top: "35%", bg: "rgba(124, 58, 237, 0.2)", dur: 6.1 },
    { w: 6, h: 3, left: "68%", top: "55%", bg: "rgba(6, 182, 212, 0.2)", dur: 4.8 },
    { w: 3, h: 5, left: "35%", top: "72%", bg: "rgba(124, 58, 237, 0.2)", dur: 5.5 },
    { w: 5, h: 5, left: "55%", top: "28%", bg: "rgba(6, 182, 212, 0.2)", dur: 6.4 },
    { w: 4, h: 4, left: "80%", top: "62%", bg: "rgba(124, 58, 237, 0.2)", dur: 4.5 },
];

/* ─── Animated Background ─── */
function ResearchBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating particles */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: p.w,
                        height: p.h,
                        left: p.left,
                        top: p.top,
                        background: p.bg,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: p.dur,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut",
                    }}
                />
            ))}
            {/* Large gradient orbs */}
            <div
                className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[160px] opacity-[0.04]"
                style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}
            />
            <div
                className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-[160px] opacity-[0.04]"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            />
        </div>
    );
}

/* ─── Stats Bar ─── */
function StatsBar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 mb-14 max-w-2xl mx-auto"
        >
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="glass-card p-4 sm:p-5 text-center group hover:border-cyan-500/20 transition-all duration-300"
                >
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                    <p
                        className="text-2xl sm:text-3xl font-bold text-white mb-1"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}

/* ─── Domain Tag ─── */
function DomainTag({ domain, index }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * index, duration: 0.3 }}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                       bg-cyan-500/8 text-cyan-300/80 border border-cyan-500/15
                       hover:bg-cyan-500/15 hover:text-cyan-200 hover:border-cyan-500/30
                       transition-all duration-300 cursor-default"
        >
            {domain}
        </motion.span>
    );
}

/* ─── Publication Card ─── */
function PublicationCard({ pub, index }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
            className="glass-card overflow-hidden group relative"
        >
            {/* Top accent gradient line */}
            <div className={`h-1 bg-gradient-to-r ${pub.gradient}`} />

            {/* Background glow on hover */}
            <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: pub.glowColor }}
            />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                {/* ── Header Section ── */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                        {/* Publication number badge */}
                        <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pub.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                            style={{ boxShadow: `0 8px 32px ${pub.glowColor}` }}
                        >
                            <pub.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span
                                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/70"
                                    style={{ fontFamily: "'Outfit', sans-serif" }}
                                >
                                    Publication #{pub.number}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <FaCalendarAlt size={10} />
                                <span>{pub.year}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600" />
                                <span>{pub.publicationType}</span>
                            </div>
                        </div>
                    </div>

                    {/* Role badge */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 self-start"
                    >
                        <FaUserGraduate size={12} className="text-cyan-400" />
                        <span className="text-xs font-semibold text-cyan-300">{pub.role}</span>
                    </motion.div>
                </div>

                {/* ── Title ── */}
                <h3
                    className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-white mb-3 leading-tight
                               group-hover:text-transparent group-hover:bg-clip-text
                               group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300
                               transition-all duration-500"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    {pub.title}
                </h3>

                {/* ── Venue ── */}
                <div className="flex items-center gap-2 mb-5">
                    <FaBookOpen size={13} className="text-cyan-400/60 flex-shrink-0" />
                    <p className="text-sm text-gray-400">
                        <span className="text-cyan-400/80 font-medium">{pub.venue}</span>
                        {pub.sponsor && (
                            <span className="text-gray-500"> • {pub.sponsor}</span>
                        )}
                    </p>
                </div>

                {/* ── Authors ── */}
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Authors:</span>
                    {pub.authors.map((author, i) => (
                        <span key={author.name} className="flex items-center gap-1">
                            <span
                                className={`text-sm font-medium ${author.isMe
                                        ? "text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20"
                                        : "text-gray-300"
                                    }`}
                            >
                                {author.name}
                            </span>
                            {i < pub.authors.length - 1 && (
                                <span className="text-gray-600 ml-1">,</span>
                            )}
                        </span>
                    ))}
                </div>

                {/* ── Abstract (Expandable) ── */}
                <div className="mb-6">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 hover:text-cyan-400 transition-colors group/btn"
                    >
                        <FaQuoteLeft size={10} className="text-cyan-500/50" />
                        <span>Abstract</span>
                        <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaChevronDown size={10} />
                        </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pl-4 border-l-2 border-cyan-500/20">
                                    <p className="text-sm text-gray-400 leading-relaxed italic">
                                        {pub.abstract}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {!isExpanded && (
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                            {pub.abstract}
                        </p>
                    )}
                </div>

                {/* ── Research Domains ── */}
                <div className="mb-8">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Research Domains
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {pub.domains.map((domain, i) => (
                            <DomainTag key={domain} domain={domain} index={i} />
                        ))}
                    </div>
                </div>

                {/* ── Footer Actions ── */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-white/5">
                    <motion.a
                        href={pub.publicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl
                                   bg-gradient-to-r ${pub.gradient} text-white text-sm font-semibold
                                   shadow-lg hover:shadow-xl transition-shadow duration-300`}
                        style={{ boxShadow: `0 8px 30px ${pub.glowColor}` }}
                    >
                        <FaExternalLinkAlt size={12} />
                        View Publication
                    </motion.a>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div
                            className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                            title="Published"
                        />
                        <span>Published in {pub.venue.split("—")[0].trim()}</span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

/* ─── Main Component ─── */
export default function Research() {
    return (
        <SectionWrapper id="research">
            <ResearchBackground />

            <SectionTitle
                title="Research & Publications"
                subtitle="Exploring the frontiers of AI, healthcare, and privacy-preserving technologies through academic research."
            />

            {/* Stats */}
            <StatsBar />

            {/* Publication Cards */}
            <div className="space-y-8 max-w-4xl mx-auto">
                {publications.map((pub, i) => (
                    <PublicationCard key={pub.id} pub={pub} index={i} />
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
                    <span className="text-sm font-medium">More on LinkedIn</span>
                    <FaExternalLinkAlt
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                </a>
            </motion.div>
        </SectionWrapper>
    );
}
