import { Box, Flex, Image, Text } from "@chakra-ui/react";

export interface DrinkImageNameProps {
  strDrink: string;
  strDrinkThumb: string | undefined;
}

export default function DrinkImageName({
  strDrink,
  strDrinkThumb,
}: DrinkImageNameProps) {
  return (
    <Flex direction="row" gap={2}>
      <Image borderRadius="full" boxSize="40px" src={strDrinkThumb} />
      <Text fontSize="xl">{strDrink}</Text>
    </Flex>
  );
}
