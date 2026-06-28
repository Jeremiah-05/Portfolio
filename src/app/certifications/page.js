"use client";

import Navbar from "@/components/Navbar";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <Certifications />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
