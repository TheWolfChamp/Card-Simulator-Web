import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Box, Card, Grid, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function CollectionsPage() {
  const packs = [
    {
      id: "pokemon-silver-tempest",
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
    {
      id: "pokemon-151",
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
    {
      id: "one-piece-op-1",
      packName: "One Piece Pack",
      imgUrl: "/",
    },
    {
      id: "one-piece-op-2",
      packName: "One Piece Pack",
      imgUrl: "/",
    },
  ];

  const handlePackClick = (packId: string) => {
    window.location.href = `/collections/${packId}`;
  };

  return (
    <MainLayout>
      <Grid templateColumns="repeat(5, 1fr)" gap="1rem">
        {packs?.map((pack, index) => (
          <Link key={index} as={NextLink} href={`/collections/${pack.id}`}>
            <Card w="100%">
              <Box
                bg="gray"
                _hover={{ bg: "gray.900" }}
                transition="background-color 0.3s"
                w="100%"
                h="200px"
                borderRadius="md"
              />
            </Card>
          </Link>
        ))}
      </Grid>
    </MainLayout>
  );
}
