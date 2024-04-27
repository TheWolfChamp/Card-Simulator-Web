import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function DisclaimerPage() {
  return (
    <MainLayout>
      We are not affiliated with Nintendo, GameFreak, The Pokémon Company,
      Bandai, One Piece, or any other art associated with these cards. Please
      see{" "}
      <Link as={NextLink} href="/credits">
        Credits
      </Link>{" "}
      for more detailed information.
    </MainLayout>
  );
}
