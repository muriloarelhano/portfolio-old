"use client"
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { ResumeHeader } from "../../components/Resume/ResumeHeader";
import { ResumeMainInfos } from "../../components/Resume/ResumeMainInfos";
import { ResumeProfileInfos } from "../../components/Resume/ResumeProfileInfos";
import { ResumeSkills } from "../../components/Resume/ResumeSkills";

export default function Resume() {
  return (
    <>
      <Header />
      <Container maxW={"container.xl"} mb={10}>
        <Grid
          templateAreas={`"header header"
                  "info info"
                  "main nav"`}
          gridTemplateColumns={"3fr 1fr"}
          gap={1}
        >
          <GridItem bg={"gray.900"} area={"header"}>
            <ResumeHeader />
          </GridItem>
          <GridItem bg={"gray.900"} area={"info"}>
            <ResumeProfileInfos />
          </GridItem>
          <GridItem bg={"gray.900"} area={"main"}>
            <ResumeMainInfos />
          </GridItem>
          <GridItem bg={"gray.900"} area={"nav"}>
            <ResumeSkills />
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
