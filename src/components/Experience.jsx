"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { FaRobot, FaComments, FaBolt, FaArrowRight } from "react-icons/fa";

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

export default function Experience() {
    return (
        <SectionWrapper id="experience">
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
                            <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
