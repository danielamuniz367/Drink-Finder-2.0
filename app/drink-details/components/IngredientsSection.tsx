import {
  Container,
  Flex,
  Heading,
  ListItem,
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
      {ing.ingredient}
      {ing.measurement}
    </ListItem>
  ));
  return (
    <Flex direction="column">
      <Heading>Ingredients</Heading>
      <Container>
        <UnorderedList>{listItems}</UnorderedList>
      </Container>
    </Flex>
  );
}
