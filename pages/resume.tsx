import React from "react";
import { Container } from "@chakra-ui/react";
import { HeaderResume } from "../src/components/resume/ResumeHeader";

export const ResumePage = () => {
  return <Container maxW={'container.md'}>
    <HeaderResume/>
  </Container>;
};
