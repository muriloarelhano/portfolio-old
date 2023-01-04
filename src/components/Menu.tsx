import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Links } from "../data/links";

export interface LinkType {
  name: string;
  path: string;
}

const NavLink: React.FC<LinkType> = ({ name, path }) => (
  <Link href={path}>
    <ChakraLink
      py={1}
      px={2}
      fontWeight={"medium"}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.700",
      }}
    >
      {name}
    </ChakraLink>
  </Link>
);

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <FaTimes /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link: any) => (
            <NavLink key={link.name} name={link.name} path={link.path} />
          ))}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={link.name}
                name={link.name}
                path={link.path}
              ></NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
