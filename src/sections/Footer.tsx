import {
  Box,
  chakra,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading size={"lg"}>Murilo Arelhano</Heading>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Home</Link>
          <Link href={"resume"}>Resume</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© {new Date(Date.now()).getFullYear()}</Text>
          <Stack direction={"row"} spacing={6}>
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
    </Box>
  );
}
