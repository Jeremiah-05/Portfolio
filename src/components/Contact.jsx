"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { supabase } from "@/lib/supabase";
import {
    FaEnvelope,
    FaLinkedinIn,
    FaGithub,
    FaWhatsapp,
    FaPaperPlane,
    FaMapMarkerAlt,
    FaSpinner,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: FaEnvelope,
        label: "Email",
        value: "jeremiahj7162@gmail.com",
        href: "mailto:jeremiahj7162@gmail.com",
    },
    {
        icon: FaLinkedinIn,
        label: "LinkedIn",
        value: "linkedin.com/in/jeremiah-j",
        href: "https://www.linkedin.com/in/jeremiah-j-731241292/",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        value: "github.com/URK23CS1218",
        href: "https://github.com/URK23CS1218",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "+91 91591 92525",
        href: "https://wa.me/919159192525?text=Hi%20Jeremiah%2C%20I%20found%20your%20portfolio!",
    },
    {
        icon: FaMapMarkerAlt,
        label: "Location",
        value: "India",
        href: null,
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Name is required";
        if (!form.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            errs.email = "Invalid email format";
        if (!form.message.trim()) errs.message = "Message is required";
        else if (form.message.trim().length < 10)
            errs.message = "Message must be at least 10 characters";
        return errs;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError("");
        const errs = validate();
        setErrors(errs);

        if (Object.keys(errs).length === 0) {
            setLoading(true);
            try {
                if (supabase) {
                    const { error } = await supabase.from("contacts").insert([
                        {
                            name: form.name.trim(),
                            email: form.email.trim(),
                            message: form.message.trim(),
                            created_at: new Date().toISOString(),
                        },
                    ]);
                    if (error) throw error;
                }

                setSubmitted(true);
                setForm({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitted(false), 5000);
            } catch (err) {
                console.error("Supabase error:", err);
                setSubmitError(
                    "Failed to send message. Please try again or email me directly."
                );
            } finally {
                setLoading(false);
            }
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    return (
        <SectionWrapper id="contact">
            <SectionTitle
                title="Get In Touch"
                subtitle="Have a project in mind or want to collaborate? Let's build something amazing together."
            />

            <div className="grid md:grid-cols-5 gap-8">
                {/* Contact info */}
                <div className="md:col-span-2 space-y-4">
                    {contactInfo.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            {item.href ? (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card p-4 flex items-center gap-4 group hover:border-purple-500/30 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                        <item.icon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                                            {item.label}
                                        </p>
                                        <p className="text-sm text-gray-300 font-medium group-hover:text-purple-400 transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ) : (
                                <div className="glass-card p-4 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <item.icon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                                            {item.label}
                                        </p>
                                        <p className="text-sm text-gray-300 font-medium">{item.value}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Contact form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="md:col-span-3 glass-card p-6 sm:p-8"
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center py-12"
                        >
                            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
                                <FaPaperPlane size={24} />
                            </div>
                            <h3
                                className="text-xl font-bold text-white mb-2"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                                Message Sent!
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Thanks for reaching out. I&rsquo;ll get back to you soon.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    disabled={loading}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.name ? "border-red-500/50" : "border-white/10"
                                        } text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-colors disabled:opacity-50`}
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    disabled={loading}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? "border-red-500/50" : "border-white/10"
                                        } text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-colors disabled:opacity-50`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    disabled={loading}
                                    rows={5}
                                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.message ? "border-red-500/50" : "border-white/10"
                                        } text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-colors resize-none disabled:opacity-50`}
                                    placeholder="Tell me about your project..."
                                />
                                {errors.message && (
                                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit error */}
                            {submitError && (
                                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                                    {submitError}
                                </p>
                            )}

                            {/* Submit */}
                            <motion.button
                                whileHover={{ scale: loading ? 1 : 1.02 }}
                                whileTap={{ scale: loading ? 1 : 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <FaSpinner size={14} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane size={14} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
