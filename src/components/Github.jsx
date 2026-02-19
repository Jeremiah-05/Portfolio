"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import {
    FaStar,
    FaCodeBranch,
    FaExternalLinkAlt,
    FaCode,
    FaFire,
    FaTrophy,
} from "react-icons/fa";

const repos = [
    {
        name: "LeadSync-CRM",
        description:
            "AI-powered CRM with real-time sentiment analysis, intent detection, and multi-channel messaging integrations.",
        language: "JavaScript",
        languageColor: "#f7df1e",
        stars: 12,
        forks: 3,
    },
    {
        name: "Landslide-Detection-IoT",
        description:
            "LoRa-based IoT system for real-time soil and environmental monitoring with cloud dashboard integration.",
        language: "C++",
        languageColor: "#00599C",
        stars: 8,
        forks: 2,
    },
    {
        name: "AI-Smart-Inbox",
        description:
            "Intelligent inbox that classifies, scores, and routes incoming messages using LLM-powered analysis.",
        language: "Python",
        languageColor: "#3776ab",
        stars: 6,
        forks: 1,
    },
];

const stats = [
    {
        icon: FaCode,
        label: "Repositories",
        value: "15+",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        icon: FaFire,
        label: "Contributions",
        value: "200+",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
    {
        icon: FaStar,
        label: "Stars Earned",
        value: "26+",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
    },
    {
        icon: FaTrophy,
        label: "Projects Deployed",
        value: "5+",
        color: "text-green-400",
        bg: "bg-green-500/10",
    },
];

export default function Github() {
    return (
        <SectionWrapper id="github">
            <SectionTitle
                title="GitHub & Open Source"
                subtitle="Building in public — contributing to the developer community."
            />

            {/* GitHub Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        whileHover={{ y: -4 }}
                        className="glass-card p-5 text-center group"
                    >
                        <div
                            className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color} mx-auto mb-3`}
                        >
                            <stat.icon size={18} />
                        </div>
                        <p
                            className="text-2xl font-bold text-white mb-1"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            {stat.value}
                        </p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* GitHub Profile Link */}
            <div className="flex justify-center mb-10">
                <motion.a
                    href="https://github.com/URK23CS1218"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/20 text-purple-400 font-medium text-sm hover:border-purple-500/40 transition-colors"
                >
                    <img
                        src="https://github.com/URK23CS1218.png"
                        alt="GitHub Avatar"
                        className="w-7 h-7 rounded-full"
                    />
                    View Full GitHub Profile
                    <FaExternalLinkAlt size={12} />
                </motion.a>
            </div>

            {/* Repository Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo, i) => (
                    <motion.a
                        key={repo.name}
                        href={`https://github.com/URK23CS1218/${repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        whileHover={{ y: -4 }}
                        className="glass-card p-6 group cursor-pointer"
                    >
                        {/* Repo name */}
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                                {repo.name}
                            </h4>
                            <FaExternalLinkAlt
                                size={12}
                                className="text-gray-500 group-hover:text-purple-400 transition-colors"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                            {repo.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <span
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: repo.languageColor }}
                                />
                                <span>{repo.language}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaStar size={12} />
                                <span>{repo.stars}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaCodeBranch size={12} />
                                <span>{repo.forks}</span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </SectionWrapper>
    );
}
