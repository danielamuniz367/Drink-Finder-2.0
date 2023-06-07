"use client";

import DrinkImageName from "@/app/components/DrinkImgName";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Stack,
} from "@chakra-ui/react";
import IngredientsSection from "./IngredientsSection";
import Instructions from "./Instructions";
import { IngredientsMeasurmentsProps } from "./DrinkDetails";

interface DrinkDetailsCardProps {
  height?: string;
  strDrink: string;
  strDrinkThumb: string;
  ingredientsList: IngredientsMeasurmentsProps[];
  strInstructions: string;
}

export default function DrinkDetailsCard({
  strDrink,
  strDrinkThumb,
  ingredientsList,
  strInstructions,
  height,
}: DrinkDetailsCardProps) {
  return (
    <Card
      minH={[`${height || "unset"}`]}
      // h={["100%", "unset"]}
      m={[0, 8]}
      p={[4, 8]}
      borderRadius={["none", "lg"]}
      bg="#FAF4F0"
      w={["100%", "700px"]}
    >
      <CardHeader>
        <DrinkImageName
          strDrink={strDrink}
          strDrinkThumb={strDrinkThumb}
          result={true}
        />
      </CardHeader>
      <Center>
        <Divider borderColor="teal" />
      </Center>
      <CardBody>
        <Stack spacing={4}>
          <IngredientsSection list={ingredientsList} />
          <Instructions strInstructions={strInstructions} />
        </Stack>
      </CardBody>
    </Card>
  );
}
