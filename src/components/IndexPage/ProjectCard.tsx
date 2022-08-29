import {
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export interface ProjectCardProps {
  pageLink: string;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  pageLink,
  description,
  title,
  imageSrc,
  alt,
}) => {
  return (
    <VStack
      as={motion.div}
      rounded={"md"}
      border={"1px solid"}
      borderColor={"gray"}
      _hover={{
        cursor: "pointer",
        shadow: "lg",
      }}
      onClick={() => {
        window.location.href = pageLink;
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
    >
      <Image
        src={imageSrc}
        objectFit={"cover"}
        height={"200px"}
        width={"100%"}
        alt={alt}
        roundedTop={"md"}
      />
      <VStack
        p={3}
        align={"start"}
        height={"150px"}
        roundedBottom={"md"}
        mt={"0 !important"}
        bg={useColorModeValue("gray.100", "gray.800")}
      >
        <Heading fontSize={"x-large"}>{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </VStack>
  );
};
