import { Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import OnboardingLayout from "../components/OnboardingLayout";
import Form1 from "../components/Onboarding/Form1";
import Image from "next/image";
import { useState } from "react";
import Stepper from "../components/Stepper";

const Home: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [steps, setSteps] = useState([
    {
      label: "1",
    },
    {
      label: "2",
    },
    {
      label: "3",
    },
    {
      label: "4",
    },
  ]);

  return (
    <OnboardingLayout>
      <>
        <Flex align={"flex-end"} gap="8px" mb={"60px"}>
          <Image src="/images/logo.svg" alt="" height={40} width={40} />{" "}
          <Heading fontSize={"2xl"}>Eden</Heading>
        </Flex>
        {/* show steps here */}
        <Stepper currentStep={currentStep} steps={steps} />
        <Form1 />
      </>
    </OnboardingLayout>
  );
};

export default Home;
