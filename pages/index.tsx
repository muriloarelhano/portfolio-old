import type { NextPage } from "next";
import { Header } from "../src/sections/Header";
import { Banner } from "../src/sections/Banner";
import { SocialMedia } from "../src/components/SocialMedia";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <SocialMedia />
    </>
  );
};

export default Home;
