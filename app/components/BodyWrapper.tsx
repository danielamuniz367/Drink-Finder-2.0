import { Flex, ResponsiveValue } from "@chakra-ui/react";
import { useEffect } from "react";

interface BodyWrapperProps {
  children: React.ReactNode;
}

export default function BodyWrapper({ children }: BodyWrapperProps) {
  return (
    <Flex direction="column" w="500px" m="auto">
      {children}
    </Flex>
  );
}
