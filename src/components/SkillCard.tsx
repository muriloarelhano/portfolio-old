import { IconType } from "react-icons/lib";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";

interface SkillCardProps {
  title: string;
  description: string;
  color: any;
  backgroundColor: string;
  Icon: IconType
}

export const SkillCard: React.FunctionComponent<SkillCardProps> = ({
  title,
  description,
  color,
  backgroundColor,
  Icon,
}) => {
  return (
    <HStack
      gap={4}
      p={3}
      align={"start"}
      maxW={80}
      minW={80}
      border="1px"
      borderColor={"gray.200"}
      rounded={"md"}
    >
      <Box
        bg={backgroundColor}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        boxSize={20}
        minW={20}
        rounded={"md"}
        color={color}
      >
        <Icon size={45} />
      </Box>
      <VStack align={"start"}>
        <Heading size={"md"}>{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
};
