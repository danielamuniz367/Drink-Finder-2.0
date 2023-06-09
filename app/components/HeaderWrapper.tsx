import { Box, Flex } from "@chakra-ui/react";
import { Ref, forwardRef } from "react";

interface HeaderWrapperProps {
  children: React.ReactNode;
}

const HeaderWrapper = forwardRef(function HeaderWrapper(
  { children }: HeaderWrapperProps,
  ref: Ref<HTMLDivElement> | undefined
) {
  return (
    <Flex
      alignItems="center"
      minH="5em"
      bg="#015a6c"
      color="white"
      m={0}
      p={{ base: "10px", md: "20px" }}
      position="sticky"
      top={0}
      ref={ref}
      w="100%"
      zIndex="2"
    >
      {children}
    </Flex>
  );
});

export default HeaderWrapper;
