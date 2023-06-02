import { Link, ListItem } from "@chakra-ui/react";
import DrinkImageName from "./DrinkImgName";
import { DrinkProps } from "./ResultsList";

export default function Result(props: DrinkProps) {
  const { idDrink, strDrink, strDrinkThumb } = props;

  return (
    <ListItem
      listStyleType="none"
      p=".5rem"
      _hover={{ backgroundColor: "blue.100" }}
    >
      <Link href={`drink-details/${idDrink}`}>
        <DrinkImageName strDrink={strDrink} strDrinkThumb={strDrinkThumb} />
      </Link>
    </ListItem>
  );
}
