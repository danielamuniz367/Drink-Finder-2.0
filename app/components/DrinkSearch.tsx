"use client";
import useSWR from "swr";
import { Flex } from "@chakra-ui/react";
import ResultsList from "./ResultsList";
import { ReactNode, useState } from "react";
import { useDebounce } from "usehooks-ts";
import SearchBar from "./SearchBar";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function DrinkSearch() {
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce<string>(search, 500);
  const { data, error, isLoading } = useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${debouncedValue}`,
    fetcher
  );
  const { drinks } = data || {};
  let result: ReactNode = <></>;

  if (error) result = <div>There's been an error</div>;
  if (isLoading) result = <div>Loading...</div>;
  if (data) result = <ResultsList drinks={drinks} />;

  return (
    <Flex direction="column">
      <SearchBar searchText={search} onSearchTextChange={setSearch} />
      {result}
    </Flex>
  );
}
