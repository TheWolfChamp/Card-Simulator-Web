import React, { useState } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  Box,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
} from "@chakra-ui/react";
import Pack from "@/types/pack.types";

export default function ShopPage() {
  // const [packs, setPacks] = useState<Pack[] | null>(null);
  const packs = [
    {
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
    {
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
    {
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
    {
      packName: "Pokemon Pack",
      imgUrl: "/",
    },
  ];

  return (
    <MainLayout>
      <Flex flexDirection="row" overflowX="visible" gap="1rem" p="4">
        {packs?.map((pack, index) => (
          <Card key={index} w="20%">
            <Box bg="gray" w="100%" h="200px" borderTopRadius="md" />
            <CardBody>{pack.packName}</CardBody>
            <Divider />
            <CardFooter>
              <Grid templateColumns=".5fr 1fr 2fr" gap="4px">
                <Spacer />
                <NumberInput
                  defaultValue={1}
                  min={1}
                  max={99}
                  clampValueOnBlur={false}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Button colorScheme="blue">Add to Cart</Button>
                {/* <Button colorScheme="blue">Buy Now</Button> */}
              </Grid>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </MainLayout>
  );
}
