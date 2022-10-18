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
          {steps.map((step, i) => {
            const showActiveCircle = currentStep === i || currentStep > i ? true : false;

            return (
              <Box
                className={"circle " + (currentStep === i ? "active" : "")}
                key={i}
                width={35}
                height={35}
                bg={showActiveCircle ? "main" : "white"}
                borderRadius={"full"}
                color={!showActiveCircle ? "gray.900" : "white"}
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                fontSize={"xs"}
                border="1px"
                borderColor={showActiveCircle ? "main" : "gray.200"}
              >
                {step.label}
              </Box>
            );
          })}
        </Flex>
      </Box>
    </div>
  );
};

export default Stepper;
