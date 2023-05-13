import { Box, Heading, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

export interface ExperienceProps extends PropsWithChildren {
  title: string;
  startDate: string;
  endDate: string;
  activities: string[];
  employer?: string;
}

export const Experience: React.FC<ExperienceProps> = ({
  endDate,
  startDate,
  title,
  activities,
  employer,
}) => {
  return (
    <Box>
      <Heading size={"md"}>
        {title}
        {employer ? "," : ""} {employer}
      </Heading>
      <Text fontSize={"sm"}>
        {startDate} - {endDate}
      </Text>
      <UnorderedList marginLeft={8} mt={2}>
        {activities.map((activity, index) => (
          <ListItem key={index}>{activity}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
