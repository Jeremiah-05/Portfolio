"use client";

import Navbar from "@/components/Navbar";
import Github from "@/components/Github";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function GithubPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <Github />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
