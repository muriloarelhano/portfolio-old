import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

export const Banner = () => {
  return (
    <Container maxW={"full"}>
      <Container
        maxW={"container.xl"}
        textAlign={{ base: "center", lg: "left" }}
      >
        <VStack gap={8} textAlign={"center"} py={"10"}>
          <Heading
            size={"2xl"}
            fontWeight={"bold"}
            bgGradient="linear(to-l, #A5008A, #00FFE0)"
            bgClip="text"
          >
            Hi, I’m Murilo Arelhano
            <Heading size={"2xl"} color={"white"}>
              Full-stack Developer
            </Heading>
          </Heading>

          <Text fontSize={"lg"} maxW={"container.sm"}>
            I have experience with web development with NodeJs, ReactJs,
            Typescript, micro services, cloud infrastructure, DevOps and
            information security.
          </Text>

          <Link href="https://github.com/muriloarelhano">
            <Button size={"lg"}>
              Github{" "}
              <BsGithub fontSize={"25px"} style={{ marginLeft: "8px" }} />
            </Button>
          </Link>
        </VStack>
      </Container>
    </Container>
  );
};
