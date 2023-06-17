import { Flex } from "@chakra-ui/react";
import CocktailIcon from "./CocktailIcon";

export default function Loading() {
  return (
    <Flex direction="row" m="0 auto" pt={2} color="white" w="100%">
      Loading <CocktailIcon height="20px" width="20px" />
      ...
    </Flex>
  );
}
