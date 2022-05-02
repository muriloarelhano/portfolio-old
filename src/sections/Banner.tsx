import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import BannerImage from "../../public/banner-image.png";

export const Banner = () => {
  return (
    <Container maxW={"full"} bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"container.lg"} py={4}>
        <HStack
          gap={4}
          wrap={{
            sm: "wrap",
            lg: "nowrap",
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <VStack gap={4}>
            <Heading fontSize={"4xl"} fontWeight={"bold"}>
              Hi There!👋 I’m Murilo Arelhano
            </Heading>
            <Text>
              I’m a Full-stack Web Developer, graduating in information system,
              I have experience and study constantly web development with
              NodeJs, ReactJs, Typescript, micro services, cloud infrastructure,
              DevOps and information security.
            </Text>
            <HStack gap={4}>
              <Button
                size={"lg"}
                onClick={() => {
                  window.location.href = "https://github.com/muriloarelhano";
                }}
              >
                Go To Github{" "}
                <BsGithub fontSize={"25px"} style={{ marginLeft: "8px" }} />
              </Button>

              <Button variant={"ghost"} size={"lg"}>
                Download | CV
              </Button>
            </HStack>
          </VStack>
          <Image src={BannerImage.src} alt="" transform={"translateY(50px)"} />
        </HStack>
      </Container>
    </Container>
  );
};
