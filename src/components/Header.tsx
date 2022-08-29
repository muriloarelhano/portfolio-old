import { Container, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/Menu";

export const Header: React.FC = () => {
  return (
    <Container maxW={"container.xl"}>
      <HStack justify={"space-between"} py={5}>
        <Heading size={"lg"}>Murilo Arelhano</Heading>
        <NavBar />
      </HStack>
    </Container>
  );
};
