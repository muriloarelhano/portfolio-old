import { Box, Heading, Text } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

export interface EducationProps extends PropsWithChildren {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const Education: React.FC<EducationProps> = ({
  endDate,
  startDate,
  title,
  description,
}) => {
  return (
    <Box>
      <Heading size={"md"}>{title}</Heading>
      <Text fontSize={"sm"}>
        {startDate} - {endDate}
      </Text>
      <Text>{description}</Text>
    </Box>
  );
};
