"use client";

import NextLink from "next/link";
import { Flex, Heading, Link } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import CocktailIcon from "@/app/components/CocktailIcon";

export default function BackButton() {
  return (
    <Heading size="md" ml={4}>
      <Link as={NextLink} href="/">
        <Flex alignItems="center" direction="row" gap={2}>
          <ArrowLeftIcon />
        </Flex>
      </Link>
    </Heading>
  );
}
