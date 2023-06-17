import { Box } from "@chakra-ui/react";

interface BodyWrapperProps {
  children: React.ReactNode;
}

export default function BodyWrapper({ children }: BodyWrapperProps) {
  return (
    <Box p={{ base: "20px", sm: "20px 100px" }} h="calc(100% - 88px)">
      {children}
    </Box>
  );
}
