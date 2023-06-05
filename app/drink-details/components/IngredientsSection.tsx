import {
  Flex,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { IngredientsMeasurmentsProps } from "./DrinkDetails";

export interface IngredientsMeasurmentsListProps {
  list: IngredientsMeasurmentsProps[];
}

export default function IngredientsSection({
  list,
}: IngredientsMeasurmentsListProps) {
  const listItems = list.map((ing, i) => (
    <ListItem key={`ingredient-${i}`}>
      {ing.ingredient} ({ing.measurement})
    </ListItem>
  ));
  return (
    <Stack>
      <Heading size="md">Ingredients</Heading>
      <UnorderedList listStyleType="none" m={0}>
        {listItems}
      </UnorderedList>
    </Stack>
  );
}
