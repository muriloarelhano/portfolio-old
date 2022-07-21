import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

export interface SkillProps extends PropsWithChildren {
  title: string;
  level: number;
}

export const Skill: React.FC<SkillProps> = ({ level, title }) => {
  return (
    <VStack align={"start"}>
      <Heading size={"sm"}>{title}</Heading>
      <HStack>
        {Array.from(Array(5)).map((el, index) => {
          return (
            <Box
              borderRadius={"md"}
              height={2}
              width={6}
              key={index}
              bg={level >= index + 1 ? "teal" : "gray"}
            />
          );
        })}
      </HStack>
    </VStack>
  );
};
