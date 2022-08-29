import { Container, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Footer from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { ResumeHeader } from "../src/components/ResumePage/ResumeHeader";
import { ResumeMainInfos } from "../src/components/ResumePage/ResumeMainInfos";
import { ResumeProfileInfos } from "../src/components/ResumePage/ResumeProfileInfos";
import { ResumeSkills } from "../src/components/ResumePage/ResumeSkills";

const ResumePage: React.FC = () => {
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
          <GridItem
            background={useColorModeValue("gray.100", "gray.700")}
            area={"header"}
            borderRadius={"base"}
          >
            <ResumeHeader />
          </GridItem>
          <GridItem
            bg={useColorModeValue("gray.100", "gray.700")}
            area={"info"}
            borderRadius={"base"}
          >
            <ResumeProfileInfos />
          </GridItem>
          <GridItem
            bg={useColorModeValue("gray.100", "gray.700")}
            area={"main"}
            borderRadius={"base"}
          >
            <ResumeMainInfos />
          </GridItem>
          <GridItem
            bg={useColorModeValue("gray.100", "gray.700")}
            area={"nav"}
            borderRadius={"base"}
          >
            <ResumeSkills />
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

const getPageMargins = () => {
  return `
  @page {
    size: auto;
    margin: ${20}px ${0}px ${20}px ${0}px !important;
  }

  @media print {
    html, body {
      height: initial !important;
      overflow: initial !important;
      -webkit-print-color-adjust: exact;
    }
  }
  `;
};

export default ResumePage;
