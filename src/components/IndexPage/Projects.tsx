import { Container, Grid, Heading, useColorModeValue } from "@chakra-ui/react";
import godevrel from "../../../public/godevrel-print.png";
import port from "../../../public/portfolio.png";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

const listOfProjects: ProjectCardProps[] = [
  {
    title: "Portfolio",
    description:
      "It´s my personal website to describe my skills, show a resume and other things about me",
    pageLink: "#",
    imageSrc: port.src,
    alt: "my portfolio website print",
  },
  {
    title: "GoDevrel",
    description:
      "Website created as my final paper of graduation in Information Systems",
    pageLink: "https://godevrel.netlify.com",
    imageSrc: godevrel.src,
    alt: "my portfolio website print",
  },
];

export const Projects = () => {
  return (
    <Container
      maxW={"full"}
      py={10}
      bg={useColorModeValue("gray.100", "gray.700")}
    >
      <Container
        maxW={"container.xl"}
        textAlign={{ base: "center", lg: "left" }}
      >
        <Heading mb={2}>Projects</Heading>
        <Heading mb={6} fontSize={"lg"}>
          Visit some of my projects
        </Heading>
        <Grid
          gridTemplateColumns={"repeat(auto-fill, minmax(300px, 350px))"}
          gap={3}
        >
          {listOfProjects.map((project: ProjectCardProps, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Grid>
      </Container>
    </Container>
  );
};
