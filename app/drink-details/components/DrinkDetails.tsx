"use client";

import DrinkImageName from "@/app/components/DrinkImgName";
import { Box, Flex } from "@chakra-ui/react";
import IngredientsSection from "./IngredientsSection";
import Instructions from "./Instructions";
import { DrinkProps } from "@/app/components/ResultsList";

export interface IngredientsMeasurmentsProps {
  ingredient: string | null | undefined;
  measurement: string | null | undefined;
}

export default function DrinkDetails(drinkDetails: DrinkProps) {
  const { strDrink, strDrinkThumb, strInstructions } = drinkDetails;

  // gather ingredients and measurements
  const ingredients = Object.keys(drinkDetails)
    .filter((key) => key.includes("strIngredient") && drinkDetails[key])
    .map((key) => drinkDetails[key]);

  const measurements = Object.keys(drinkDetails)
    .filter((key) => key.includes("strMeasure") && drinkDetails[key])
    .map((key) => drinkDetails[key]);

  // merge ingredients and measurements into array
  const ingdtsMsrmtsMerged: IngredientsMeasurmentsProps[] = [];

  ingredients.forEach((ing, i) => {
    let ingMsrObj: IngredientsMeasurmentsProps = {
      ingredient: ing,
      measurement: measurements[i],
    };
    ingdtsMsrmtsMerged.push(ingMsrObj);
  });

  return (
    <Box>
      <DrinkImageName strDrink={strDrink} strDrinkThumb={strDrinkThumb} />
      <IngredientsSection list={ingdtsMsrmtsMerged} />
      <Instructions strInstructions={strInstructions} />
    </Box>
  );
}
