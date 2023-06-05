"use client";

import DrinkImageName from "@/app/components/DrinkImgName";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Stack,
} from "@chakra-ui/react";
import IngredientsSection from "./IngredientsSection";
import Instructions from "./Instructions";
import { DrinkProps } from "@/app/components/ResultsList";
import BackButton from "./BackButton";
import HeaderWrapper from "@/app/components/HeaderWrapper";
import BodyWrapper from "@/app/components/BodyWrapper";
import { useEffect, useRef, useState } from "react";

export interface IngredientsMeasurmentsProps {
  ingredient: string | null | undefined;
  measurement: string | null | undefined;
}

export default function DrinkDetails(drinkDetails: DrinkProps) {
  const [height, setHeight] = useState<string | undefined>(undefined);
  const { strDrink, strDrinkThumb, strInstructions } = drinkDetails;
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHeight(`calc(100vh - ${ref?.current?.clientHeight}px)`);
  }, []);

  // gather ingredients and measurements
  const ingredients = Object.keys(drinkDetails)
    .filter((key) => key.includes("strIngredient") && drinkDetails[key])
    .map((key) => drinkDetails[key]);

  const measurements = Object.keys(drinkDetails)
    .filter((key) => key.includes("strMeasure") && drinkDetails[key])
    .map((key) => drinkDetails[key]);

  // merge ingredients and measurements into array
  const ingredientsList: IngredientsMeasurmentsProps[] = [];

  ingredients.forEach((ing, i) => {
    let ingMsrObj: IngredientsMeasurmentsProps = {
      ingredient: ing,
      measurement: measurements[i],
    };
    ingredientsList.push(ingMsrObj);
  });

  return (
    <Box>
      <HeaderWrapper refHeight={ref}>
        <BackButton />
      </HeaderWrapper>
      <BodyWrapper>
        <Center>
          <Card
            minH={[`${height}`, "unset"]}
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
        </Center>
      </BodyWrapper>
    </Box>
  );
}
