import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface SkillCardProps {
  title: string;
  color: any;
  description?: string;
  Icon: IconType;
}

export const SkillCard: React.FunctionComponent<SkillCardProps> = ({
  title,
  color,
  Icon,
  description,
}) => {
  return (
    <HStack
      align={"center"}
      bg={"#121214"}
      border={"solid 0.25px #323238"}
      p={6}
      rounded={"md"}
    >
      <Box color={color} mr={"2"}>
        <Icon size={45} />
      </Box>
      <VStack align={"start"}>
        <Heading size={"md"}>{title}</Heading>
        {description && <Text>{description}</Text>}
      </VStack>
    </HStack>
  );
};
