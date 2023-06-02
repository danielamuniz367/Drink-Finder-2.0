import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

interface HeaderWrapperProps {
  children: React.ReactNode;
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  return (
    <Box minH="5em" bg="#374259" color="white">
      {children}
    </Box>
  );
}
