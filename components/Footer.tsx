"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Menu } from "./Menu";

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
    <Link href={href}>
      <Button
        rounded={"full"}
        transition={"background 0.3s ease"}
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Button>
    </Link>
  );
};

export default function Footer() {
  return (
    <Box
      borderTopWidth={"0.25px"}
      borderStyle={"solid"}
      borderColor={"#323238"}
    >
      <Container
        as={Stack}
        maxW={"container.xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <HStack align={"flex-end"}>
          <Heading size={"lg"}>Murilo Arelhano</Heading>
          <Text>© {new Date(Date.now()).getFullYear()}</Text>
        </HStack>
        <Menu />
        <Stack direction={"row"} align={"center"} spacing={6}>
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