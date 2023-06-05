import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export interface DrinkImageNameProps {
  strDrink: string;
  strDrinkThumb: string | undefined;
  result?: boolean;
}

export default function DrinkImageName({
  strDrink,
  strDrinkThumb,
  result,
}: DrinkImageNameProps) {
  const pt = result ? "2rem" : "0";
  const direction = result ? "column" : "row";
  const boxSize = result ? "200px" : "40px";
  const name = result ? (
    <Heading size="md">{strDrink}</Heading>
  ) : (
    <Text fontSize="lg">{strDrink}</Text>
  );

  return (
    <Flex direction={direction} gap={2} alignItems="center">
      <Image borderRadius="full" boxSize={boxSize} src={strDrinkThumb} />
      {name}
    </Flex>
  );
}
