import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Stack, Text, Spacer } from "@chakra-ui/react";

export default function TermsPage() {
  return (
    <MainLayout>
      <Stack gap="2">
        <div>
          <Text fontSize="xl" as="b">
            Terms and Conditions
          </Text>
          <Text>
            By using our site, you acknowledge that these packs are only
            simulations. They may not represent your real buying experience. You
            also acknowledge that any &quot;shopping&quot; done is only virtual
            and no real card packs will be sent.
          </Text>
        </div>
      </Stack>
    </MainLayout>
  );
}
