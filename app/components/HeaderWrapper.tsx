import { Flex } from "@chakra-ui/react";
import { Ref, forwardRef } from "react";

interface HeaderWrapperProps {
  children: React.ReactNode;
  refHeight?: any;
}

const HeaderWrapper = forwardRef(function HeaderWrapper({
  children,
  refHeight,
}: HeaderWrapperProps) {
  return (
    <Flex
      minH="5em"
      bg="#58ABAE"
      color="white"
      alignItems="center"
      ref={refHeight}
    >
      {children}
    </Flex>
  );
});

export default HeaderWrapper;
