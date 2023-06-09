import { Box, UnorderedList } from "@chakra-ui/react";
import Result from "./Result";
import { List, AutoSizer, ListRowRenderer } from "react-virtualized";

export interface DrinkProps {
  [key: string]: string | undefined | null;
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string | null;
  strIBA: string | null;
  strAlcoholic: string | null;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  "strInstructionsZH-HANT": string | null;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

export interface ResultsProps {
  drinks: DrinkProps[];
}
export default function ResultsList({ drinks }: ResultsProps) {
  if (!drinks)
    return (
      <Box m="0" color="white">
        No drinks found
      </Box>
    );

  const resultRowRenderer: ListRowRenderer = ({
    key,
    index,
    style,
    parent,
  }) => {
    const result = drinks[index];

    return (
      <div style={style}>
        <Result key={`drink-${key}`} {...result} />
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "#FAF4F0",
      }}
    >
      <AutoSizer>
        {({ width, height }) => (
          <UnorderedList m={0}>
            <List
              width={width}
              height={height}
              rowHeight={56}
              rowCount={drinks.length}
              rowRenderer={resultRowRenderer}
            ></List>
          </UnorderedList>
        )}
      </AutoSizer>
    </div>
  );
}
