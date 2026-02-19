"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
    return (
        <motion.a
            href="https://wa.me/919159192525?text=Hi%20Jeremiah%2C%20I%20found%20your%20portfolio!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-shadow hover:shadow-green-500/50"
            style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
            }}
        >
            <FaWhatsapp size={28} className="text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#030308] animate-pulse" />
        </motion.a>
    );
}
