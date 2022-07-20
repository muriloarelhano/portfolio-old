import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaMailBulk, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

export const ResumeProfileInfos: React.FC = () => {
  return (
    <HStack padding={"5"} gap={10} align={"center"}>
      <Link href="mailto:murilo.arelhano@hotmail.com">
        <FaMailBulk style={{ marginRight: 10 }} /> murilo.arelhano@hotmail.com
      </Link>
      <Link href="tel:+5567981874221">
        <FaPhone style={{ marginRight: 10 }} />
        +55 (67) 98187-4221
      </Link>
      <Text>
        <FaMapMarkedAlt style={{ marginRight: 10 }} />
        Campo Grande - MS - Brazil
      </Text>
    </HStack>
  );
};
