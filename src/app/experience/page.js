"use client";

import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <Experience />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
