import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import {
  Text,
  UnorderedList,
  ListItem,
  Link,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function CreditsPage() {
  return (
    <MainLayout>
      <main>
        <Stack gap="2">
          <div>
            <Text as="b" fontSize="xl">
              Art and Company Credits
            </Text>
            <Text>
              Original card art and content are from their respective companies,
              including, but not limited to:
            </Text>
            <UnorderedList>
              <ListItem>Nintendo, GameFreak, and The Pokémon Company</ListItem>
              <ListItem>Bandai and One Piece</ListItem>
            </UnorderedList>
          </div>
          <Spacer />
          <div>
            <Text as="b" fontSize="xl">
              API Credits
            </Text>
            <Text>
              Card pricing is sourced from third-party API, including, but not
              limited to:
            </Text>
            <UnorderedList>
              <ListItem>
                <Link
                  as={NextLink}
                  href="https://docs.pokemontcg.io/"
                  isExternal
                >
                  Pokemon TCG
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  as={NextLink}
                  href="https://www.pricecharting.com/api-documentation/"
                  isExternal
                >
                  Price Charting
                </Link>
              </ListItem>
            </UnorderedList>
          </div>
        </Stack>
      </main>
    </MainLayout>
  );
}
