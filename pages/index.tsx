import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Text } from "@chakra-ui/react";

import OnboardingLayout from "../components/OnboardingLayout";
import CustomInput from "../components/CustomInput";
import Form1 from "../components/Onboarding/Form1";

const Home: NextPage = () => {
  return (
    <OnboardingLayout>
      {/* show steps here */}
      <>
        <Form1 />
      </>
    </OnboardingLayout>
  );
};

export default Home;
