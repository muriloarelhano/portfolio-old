import { Container, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ResumeHeader } from "../src/components/resume/ResumeHeader";
import { ResumeMainInfos } from "../src/components/resume/ResumeMainInfos";
import { ResumeProfileInfos } from "../src/components/resume/ResumeProfileInfos";
import { ResumeSkills } from "../src/components/resume/ResumeSkills";
import Footer from "../src/sections/Footer";
import { Header } from "../src/sections/Header";

const ResumePage: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });
  return (
    <>
      <style>{getPageMargins()}</style>
      <Header />
      <Container maxW={"container.lg"} mb={10} ref={resumeRef}>
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
            <ResumeHeader handler={handlePrint} />
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
