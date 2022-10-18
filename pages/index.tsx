import { Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import OnboardingLayout from "../components/OnboardingLayout";
import UserInfo from "../components/Onboarding/UserInfo";
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

export interface UserWorkspace {
  workspaceName: string;
  url: string;
}

export type EdenForType = "me" | "team";

const Home: NextPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userName: "",
    fullName: "",
  });

  const [userWorkspace, setUserWorkspace] = useState({
    workspaceName: "",
    url: "",
  });

  const [selectWorkspaceFor, setSelectedWorkspaceFor] =
    useState<EdenForType>("me");

  const [currentStep, setCurrentStep] = useState(2);

  console.log("check value", userInfo);

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

  // helper functions for userInfo
  const handleFullNameChange = useCallback((value: string) => {
    setUserInfo((prev) => ({ ...prev, fullName: value }));
  }, []);

  const handleUserNameChange = useCallback((value: string) => {
    setUserInfo((prev) => ({ ...prev, userName: value }));
  }, []);

  const handleUserInfoFormSubmit = useCallback(() => {
    console.log("handle final submit");
    setCurrentStep((prev) => prev + 1);
  }, []);

  // helper functions for userInfo
  const handleWorkspaceChange = useCallback((value: string) => {
    setUserWorkspace((prev) => ({ ...prev, workspaceName: value }));
  }, []);

  const handleUrlChange = useCallback((value: string) => {
    setUserWorkspace((prev) => ({ ...prev, url: value }));
  }, []);

  const handleWorkspaceSubmit = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);

  // helper functions for eden for
  const handleWorkspaceForChange = useCallback((value: EdenForType) => {
    setSelectedWorkspaceFor(value);
  }, []);

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
          <UserInfo
            data={userInfo}
            onChangeFullNameChange={handleFullNameChange}
            onUserNameChange={handleUserNameChange}
            onSubmit={handleUserInfoFormSubmit}
          />
        ) : currentStep === 1 ? (
          <UserWorkspace
            data={userWorkspace}
            onWorkSpaceChange={handleWorkspaceChange}
            onUrlChange={handleUrlChange}
            onSubmit={handleWorkspaceSubmit}
          />
        ) : currentStep === 2 ? (
          <EdenFor
            selectWorkspaceFor={selectWorkspaceFor}
            onWorkspaceForChange={handleWorkspaceForChange}
          />
        ) : (
          currentStep === 3 && <FinalOnboarding />
        )}
      </>
    </OnboardingLayout>
  );
};

export default Home;
