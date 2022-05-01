import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import BannerImage from "../../public/banner-image.png";

export const Banner = () => {
  return (
    <Container maxW={"full"} bg={"gray.100"}>
      <Container maxW={"container.lg"}>
        <HStack>
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
              <Button>Go To Github</Button>
              <Button>Download | CV</Button>
            </HStack>
          </VStack>
          <Image src={BannerImage.src} alt="" transform={"translateY(50px)"} />
        </HStack>
      </Container>
    </Container>
  );
};
