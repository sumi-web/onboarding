import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { UserWorkspace } from "../../pages";
import CustomInput from "../CustomInput";

interface Props {
  data: UserWorkspace;
  errors: Partial<UserWorkspace>;
  onWorkSpaceChange(v: string): void;
  onUrlChange(v: string): void;
  onSubmit(): void;
}

const UserWorkspace = ({ data, errors, onWorkSpaceChange, onUrlChange, onSubmit }: Props) => {
  return (
    <>
      <Box mb={"10"}>
        <Heading fontSize={"2xl"} lineHeight={"taller"}>
          Let&apos;s set up a home for all your work
        </Heading>
        <Text fontSize="sm" color={"gray.500"} fontWeight="bold" textAlign={"center"}>
          You can always create another workspace later.
        </Text>
      </Box>
      <Stack maxW={"350px"} width="100%" spacing={4}>
        <CustomInput
          labelText="Workspace Name"
          error={errors?.workspaceName}
          placeholder="Eden"
          value={data.workspaceName}
          inputName="fullName"
          type="text"
          onChange={(e) => {
            onWorkSpaceChange(e.target.value);
          }}
        />
        <Flex direction={"column"}>
          <Text m={0} color={"gray.700"} fontWeight="medium" fontSize={"sm"} mb="6px">
            {"Workspace URL (optional)"}
          </Text>
          <InputGroup>
            <InputLeftAddon fontSize={"xs"} color="gray.500">
              www.eden.com/
            </InputLeftAddon>
            <Input
              type="text"
              value={data.url}
              _placeholder={{ color: "gray.300", fontSize: "sm" }}
              placeholder="example"
              _focusVisible={{
                borderColor: "#664de5",
                boxShadow: `0 0 0 1px #664de5`,
              }}
              onChange={(e) => {
                onUrlChange(e.target.value);
              }}
            />
          </InputGroup>
          {errors?.url && (
            <Text fontSize={"xs"} color="red">
              {errors?.url}
            </Text>
          )}
        </Flex>
        <Button
          bg={"main"}
          color="white"
          size="md"
          fontSize={"xs"}
          _hover={{ bg: "#5438e2" }}
          _active={{ bg: "#5438e2", transform: "scale(0.98)" }}
          onClick={onSubmit}
        >
          Create Workspace
        </Button>
      </Stack>
    </>
  );
};

export default UserWorkspace;
