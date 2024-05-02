import React from "react";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <Text fontSize="xl">Sign up</Text>
      <Flex
        direction="column"
        borderRadius="md"
        p="28px 32px"
        m="8px"
        gap="16px"
        boxShadow="md"
        width="400px"
      >
        <FormControl isRequired>
          <FormLabel>Username or Email Address</FormLabel>
          <Input type="email" placeholder="john.doe@domain.com" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="********" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" placeholder="********" />
        </FormControl>
        <Button colorScheme="blue">Sign Up for CardSim!</Button>
      </Flex>
    </AuthLayout>
  );
}
