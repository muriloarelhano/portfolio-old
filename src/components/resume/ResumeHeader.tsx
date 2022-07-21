import {
  Button,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { FaPrint } from "react-icons/fa";
import MyFace from "../../../public/my-face.jpg";

export const ResumeHeader: React.FC<{ handler: any }> = ({ handler }) => {
  return (
    <HStack
      minWidth={"100%"}
      align={"start"}
      padding={"5"}
      gap={5}
      justify={"space-between"}
    >
      <HStack gap={5}>
        <Image
          src={MyFace.src}
          alt="My Face"
          height={28}
          width={28}
          borderRadius={"md"}
        />
        <VStack align={"left"}>
          <Heading>Murilo Arelhano</Heading>
          <Text>Full-Stack Developer</Text>
          <HStack>
            <Tag variant={"outline"}>FRONT-END</Tag>
            <Tag variant={"outline"}>BACK-END</Tag>
            <Tag variant={"outline"}>DEVOPS</Tag>
            <Tag variant={"outline"}>INFRA</Tag>
          </HStack>
        </VStack>
      </HStack>
      <Button variant={"outline"} onClick={handler}>
        <FaPrint />
      </Button>
    </HStack>
  );
};
