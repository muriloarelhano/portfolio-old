import { SkillCard } from "../components/SkillCard";
import { Container, Heading, Stack, theme } from "@chakra-ui/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGo, SiRust } from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const skills = [
  {
    title: "NodeJs",
    description: "3 years of experience with NodeJs programming",
    backgroundColor: theme.colors.green[500],
    color: "white",
    Icon: FaNodeJs,
  },
  {
    title: "ReactJS",
    description: "2 years of experience with React programming",
    backgroundColor: theme.colors.blue[200],
    color: "white",
    Icon: FaReact,
  },
  {
    title: "Typescript",
    description: "3 years of experience with Typescript programming",
    backgroundColor: theme.colors.blue[600],
    color: "white",
    Icon: SiTypescript,
  },
  {
    title: "NextJs",
    description: "1 years of experience with NextJs programming",
    backgroundColor: theme.colors.black,
    color: "white",
    Icon: SiNextdotjs,
  },
  {
    title: "Go",
    description: "I'm studding about GO",
    backgroundColor: theme.colors.blue[100],
    color: "white",
    Icon: SiGo,
  },
  {
    title: "Rust",
    description: "I'm studding about Rust",
    backgroundColor: theme.colors.orange[300],
    color: "white",
    Icon: SiRust,
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const SkillsSection = () => {
  return (
    <Container maxW={"container.lg"} py={10} mb={10}>
      <Heading mb={10}>My Skills</Heading>
      <Carousel
        responsive={responsive}
        autoPlaySpeed={6000}
        autoPlay={true}
        infinite={true}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            color={skill.color}
            backgroundColor={skill.backgroundColor}
            Icon={skill.Icon}
          />
        ))}
      </Carousel>
    </Container>
  );
};
