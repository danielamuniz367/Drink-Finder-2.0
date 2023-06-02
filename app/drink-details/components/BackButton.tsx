"use client";

import NextLink from "next/link";
import { Heading, Link } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function BackButton() {
  return (
    <Heading size="md">
      <Link as={NextLink} href="/">
        <ArrowBackIcon /> Back to drink search
      </Link>
    </Heading>
  );
}
