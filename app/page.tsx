"use client";

import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Banner } from "../components/Root/Banner";
import { Projects } from "../components/Root/Projects";
import { Skills } from "../components/Root/Skills";
import { SocialMedia } from "../components/Root/SocialMedia";

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
