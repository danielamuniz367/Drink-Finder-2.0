import NextLink from "next/link";
import { Link, ListItem } from "@chakra-ui/react";
import DrinkImageName from "./DrinkImgName";
import { DrinkProps } from "./ResultsList";

export default function Result(props: DrinkProps) {
  const { idDrink, strDrink, strDrinkThumb } = props;

  return (
    <ListItem listStyleType="none">
      <Link as={NextLink} href={`drink-details/${idDrink}`}>
        <DrinkImageName strDrink={strDrink} strDrinkThumb={strDrinkThumb} />
      </Link>
    </ListItem>
  );
}
