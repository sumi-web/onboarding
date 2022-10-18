import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: JSX.Element;
}

const OnboardingLayout = ({ children }: Props) => {
  return (
    <Container maxW={"500px"} minHeight={{ base: "100%", sm: "100vh" }}>
      <Flex direction={"column"} justify="center" align={"center"} minHeight={{ base: "100%", sm: "100vh" }} mt={{ base: "20", sm: "0" }}>
        {children}
      </Flex>
    </Container>
  );
};

export default OnboardingLayout;
