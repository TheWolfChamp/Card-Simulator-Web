import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Text, Spacer, Stack } from "@chakra-ui/react";

export default function PrivacyPage() {
  return (
    <MainLayout>
      <Stack gap="2">
        <div>
          <Text fontSize="xl" as="b">
            Cookies
          </Text>
          <Text>
            We use cookies to store your session data, such as your light/dark
            mode preferences. If you choose to opt out, please note that your
            preferences will not be saved the next time you open this page.
          </Text>
        </div>
        <Spacer />
        <div>
          <Text fontSize="xl" as="b">
            Logging
          </Text>
          <Text>
            We only log what is necessary for debugging. This may include, but
            is not limited to: your username, IP address, browser and browser
            version, and interactions with buttons.
          </Text>
        </div>
      </Stack>
    </MainLayout>
  );
}
