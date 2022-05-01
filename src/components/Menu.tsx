import React from "react";
import Link from "next/link";
import { Button, HStack } from "@chakra-ui/react";

const links = [
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

export const Menu: React.FunctionComponent = () => {
  return (
    <HStack gap={6}>
      {links.map((value, index) => (
        <Link key={index} href={"#" + value.path}>
          {value.name}
        </Link>
      ))}
      <Button rounded={"full"}>Contact Me</Button>
    </HStack>
  );
};
