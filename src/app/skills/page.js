"use client";

import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <Skills />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
