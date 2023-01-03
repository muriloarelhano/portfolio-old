import { Container, Grid, Heading } from "@chakra-ui/react";
import { listOfProjects } from "../../data/projects";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export const Projects = () => {
  return (
    <Container maxW={"full"} py={10} id={"#projects"}>
      <Container
        maxW={"container.xl"}
        textAlign={{ base: "center", lg: "left" }}
      >
        <Heading mb={8}>Projects</Heading>
        <Grid
          gridTemplateColumns={"repeat(auto-fill, minmax(300px, 350px))"}
          gap={8}
        >
          {listOfProjects.map((project: ProjectCardProps, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Grid>
      </Container>
    </Container>
  );
};
