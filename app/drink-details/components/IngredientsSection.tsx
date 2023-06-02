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
      {ing.ingredient} ({ing.measurement})
    </ListItem>
  ));
  return (
    <Flex direction="column" p={4}>
      <Heading size="md">Ingredients</Heading>
      <Container m={0} p={0}>
        <UnorderedList listStyleType="none" m={0}>
          {listItems}
        </UnorderedList>
      </Container>
    </Flex>
  );
}
