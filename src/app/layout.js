import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Jeremiah J | AI & IoT Developer | Full Stack Engineer",
  description:
    "Portfolio of Jeremiah J — Computer Science Engineer specializing in AI, IoT, and Full Stack development. Building intelligent systems for real-world impact.",
  keywords: [
    "Jeremiah J",
    "AI Developer",
    "IoT Developer",
    "Full Stack Engineer",
    "Portfolio",
    "Computer Science",
    "Machine Learning",
    "Next.js",
  ],
  authors: [{ name: "Jeremiah J" }],
  openGraph: {
    title: "Jeremiah J | AI & IoT Developer",
    description:
      "Building Intelligent Systems for Real-World Impact",
    type: "website",
  },
};

import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#050510] text-[#e0e0f0]`}
        style={{ fontFamily: "'Inter', sans-serif" }}
        suppressHydrationWarning
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
