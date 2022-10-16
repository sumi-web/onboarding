import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CustomInput from "../CustomInput";

const Form1 = () => {
  return (
    <>
      <Box mb={"10"}>
        <Heading fontSize={"3xl"} lineHeight={"taller"}>
          Welcome! First things first...
        </Heading>
        <Text
          fontSize="sm"
          color={"gray.500"}
          fontWeight="bold"
          textAlign={"center"}
        >
          You can always change them later.
        </Text>
      </Box>

      <Stack maxW={"350px"} width="100%" spacing={4}>
        <CustomInput
          labelText="Full Name"
          placeholder="Steve Jobs"
          inputName="fullName"
          type="text"
        />
        <CustomInput
          labelText="Display Name"
          placeholder="Steve"
          inputName="userName"
          type="text"
        />
        <Button
          bg={"main"}
          color="white"
          size="md"
          _hover={{ bg: "#5438e2" }}
          _active={{ bg: "#5438e2", transform: "scale(0.98)" }}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default Form1;
