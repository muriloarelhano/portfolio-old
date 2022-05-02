import { SkillCard } from "../components/SkillCard";
import { Container, Heading, Stack, theme } from "@chakra-ui/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGo, SiRust } from "react-icons/si";

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

export const SkillsSection = () => {
  return (
    <Container maxW={"container.lg"} py={10}>
      <Heading mb={10}>My Skills</Heading>
      <Stack direction={"row"} overflow={"hidden"}>
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
      </Stack>
    </Container>
  );
};
