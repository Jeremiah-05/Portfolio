"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Github from "@/components/Github";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Research />
          <Experience />
          <Github />
          <Contact />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
