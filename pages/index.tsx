import { Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import OnboardingLayout from "../components/OnboardingLayout";
import Form1 from "../components/Onboarding/UserInfo";
import Image from "next/image";
import { useCallback, useState } from "react";
import Stepper from "../components/Stepper";
import UserWorkspace from "../components/Onboarding/UserWorkspace";
import EdenFor from "../components/Onboarding/EdenFor";
import FinalOnboarding from "../components/Onboarding/FinalOnboarding";

export interface UserInfo {
  userName: string;
  fullName: string;
}

const Home: NextPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userName: "",
    fullName: "",
  });
  const [currentStep, setCurrentStep] = useState(3);

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

  const handleFullNameChange = useCallback((value: string) => {
    setUserInfo((prev) => ({ ...prev, fullName: value }));
  }, []);

  const handleUserNameChange = useCallback((value: string) => {
    setUserInfo((prev) => ({ ...prev, userName: value }));
  }, []);

  const handleUserInfoFormSubmit = useCallback(() => {}, []);

  const checkForErrorsInForm1 = () => {};

  return (
    <OnboardingLayout>
      <>
        <Flex align={"flex-end"} gap="8px" mb={"60px"}>
          <Image src="/images/logo.svg" alt="" height={40} width={40} />{" "}
          <Heading fontSize={"2xl"}>Eden</Heading>
        </Flex>
        {/* show steps here */}
        <Stepper currentStep={currentStep} steps={steps} />
        {currentStep === 0 ? (
          <Form1
            data={userInfo}
            onChangeFullNameChange={handleFullNameChange}
            onUserNameChange={handleUserNameChange}
            onUserInfoFormSubmit={handleUserInfoFormSubmit}
          />
        ) : currentStep === 1 ? (
          <UserWorkspace />
        ) : currentStep === 2 ? (
          <EdenFor />
        ) : (
          currentStep === 3 && <FinalOnboarding />
        )}
      </>
    </OnboardingLayout>
  );
};

export default Home;
