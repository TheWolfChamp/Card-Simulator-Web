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
import { z } from "zod";

const User = z.object({
  username: z.string().min(3).max(16),
  email: z.string().email(),
  password: z.string(),
  password2: z.string(),
});

export default function SignUpPage() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const handleSignUpClick = () => {
    type User = z.infer<typeof User>;
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
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            id="username"
            type="text"
            placeholder="smthboutyou24"
            value={username}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@domain.com"
            value={email}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="********"
            value={password}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            id="password2"
            type="password"
            placeholder="********"
            value={password2}
          />
        </FormControl>
        <Button colorScheme="blue" type="submit" onClick={handleSignUpClick}>
          Sign Up for CardSim!
        </Button>
      </Flex>
    </AuthLayout>
  );
}
