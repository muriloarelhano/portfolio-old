import { Box, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Links } from "../data/links";

export interface LinkType {
  name: string;
  path: string;
}

const NavLink: React.FC<LinkType> = ({ name, path }) => (
  <Box>
    <Link href={path}>
      <Button variant={"ghost"}>{name}</Button>
    </Link>
  </Box>
);

export const Menu = () => {
  return (
    <HStack spacing={4}>
      {Links.map((link: any) => (
        <NavLink key={link.name} name={link.name} path={link.path} />
      ))}
    </HStack>
  );
};
