import React from "react";
import { Text, HStack, Link, Spacer, Hide } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  return (
    <HStack h="100%">
      <Hide below="md">
        <Text>(c) Brandon Ongtingco and Quyen Huynh</Text>
        <Spacer />
      </Hide>
      <HStack>
        <Link as={NextLink} href="/privacy">
          Privacy
        </Link>
        <Link as={NextLink} href="/terms">
          Terms
        </Link>
        <Link as={NextLink} href="/disclaimer">
          Disclaimer
        </Link>
        <Link as={NextLink} href="/credits">
          Credits
        </Link>
      </HStack>
    </HStack>
  );
}
