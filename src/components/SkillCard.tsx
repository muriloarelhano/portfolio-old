import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FaNodeJs } from "react-icons/fa";

export const SkillCard = () => {
  return (
    <HStack
      gap={4}
      p={3}
      align={"start"}
      maxW={80}
      border="1px"
      borderColor="gray.200"
      rounded={"md"}
    >
      <Box
        bg={"green"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        boxSize={20}
        minW={20}
        rounded={"md"}
        color={"white"}
      >
        <FaNodeJs size={45} />
      </Box>
      <VStack align={"start"}>
        <Heading size={"md"}>NodeJs</Heading>
        <Text>3 years of experience with NodeJs programming</Text>
      </VStack>
    </HStack>
  );
};
