import { Link } from "@chakra-ui/next-js";
import { Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Skill, SkillProps } from "./Skill";

export const ResumeSkills: React.FC = () => {
  return (
    <VStack align={"start"} p={5} gap={5}>
      <VStack align={"start"}>
        <Text size={"lg"}>Links </Text>
        <Link href="/" color={useColorModeValue("blue.700", "blue.300")}>
          Website
        </Link>
        <Link
          href="https://www.linkedin.com/in/muriloarelhano/"
          color={useColorModeValue("blue.700", "blue.300")}
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/muriloarelhano"
          color={useColorModeValue("blue.700", "blue.300")}
        >
          Github
        </Link>
      </VStack>
      <VStack align={"start"}>
        <Heading size={"lg"}>Competências</Heading>
        {SKILLS.map((item, index) => {
          return <Skill key={index} title={item.title} level={item.level} />;
        })}
      </VStack>
      <VStack align={"start"}>
        <Heading size={"md"}>Linguagens</Heading>
        {LANGUAGES_SKILLS.map((item, index) => {
          return <Skill key={index} title={item.title} level={item.level} />;
        })}
      </VStack>
      <VStack align={"start"}>
        <Heading size={"md"}>Outras</Heading>
        {ANOTHER_SKILLS.map((item, index) => {
          return <Skill key={index} title={item.title} level={item.level} />;
        })}
      </VStack>
    </VStack>
  );
};

const SKILLS: SkillProps[] = [
  { title: "NodeJs", level: 5 },
  { title: "ReactJs", level: 5 },
  { title: "NextJs", level: 5 },
  { title: "NestJs", level: 5 },
];

const LANGUAGES_SKILLS: SkillProps[] = [
  { title: "Typescript", level: 5 },
  { title: "C#", level: 3 },
  { title: "Go", level: 2 },
  { title: "Rust", level: 2 },
];

const ANOTHER_SKILLS: SkillProps[] = [
  { title: "DevOps", level: 4 },
  { title: "Pipelines CI/CD", level: 4 },
  { title: "Infraestrutura e Cloud", level: 4 },
  { title: "Terraform, Ansible, IaC", level: 3 },
];
