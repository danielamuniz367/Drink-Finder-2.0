"use client";

import DrinkImageName from "@/app/components/DrinkImgName";
import { Box, Flex } from "@chakra-ui/react";
import IngredientsSection from "./IngredientsSection";
import Instructions from "./Instructions";
import { DrinkProps } from "@/app/components/ResultsList";
import BackButton from "./BackButton";
import HeaderWrapper from "@/app/components/HeaderWrapper";
import BodyWrapper from "@/app/components/BodyWrapper";
import { useRef } from "react";

export interface IngredientsMeasurmentsProps {
  ingredient: string | null | undefined;
  measurement: string | null | undefined;
}

export default function DrinkDetails(drinkDetails: DrinkProps) {
  const { strDrink, strDrinkThumb, strInstructions } = drinkDetails;
  const ref = useRef<HTMLInputElement>(null);

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
      <HeaderWrapper refHeight={ref}>
        <BackButton />
      </HeaderWrapper>
      <BodyWrapper>
        <DrinkImageName
          strDrink={strDrink}
          strDrinkThumb={strDrinkThumb}
          result={true}
        />
        <IngredientsSection list={ingdtsMsrmtsMerged} />
        <Instructions strInstructions={strInstructions} />
      </BodyWrapper>
    </Box>
  );
}
