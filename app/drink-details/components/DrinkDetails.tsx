"use client";

import { Box, Center } from "@chakra-ui/react";
import { DrinkProps } from "@/app/components/ResultsList";
import BackButton from "./BackButton";
import HeaderWrapper from "@/app/components/HeaderWrapper";
import BodyWrapper from "@/app/components/BodyWrapper";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import Loading from "@/app/components/Loading";
import DrinkDetailsCard from "./DrinkDetailsCard";
import { useMediaQuery } from "usehooks-ts";

export interface IngredientsMeasurmentsProps {
  ingredient: string | null | undefined;
  measurement: string | null | undefined;
}

export default function DrinkDetails(drinkDetails: DrinkProps) {
  const [height, setHeight] = useState<string | undefined>("auto");
  const [bodyChild, setBodyChild] = useState<ReactNode>(<Loading />);
  const mobile = useMediaQuery("(max-width: 30em)");

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
  const ingredientsList: IngredientsMeasurmentsProps[] = [];

  ingredients.forEach((ing, i) => {
    let ingMsrObj: IngredientsMeasurmentsProps = {
      ingredient: ing,
      measurement: measurements[i],
    };
    ingredientsList.push(ingMsrObj);
  });

  let props = {
    height,
    strDrink,
    strDrinkThumb,
    strInstructions,
    ingredientsList,
  };

  useLayoutEffect(() => {
    mobile
      ? setHeight(`calc(100vh - ${ref?.current?.clientHeight}px)`)
      : setHeight("auto");
  }, [mobile]);

  useEffect(() => {
    props.height = height;
    setBodyChild(<DrinkDetailsCard {...props} />);
  }, [height]);

  return (
    <Box h="100%">
      <HeaderWrapper ref={ref}>
        <BackButton />
      </HeaderWrapper>
      <BodyWrapper>
        <Center>{bodyChild}</Center>
      </BodyWrapper>
    </Box>
  );
}
