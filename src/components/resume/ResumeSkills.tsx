import { Heading, Link, VStack } from "@chakra-ui/react";
import React from "react";

export const ResumeSkills: React.FC = () => {
  return (
    <VStack align={"start"} p={5}>
      <Heading size={"lg"}>Links </Heading>
      <Link>Website</Link>
      <Link>LinkedIn</Link>
      <Link>Github</Link>
      <Link>Alura</Link>
      <Heading size={"lg"}>Competências</Heading>
    </VStack>
  );
};
