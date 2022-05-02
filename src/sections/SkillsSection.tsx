import { Container, Heading } from "@chakra-ui/react";
import { SkillCard } from "../components/SkillCard";

export const SkillsSection = () => {
  return (
    <Container maxW={"container.lg"} py={10}>
      <Heading mb={10}>My Skills</Heading>
      <SkillCard></SkillCard>
    </Container>
  );
};
