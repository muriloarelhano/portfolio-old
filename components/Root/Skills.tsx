import { Container, Grid, Heading } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import { skills } from "../../data/skills";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <Container maxW={"container.xl"} py={10} mb={10}>
      <Heading mb={10}>Skills</Heading>
      <Grid
        gridTemplateColumns={"repeat(auto-fill, minmax(400px, 400px))"}
        gap={4}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            // description={skill.description}
            color={skill.color}
            Icon={skill.Icon}
          />
        ))}
      </Grid>
    </Container>
  );
};
