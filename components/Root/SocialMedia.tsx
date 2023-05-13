import React from "react";
import { Box, Link, VStack } from "@chakra-ui/react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export const SocialMedia: React.FunctionComponent = () => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      position={"fixed"}
      right={10}
      bottom={0}
    >
      <VStack fontSize={30} gap={4}>
        <Link href="https://github.com/muriloarelhano">
          <BsGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/muriloarelhano/">
          <BsLinkedin />
        </Link>
        <Link href="https://www.facebook.com/murilo.arelhano">
          <BsFacebook />
        </Link>
        <Box position={"relative"} height={"80"} width={1} bg={'white'} />
      </VStack>
    </Box>
  );
};
