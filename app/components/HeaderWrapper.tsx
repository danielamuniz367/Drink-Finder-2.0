import { Flex } from "@chakra-ui/react";
import { Ref, forwardRef } from "react";

interface HeaderWrapperProps {
  children: React.ReactNode;
}

const HeaderWrapper = forwardRef(function HeaderWrapper(
  { children }: HeaderWrapperProps,
  ref: Ref<HTMLDivElement> | undefined
) {
  return (
    <Flex minH="5em" bg="#58ABAE" color="white" alignItems="center" ref={ref}>
      {children}
    </Flex>
  );
});

export default HeaderWrapper;
