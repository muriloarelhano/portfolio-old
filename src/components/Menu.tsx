import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorModeValue,
  Link as ChakraLink,
  useDisclosure,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Link from "next/link";

interface LinkType extends PropsWithChildren {
  name: string;
  path: string;
}

const Links: LinkType[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
];

const NavLink: React.FC<LinkType> = ({ name, path }) => (
  <Link href={path}>
    <ChakraLink
      py={1}
      px={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {name}
    </ChakraLink>
  </Link>
);

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

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
          <Button onClick={toggleColorMode} colorScheme={"gray"}>
            {colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
          </Button>
          <Button
            rounded={"full"}
            onClick={() => {
              window.location.href = "/resume";
            }}
          >
            Contact
          </Button>
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
