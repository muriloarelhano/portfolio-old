"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
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
    <Box>
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
    </Box>
  );
};

export default function Footer() {
  return (
    <HStack
      justify={"center"}
      borderTopWidth={"0.25px"}
      borderStyle={"solid"}
      borderColor={"#323238"}
    >
      <Stack
        py={4}
        spacing={4}
        width={"100%"}
        maxW={"container.xl"}
        align={{ base: "center", md: "center" }}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
      >
        <Heading size={"lg"}>Murilo Arelhano</Heading>

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
      </Stack>
    </HStack>
  );
}
