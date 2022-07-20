import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const HeaderResume = () => {
  return (
    <VStack
      minWidth={"100%"}
      background={"gray.200"}
      justify={"space-between"}
      align={"center"}
      padding={'5'}
    >
      <HStack>
        <Heading>Murilo Arelhano</Heading>
        <Text>Full-Stack Developer</Text>
      </HStack>
      <Image src="" alt="My Face"/>
    </VStack>
  );
};
