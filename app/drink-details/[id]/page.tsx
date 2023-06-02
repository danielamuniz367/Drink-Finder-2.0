import { DrinkImageNameProps } from "@/app/components/DrinkImgName";
import DrinkDetails from "../components/DrinkDetails";
import { DrinkProps } from "@/app/components/ResultsList";

async function getData(idDrink: string) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function DrinkDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const drinkDetails = data?.drinks[0];
  return <DrinkDetails {...drinkDetails} />;
}
