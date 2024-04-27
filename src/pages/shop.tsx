import React from "react";
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

export default function ShopPage() {
  return (
    <MainLayout>
      <Flex flexDirection="row" p="4">
        <Card w="20%">
          <Box bg="gray" w="100%" h="200px" />
          <CardBody>Pack Name</CardBody>
          <Divider />
          <CardFooter>
            <Grid templateColumns="1fr 1fr 2fr" gap="4px">
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
      </Flex>
    </MainLayout>
  );
}
