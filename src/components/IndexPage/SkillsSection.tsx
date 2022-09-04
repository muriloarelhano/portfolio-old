import { Container, Heading, theme } from "@chakra-ui/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiGo, SiNextdotjs, SiRust, SiTypescript } from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SkillCard } from "./SkillCard";

const skills = [
  {
    title: "Typescript",
    description: "3 years of experience with Typescript",
    backgroundColor: theme.colors.blue[600],
    color: "white",
    Icon: SiTypescript,
  },
  {
    title: "NodeJs",
    description: "3 years of experience with NodeJs",
    backgroundColor: theme.colors.green[500],
    color: "white",
    Icon: FaNodeJs,
  },
  {
    title: "ReactJS",
    description: "2 years of experience with React",
    backgroundColor: theme.colors.blue[200],
    color: "white",
    Icon: FaReact,
  },
  {
    title: "NextJs",
    description: "1 year of experience with NextJs",
    backgroundColor: theme.colors.black,
    color: "white",
    Icon: SiNextdotjs,
  },
  {
    title: "Go",
    description: "Studding about GO",
    backgroundColor: theme.colors.blue[100],
    color: "white",
    Icon: SiGo,
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1240 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1240, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const SkillsSection = () => {
  return (
    <Container maxW={"container.xl"} py={10} mb={10}>
      <Heading mb={10}>Main Skills</Heading>
      <Carousel responsive={responsive} autoPlaySpeed={6000} autoPlay infinite>
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
