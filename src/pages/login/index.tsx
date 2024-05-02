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

export default function LoginPage() {
  return (
    <AuthLayout>
      <Text fontSize="xl">Sign in</Text>
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
          <Link as={NextLink} href="/" fontSize="sm">
            Forgot password?
          </Link>
        </FormControl>
        <Button colorScheme="blue">Sign In</Button>
      </Flex>
    </AuthLayout>
  );
}
