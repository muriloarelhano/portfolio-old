import React from "react";
import { Menu } from "../components/Menu";
import { Container, HStack, Text } from "@chakra-ui/react";

export const Header: React.FunctionComponent = () => {
  return (
    <Container maxW={"container.lg"}>
      <HStack justify={"space-between"} py={5}>
        <Text fontSize={"3xl"}>Murilo Arelhano</Text>
        <Menu />
      </HStack>
    </Container>
  );
};
