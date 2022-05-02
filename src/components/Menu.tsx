import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Link,
  useColorModeValue,
  useDisclosure,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Blog",
    path: "blog",
  },
];

const NavLink: React.FunctionComponent<any> = ({ children }) => (
  <Link
    py={1}
    px={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
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
            <NavLink key={link.name}>{link.name}</NavLink>
          ))}
          <Button onClick={toggleColorMode} colorScheme={'gray'}>
            {colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
          </Button>
          <Button rounded={"full"}>Contact</Button>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name}>{link.name}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
