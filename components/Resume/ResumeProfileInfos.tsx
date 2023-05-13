import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaMailBulk, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

export const ResumeProfileInfos: React.FC = () => {
  return (
    <HStack padding={"5"} gap={10} align={"center"}>
      <Link
        href="mailto:murilo.arelhano@hotmail.com"
        display={"flex"}
        alignItems={"center"}
      >
        <FaMailBulk style={{ marginRight: 10 }} /> murilo.arelhano@hotmail.com
      </Link>
      <Link href="tel:+5567981874221" display={"flex"} alignItems={"center"}>
        <FaPhone style={{ marginRight: 10 }} />
        +55 (67) 98187-4221
      </Link>
      <HStack>
        <FaMapMarkedAlt style={{ marginRight: 10 }} />
        <Text>Tupi Paulista - SP - Brazil</Text>
      </HStack>
    </HStack>
  );
};
