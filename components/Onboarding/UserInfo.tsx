import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { UserInfo } from "../../pages";
import CustomInput from "../CustomInput";

interface Props {
  data: UserInfo;
  errors: Partial<UserInfo>;
  onChangeFullNameChange(v: string): void;
  onUserNameChange(v: string): void;
  onSubmit(): void;
}

const UserInfo = ({
  data,
  errors,
  onChangeFullNameChange,
  onUserNameChange,
  onSubmit,
}: Props) => {
  return (
    <>
      <Box mb={"10"}>
        <Heading fontSize={"2xl"} lineHeight={"taller"}>
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

      <Stack maxW={"350px"} width="100%" spacing={5}>
        <CustomInput
          value={data.fullName}
          error={errors?.fullName}
          labelText="Full Name"
          placeholder="Steve Jobs"
          inputName="fullName"
          type="text"
          onChange={(e) => {
            onChangeFullNameChange(e.target.value);
          }}
        />
        <CustomInput
          value={data.userName}
          error={errors?.userName}
          labelText="Display Name"
          placeholder="Steve"
          inputName="userName"
          type="text"
          onChange={(e) => {
            onUserNameChange(e.target.value);
          }}
        />
        <Button
          bg={"main"}
          color="white"
          size="md"
          fontSize={"xs"}
          _hover={{ bg: "#5438e2" }}
          _active={{ bg: "#5438e2", transform: "scale(0.98)" }}
          onClick={onSubmit}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default UserInfo;
