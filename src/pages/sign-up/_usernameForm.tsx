import React from "react";
import { useState } from "react";
import { z, type ZodError } from "zod";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function UsernameForm() {
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const usernameAcceptedCharacters = /^[a-zA-Z0-9]+$/;
  const usernameSchema = z
    .string()
    .min(4, "Username must be at least 4 characters long.")
    .max(16, "Username must be less than 16 characters long.")
    .regex(usernameAcceptedCharacters, "Username must be alphanumeric.");

  const validateUsername = (usernameInput: string) => {
    const result = usernameSchema.safeParse(usernameInput);
    if (result.success) {
      setUsernameError("");
    } else {
      const error: ZodError = result.error;
      const errorMessage = error.errors[0]?.message;
      setUsernameError(errorMessage ? errorMessage : "");
    }
    setUsername(usernameInput);
  };
  return (
    <FormControl isRequired isInvalid={usernameError !== ""}>
      <FormLabel>Username</FormLabel>
      <Input
        id="username"
        type="text"
        placeholder="smthboutyou24"
        value={username}
        onChange={(e) => validateUsername(e.target.value)}
      />
      {usernameError === "" ? (
        ""
      ) : (
        <FormHelperText>{usernameError}</FormHelperText>
      )}
    </FormControl>
  );
}
