import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { FaUserAlt, FaUsers } from "react-icons/fa";
import { EdenForType } from "../../pages";

interface Props {
  selectWorkspaceFor: EdenForType;
  onWorkspaceForChange(v: EdenForType): void;
}

const EdenFor = ({ selectWorkspaceFor, onWorkspaceForChange }: Props) => {
  return (
    <>
      <Box mb={"10"}>
        <Heading fontSize={"2xl"} lineHeight={"taller"}>
          How are you planning yo use Eden?
        </Heading>
        <Text
          fontSize="sm"
          color={"gray.500"}
          fontWeight="bold"
          textAlign={"center"}
        >
          We&apos;ll streamline your setup experience accordingly.
        </Text>
      </Box>
      <Stack maxW={"350px"} width="100%" spacing={5}>
        <Flex justifyContent={"space-between"}>
          <Box
            border={"1px"}
            padding="4"
            width={"160px"}
            borderColor={selectWorkspaceFor === "me" ? "main" : "gray.200"}
            borderRadius={"5px"}
            cursor="pointer"
            onClick={() => onWorkspaceForChange("me")}
          >
            <FaUserAlt
              style={{
                marginBottom: "8px",
                color: selectWorkspaceFor === "me" ? "#664de5" : "#151b28",
              }}
            />
            <Box>
              <Text fontWeight={"semibold"} mb="8px">
                For myself
              </Text>
              <Text fontSize={"sm"} color="gray.500">
                White better. Think more clearly. Stay organized.
              </Text>
            </Box>
          </Box>
          <Box
            cursor={"pointer"}
            border={"1px"}
            padding="4"
            width={"160px"}
            borderColor={selectWorkspaceFor !== "me" ? "main" : "gray.200"}
            borderRadius={"5px"}
            onClick={() => onWorkspaceForChange("team")}
          >
            <FaUsers
              style={{
                marginBottom: "8px",
                color: selectWorkspaceFor !== "me" ? "#664de5" : "#151b28",
              }}
            />
            <Box>
              <Text fontWeight={"semibold"} mb="8px">
                With my team
              </Text>
              <Text fontSize={"sm"} color="gray.500">
                White better. Think more clearly. Stay organized.
              </Text>
            </Box>
          </Box>
        </Flex>
        <Button
          width={"100%"}
          bg={"main"}
          color="white"
          size="md"
          fontSize={"xs"}
          _hover={{ bg: "#5438e2" }}
          _active={{ bg: "#5438e2", transform: "scale(0.98)" }}
          onClick={() => {}}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default EdenFor;
