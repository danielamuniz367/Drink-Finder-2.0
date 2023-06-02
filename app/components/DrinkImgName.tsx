import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

export interface DrinkImageNameProps {
  strDrink: string;
  strDrinkThumb: string | undefined;
}

export default function DrinkImageName({
  strDrink,
  strDrinkThumb,
}: DrinkImageNameProps) {
  return (
    <Flex direction="row">
      <Image boxSize="40px" src={strDrinkThumb} />
      <Text fontSize="xl">{strDrink}</Text>
    </Flex>
  );
}
