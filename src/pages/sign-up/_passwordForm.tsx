import React from "react";
import { useState } from "react";
import { z, type ZodError } from "zod";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function PasswordForm() {
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [password2, setPassword2] = useState<string>("");
  const [password2Error, setPassword2Error] = useState<string>("");

  // TODO: combine schema into 1
  const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(64, "Password must be less than 64 characters long.");

  const password2Schema = z
    .object({
      password: z
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .max(64, "Password must be less than 64 characters long."),
      password2: z.string(),
    })
    .refine((data) => data.password === data.password2, {
      message: "Passwords must match.",
      path: ["password2"],
    });

  const validatePasswordSchema = (passwordInput: string) => {
    const result = passwordSchema.safeParse(passwordInput);
    if (result.success) {
      setPasswordError("");
    } else {
      const error: ZodError = result.error;
      const errorMessage = error.errors[0]?.message;
      setPasswordError(errorMessage ? errorMessage : "");
    }
    setPassword(passwordInput);
  };

  const validatePassword2Schema = (password2Input: string) => {
    const result = password2Schema.safeParse({
      password: password,
      password2: password2Input,
    });
    if (result.success) {
      setPassword2Error("");
    } else {
      const error: ZodError = result.error;
      const errorMessage = error.errors[0]?.message;
      setPassword2Error(errorMessage ? errorMessage : "");
    }
    setPassword2(password2Input);
  };

  return (
    <>
      <FormControl isRequired isInvalid={passwordError !== ""}>
        <FormLabel>Password</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => validatePasswordSchema(e.target.value)}
        />
        {passwordError === "" ? (
          ""
        ) : (
          <FormHelperText>{passwordError}</FormHelperText>
        )}
      </FormControl>

      <FormControl isRequired isInvalid={password2Error !== ""}>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          id="password2"
          type="password"
          placeholder="********"
          value={password2}
          onChange={(e) => validatePassword2Schema(e.target.value)}
        />
        {password2Error === "" ? (
          ""
        ) : (
          <FormHelperText>{password2Error}</FormHelperText>
        )}
      </FormControl>
    </>
  );
}
