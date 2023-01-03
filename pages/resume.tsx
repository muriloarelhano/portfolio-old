import { Container, Grid, GridItem } from "@chakra-ui/react";
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
          <GridItem bg={"gray.900"} area={"header"} borderRadius={"base"}>
            <ResumeHeader />
          </GridItem>
          <GridItem bg={"gray.900"} area={"info"} borderRadius={"base"}>
            <ResumeProfileInfos />
          </GridItem>
          <GridItem bg={"gray.900"} area={"main"} borderRadius={"base"}>
            <ResumeMainInfos />
          </GridItem>
          <GridItem bg={"gray.900"} area={"nav"} borderRadius={"base"}>
            <ResumeSkills />
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ResumePage;
