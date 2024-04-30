import React, { useState } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Pack from "@/types/pack.types";

export default function ShopPage() {
  // const [packs, setPacks] = useState<Pack[] | null>(null);

  const packs = [
    {
      packId: "pack-id-1",
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
    {
      packId: "pack-id-2",
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
    {
      packId: "pack-id-3",
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
    {
      packId: "pack-id-4",
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
  ];

  const [openPackCount, setOpenPackCount] = useState<number>(0);

  function addPackToCart(index: string, quantity: number) {
    setOpenPackCount(openPackCount + quantity);
    console.log(`index: ${index}, quantity: ${quantity}`);
  }

  return (
    <MainLayout>
      <Center>
        <Button colorScheme="green" size="lg">
          {openPackCount ? `Open ${openPackCount} Packs` : "Add Packs to Cart"}
        </Button>
      </Center>
      <Flex flexDirection="row" overflowX="visible" gap="1rem" p="4">
        {packs?.map((pack, index) => (
          <Card key={index} w="20%">
            <Box bg="gray" w="100%" h="200px" borderTopRadius="md" />
            <CardBody>{pack.packName}</CardBody>
            <Divider />
            <CardFooter>
              <Spacer />
              <Center>
                <Button
                  colorScheme="blue"
                  onClick={() => addPackToCart(pack.packId, 1)}
                >
                  Add to Cart
                </Button>
              </Center>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </MainLayout>
  );
}
