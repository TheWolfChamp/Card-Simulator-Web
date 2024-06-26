import React from "react";
import Head from "next/head";
import { Center, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Footer from "../footer";

interface AuthLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title ? title + " | " : ""} Card Simulator`}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <meta name="author" content="Brandon Ongtingco and Quyen Huynh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid h="100vh" templateRows="64px 1px 1fr 1px 48px">
        <GridItem mx="5em">
          <Center height="100%">
            <Text fontSize="2xl" as="b">
              Card Simulation
            </Text>
          </Center>
        </GridItem>
        <Divider />
        <GridItem
          mx="5em"
          py="4em"
          display="flex"
          flexDirection="column"
          // justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          {children}
        </GridItem>
        <Divider />
        <GridItem mx="5em">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};
