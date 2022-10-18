import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

interface Props {
  userName: string;
  launchEden(): void;
}

const FinalOnboarding = ({ userName, launchEden }: Props) => {
  return (
    <>
      <Box
        width={50}
        height={50}
        bg="main"
        borderRadius={"full"}
        color="white"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        fontSize={"xs"}
        mb={"12px"}
      >
        <FaCheck />
      </Box>
      <Box mb={"10"}>
        <Heading fontSize={"2xl"} lineHeight={"short"} textAlign="center">
          Congratulations, {userName}!
        </Heading>
        <Text fontSize="sm" color={"gray.500"} fontWeight="bold" textAlign={"center"}>
          You have completed onboarding, you can start using the Eden!.
        </Text>
      </Box>
      <Stack maxW={"350px"} width="100%" spacing={5}>
        <Button
          width={"100%"}
          bg={"main"}
          color="white"
          size="md"
          fontSize={"xs"}
          _hover={{ bg: "#5438e2" }}
          _active={{ bg: "#5438e2", transform: "scale(0.98)" }}
          onClick={launchEden}
        >
          Launch Eden
        </Button>
      </Stack>
    </>
  );
};

export default FinalOnboarding;
