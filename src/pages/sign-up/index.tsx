import React from "react";
import { useState } from "react";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import UsernameForm from "./_usernameForm";
import EmailForm from "./_emailForm";
import PasswordForm from "./_passwordForm";

export default function SignUpPage() {
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const handleSignUpClick = () => {
    console.log("form submitted");
  };
  return (
    <AuthLayout>
      <Flex
        direction="column"
        borderRadius="md"
        p="28px 32px"
        m="8px"
        gap="16px"
        boxShadow="md"
        width="400px"
      >
        <Text fontSize="xl" textAlign="center">
          Sign up
        </Text>
        <UsernameForm />
        <EmailForm />
        <PasswordForm />
        <Button colorScheme="blue" type="submit" onClick={handleSignUpClick}>
          Sign Up for CardSim!
        </Button>
      </Flex>
    </AuthLayout>
  );
}
