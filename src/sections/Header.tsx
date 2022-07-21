import React from "react";
import { NavBar } from "../components/Menu";
import { Container, Heading, HStack, Text } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Container maxW={"container.lg"}>
      <HStack justify={"space-between"} py={5}>
        <Heading size={"lg"}>Murilo Arelhano</Heading>
        <NavBar />
      </HStack>
    </Container>
  );
};
