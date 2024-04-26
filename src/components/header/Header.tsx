import React from "react";
import { Spacer, Link, Text, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import useGetAccountInformation from "@/utils/useGetAccountInfo";

export default function Header() {
  const acc = useGetAccountInformation();
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "Collection",
      href: "/collections",
    },
    {
      title: "Profile",
      href: `/users/${acc.username}`,
    },
  ];

  return (
    <HStack h="100%">
      <Text fontSize="2xl" as="b">
        Card Simulation
      </Text>
      <Spacer />
      <HStack>
        {navLinks.map((link, index) => (
          <Link key={index} as={NextLink} href={link.href}>
            {link.title}
          </Link>
        ))}
      </HStack>
    </HStack>
  );
}
