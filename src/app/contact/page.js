"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <Contact />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
