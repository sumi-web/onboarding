import { Box, Flex } from "@chakra-ui/react";

interface Props {
  currentStep: number;
  steps: { label: string }[];
}

const Stepper = ({ currentStep, steps }: Props) => {
  return (
    <div className="stepper">
      <Box>
        <Flex gap={"60px"} position="relative">
          {steps.map((step, i) => (
            <Box
              className={"circle " + (currentStep === i ? "active" : "")}
              key={i}
              width={35}
              height={35}
              bg="main"
              borderRadius={"full"}
              color="white"
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              fontSize={"xs"}
            >
              {step.label}
            </Box>
          ))}
        </Flex>
      </Box>
    </div>
  );
};

export default Stepper;
