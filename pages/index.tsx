import { Header } from "../src/sections/Header";
import type { NextPage } from "next";
import { Container } from "@chakra-ui/react";
import { Banner } from "../src/sections/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
};

export default Home;
