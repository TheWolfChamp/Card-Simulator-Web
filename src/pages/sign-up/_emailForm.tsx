import React from "react";
import { useState } from "react";
import { z, type ZodError } from "zod";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function EmailForm() {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const emailSchema = z
    .string()
    .email("Email must be valid.")
    .min(4, "Email must be at least 4 characters long.")
    .max(64, "Emails should be less than 64 characters long.");
  const validateEmailSchema = (emailInput: string) => {
    const result = emailSchema.safeParse(emailInput);
    if (result.success) {
      setEmailError("");
    } else {
      const error: ZodError = result.error;
      const errorMessage = error.errors[0]?.message;
      setEmailError(errorMessage ? errorMessage : "");
    }
    setEmail(emailInput);
  };

  return (
    <FormControl isRequired isInvalid={emailError !== ""}>
      <FormLabel>Email Address</FormLabel>
      <Input
        id="email"
        type="email"
        placeholder="john.doe@domain.com"
        value={email}
        onChange={(e) => validateEmailSchema(e.target.value)}
      />
      {emailError === "" ? "" : <FormHelperText>{emailError}</FormHelperText>}
    </FormControl>
  );
}
