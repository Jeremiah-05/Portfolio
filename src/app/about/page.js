"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <About />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
