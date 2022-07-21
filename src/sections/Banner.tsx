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
import ResumePage from "../../pages/resume";
import BannerImage from "../../public/banner-image.png";
import { ResumeHeader } from "../components/resume/ResumeHeader";
import { reactToPdf } from "../utils/pdf";

export const Banner = () => {
  return (
    <Container maxW={"full"} bg={useColorModeValue("gray.100", "gray.700")}>
      <Container
        maxW={"container.lg"}
        py={4}
        textAlign={{ base: "center", lg: "left" }}
      >
        <HStack
          gap={4}
          wrap={{
            base: "wrap",
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
            <HStack
              gap={4}
              wrap={{
                base: "wrap",
                md: "nowrap",
              }}
              justify={"center"}
            >
              <Link href="https://github.com/muriloarelhano">
                <Button size={"lg"}>
                  Go To Github{" "}
                  <BsGithub fontSize={"25px"} style={{ marginLeft: "8px" }} />
                </Button>
              </Link>

              <Button
                variant={"ghost"}
                size={"lg"}
                onClick={() => reactToPdf("curriculo", <ResumeHeader />)}
              >
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
