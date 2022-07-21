import { Container, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { ResumeHeader } from "../src/components/resume/ResumeHeader";
import { ResumeMainInfos } from "../src/components/resume/ResumeMainInfos";
import { ResumeProfileInfos } from "../src/components/resume/ResumeProfileInfos";
import { ResumeSkills } from "../src/components/resume/ResumeSkills";
import Footer from "../src/sections/Footer";
import { Header } from "../src/sections/Header";

const ResumePage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxW={"container.lg"} mb={10}>
        <Grid
          templateAreas={`"header header"
                  "info info"
                  "main nav"`}
          gridTemplateColumns={"3fr 1fr"}
          gap={1}
        >
          <GridItem
            background={useColorModeValue("gray.100", "gray.700")}
            area={"header"}
            borderRadius={"md"}
          >
            <ResumeHeader />
          </GridItem>
          <GridItem
            bg={useColorModeValue("gray.100", "gray.700")}
            area={"info"}
            borderRadius={"md"}
          >
            <ResumeProfileInfos />
          </GridItem>
          <GridItem
            bg={useColorModeValue("gray.100", "gray.700")}
            area={"main"}
            borderRadius={"md"}
          >
            <ResumeMainInfos />
          </GridItem>
          <GridItem
            bg={useColorModeValue("gray.100", "gray.700")}
            area={"nav"}
            borderRadius={"md"}
          >
            <ResumeSkills />
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ResumePage;
