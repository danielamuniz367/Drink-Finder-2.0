import { Link, ListItem } from "@chakra-ui/react";
import DrinkImageName from "./DrinkImgName";
import { DrinkProps } from "./ResultsList";

export default function Result(props: DrinkProps) {
  const { idDrink, strDrink, strDrinkThumb } = props;

  return (
    <ListItem
      listStyleType="none"
      p=".5rem"
      borderBottom="1px solid #58ABAE"
      _hover={{ backgroundColor: "#CAE6E2" }}
    >
      <Link href={`drink-details/${idDrink}`}>
        <DrinkImageName strDrink={strDrink} strDrinkThumb={strDrinkThumb} />
      </Link>
    </ListItem>
  );
}
