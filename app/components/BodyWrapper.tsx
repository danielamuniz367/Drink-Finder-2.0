import { Flex } from "@chakra-ui/react";

interface BodyWrapperProps {
  height?: string | null;
  children: React.ReactNode;
}

export default function BodyWrapper({ children, height }: BodyWrapperProps) {
  console.log(height);
  return <Flex direction="column">{children}</Flex>;
}
