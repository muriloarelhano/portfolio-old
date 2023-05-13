import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { BsGithub } from "react-icons/bs";

export const Banner = () => {
  return (
    <Container maxW={"container.xl"} textAlign={{ base: "center", lg: "left" }}>
      <VStack gap={8} textAlign={"center"} py={"10"}>
        <Box>
          <Heading
            size={"2xl"}
            fontWeight={"bold"}
            bgGradient="linear(to-l, #A5008A, #00FFE0)"
            bgClip="text"
          >
            Hi, I’m Murilo Arelhano
          </Heading>
          <Heading size={"2xl"} color={"white"}>
            Full-stack Developer
          </Heading>
        </Box>

        <Text fontSize={"lg"} maxW={"container.sm"}>
          I hold a Bachelor&apos;s degree in Information Systems and have
          experience mainly with the NodeJs platform using Typescript, as well
          as some other languages such as Go and .Net/C#. I work with
          microservices development and web applications in general, and I also
          study extensively in other areas such as information security, DevOps,
          and game development.
        </Text>

        <Link href="https://github.com/muriloarelhano">
          <Button size={"lg"}>
            Github <BsGithub fontSize={"25px"} style={{ marginLeft: "8px" }} />
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};
