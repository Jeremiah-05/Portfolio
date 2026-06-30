"use client";

import Navbar from "@/components/Navbar";
import Research from "@/components/Research";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <Research />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
