import type { NextPage } from "next";
import Footer from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Banner } from "../src/components/IndexPage/Banner";
import { Projects } from "../src/components/IndexPage/Projects";
import { SkillsSection } from "../src/components/IndexPage/SkillsSection";
import { SocialMedia } from "../src/components/IndexPage/SocialMedia";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <SocialMedia />
      <SkillsSection />
      <Projects />
      <Footer></Footer>
    </>
  );
};

export default Home;
