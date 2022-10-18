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

  const [userInfoErrors, setUserInfoErrors] = useState<Partial<UserInfo>>({});

  const [userWorkspace, setUserWorkspace] = useState<UserWorkspace>({
    workspaceName: "",
    url: "",
  });

  const [userWorkspaceErrors, setUserWorkspaceErrors] = useState<Partial<UserWorkspace>>({});

  const [selectWorkspaceFor, setSelectedWorkspaceFor] = useState<EdenForType>("me");

  const [currentStep, setCurrentStep] = useState(0);

  console.log("check value", userInfoErrors);

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
  const handleFullNameChange = useCallback(
    (value: string) => {
      setUserInfo((prev) => ({ ...prev, fullName: value }));
      if (value) {
        if ("fullName" in userInfoErrors) {
          const errors = { ...userInfoErrors };
          delete errors.fullName;
          setUserInfoErrors(errors);
        }
      }
    },
    [userInfoErrors]
  );

  const handleUserNameChange = useCallback(
    (value: string) => {
      setUserInfo((prev) => ({ ...prev, userName: value }));
      if (value) {
        if ("userName" in userInfoErrors) {
          const errors = { ...userInfoErrors };
          delete errors.userName;
          setUserInfoErrors(errors);
        }
      }
    },
    [userInfoErrors]
  );

  const handleUserInfoFormSubmit = useCallback(() => {
    const errors = checkForErrorsInForm1();

    if (Object.keys(errors).length === 0) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setUserInfoErrors(errors);
    }
  }, [userInfo]);

  // helper functions for userInfo
  const handleWorkspaceChange = useCallback((value: string) => {
    setUserWorkspace((prev) => ({ ...prev, workspaceName: value }));
    if (value) {
      if ("workspaceName" in userWorkspaceErrors) {
        const errors = { ...userWorkspaceErrors };
        delete errors.workspaceName;
        setUserWorkspaceErrors(errors);
      }
    }
  }, []);

  const handleUrlChange = useCallback((value: string) => {
    setUserWorkspace((prev) => ({ ...prev, url: value }));
    if (value) {
      if ("url" in userWorkspaceErrors) {
        const errors = { ...userWorkspaceErrors };
        delete errors.url;
        setUserWorkspaceErrors(errors);
      }
    }
  }, []);

  const handleWorkspaceSubmit = useCallback(() => {
    const errors = checkForErrorsInForm2();

    if (Object.keys(errors).length === 0) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setUserWorkspaceErrors(errors);
    }
  }, [userWorkspace]);

  // helper functions for eden for
  const handleWorkspaceForChange = useCallback((value: EdenForType) => {
    setSelectedWorkspaceFor(value);
  }, []);

  const handleWorkspaceForSubmit = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);

  // helper functions for final screen
  const launchEden = () => {
    setCurrentStep(0);
    setUserInfo({ fullName: "", userName: "" });
    setUserWorkspace({
      workspaceName: "",
      url: "",
    });
  };

  const checkForErrorsInForm1 = () => {
    const errors = { ...userInfoErrors };

    if (!userInfo.fullName.trim()) {
      errors.fullName = "Full name is required";
    } else if (userInfo.fullName.trim().length < 3) {
      errors.fullName = "Full name should be more than 2 characters";
    } else {
      delete errors.fullName;
    }

    if (!userInfo.userName?.trim()) {
      errors.userName = "username is required";
    } else if (userInfo.userName.trim().length < 3) {
      errors.userName = "username should be more than 2 characters";
    } else {
      delete errors.userName;
    }

    return errors;
  };

  const checkForErrorsInForm2 = () => {
    const errors = { ...userWorkspaceErrors };

    if (!userWorkspace.workspaceName.trim()) {
      errors.workspaceName = "workspace name is required";
    } else if (userWorkspace.workspaceName.trim().length < 3) {
      errors.workspaceName = "workspace name should be more than 2 characters";
    } else {
      delete errors.workspaceName;
    }

    if (!userWorkspace.url?.trim()) {
      errors.url = "workspace URL is required";
    } else if (userWorkspace.url.trim().length < 3) {
      errors.url = "workspace URL should be more than 2 characters";
    } else {
      delete errors.url;
    }

    return errors;
  };

  return (
    <OnboardingLayout>
      <>
        <Flex align={"flex-end"} gap="8px" mb={"60px"}>
          <Image src="/images/logo.svg" alt="" height={40} width={40} /> <Heading fontSize={"2xl"}>Eden</Heading>
        </Flex>
        {/* show steps here */}
        <Stepper currentStep={currentStep} steps={steps} />
        {currentStep === 0 ? (
          <UserInfo
            data={userInfo}
            errors={userInfoErrors}
            onChangeFullNameChange={handleFullNameChange}
            onUserNameChange={handleUserNameChange}
            onSubmit={handleUserInfoFormSubmit}
          />
        ) : currentStep === 1 ? (
          <UserWorkspace
            data={userWorkspace}
            errors={userWorkspaceErrors}
            onWorkSpaceChange={handleWorkspaceChange}
            onUrlChange={handleUrlChange}
            onSubmit={handleWorkspaceSubmit}
          />
        ) : currentStep === 2 ? (
          <EdenFor selectWorkspaceFor={selectWorkspaceFor} onWorkspaceForChange={handleWorkspaceForChange} onSubmit={handleWorkspaceForSubmit} />
        ) : (
          currentStep === 3 && <FinalOnboarding userName={userInfo.userName} launchEden={launchEden} />
        )}
      </>
    </OnboardingLayout>
  );
};

export default Home;
