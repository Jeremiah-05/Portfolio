"use client";

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <Projects />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
