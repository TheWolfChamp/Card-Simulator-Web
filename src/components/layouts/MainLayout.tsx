import React from "react";
import { Grid, GridItem, Divider } from "@chakra-ui/react";
import Header from "../header";
import Footer from "../footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Grid h="100vh" templateRows="64px 1px 1fr 1px 48px">
      <GridItem mx="5em">
        <Header />
      </GridItem>
      <Divider />
      <GridItem mx="5em" py="1em">
        {children}
      </GridItem>
      <Divider />
      <GridItem mx="5em">
        <Footer />
      </GridItem>
    </Grid>
  );
};
