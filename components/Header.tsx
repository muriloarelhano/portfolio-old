import React from "react";
import { Menu } from "./Menu";
import { Container, Heading, HStack } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Container maxW={"container.xl"} zIndex={9999}>
      <HStack justify={"space-between"} py={6}>
        <Heading size={"lg"} fontWeight={"medium"}>
          Murilo Arelhano
        </Heading>
        <Menu />
      </HStack>
    </Container>
  );
};
