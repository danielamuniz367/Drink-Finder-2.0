import { Flex, ResponsiveValue } from "@chakra-ui/react";
import { useEffect } from "react";

interface BodyWrapperProps {
  children: React.ReactNode;
}

export default function BodyWrapper({ children }: BodyWrapperProps) {
  return (
    <Flex direction="column" w={{ base: "100%", md: "75%" }} m="auto">
      {children}
    </Flex>
  );
}
