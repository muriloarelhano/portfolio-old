import {
  Box,
  chakra,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavBar } from "./Menu";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box borderTopWidth={"0.25px"} borderStyle={"solid"} borderColor={"#323238"}>
      <Container
        as={Stack}
        maxW={"container.xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Heading size={"lg"}>Murilo Arelhano</Heading>
        <NavBar />
        <Stack direction={"row"} align={"center"} spacing={6}>
          <Text>© {new Date(Date.now()).getFullYear()}</Text>
          <SocialButton
            label={"GitHub"}
            href={"https://github.com/muriloarelhano"}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/muriloarelhano/"}
          >
            <FaLinkedinIn />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
