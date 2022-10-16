import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: JSX.Element;
}

const OnboardingLayout = ({ children }: Props) => {
  return (
    <Container maxW={"500px"} minHeight="100vh">
      <Flex
        direction={"column"}
        justify="center"
        align={"center"}
        height={"100vh"}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default OnboardingLayout;
