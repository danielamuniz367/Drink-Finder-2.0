"use client";

import NextLink from "next/link";
import { Heading, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Heading>
      <Link as={NextLink} href="/">
        Thirsty Drink Finder
      </Link>
    </Heading>
  );
}
