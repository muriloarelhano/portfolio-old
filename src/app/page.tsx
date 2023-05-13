"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Banner } from "@/components/IndexPage/Banner";
import { Projects } from "@/components/IndexPage/Projects";
import { Skills } from "@/components/IndexPage/Skills";
import { SocialMedia } from "@/components/IndexPage/SocialMedia";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <SocialMedia />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
