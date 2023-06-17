"use client";

import { Flex, Heading, Image } from "@chakra-ui/react";
import CocktailIcon from "./CocktailIcon";

export default function Header() {
  return (
    <Heading as="h3" size="xl">
      <Flex gap={2} align="flex-end">
        <i style={{ color: "pink" }}>
          <CocktailIcon width="48px" height="48px" backgroundColor="white" />
        </i>
        Thirsty Drink Finder
      </Flex>
    </Heading>
  );
}
