"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionWrapper({ id, children, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id={id} ref={ref} className={`relative py-20 sm:py-28 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {children}
            </motion.div>
        </section>
    );
}
