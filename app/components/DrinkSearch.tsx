"use client";
import useSWR from "swr";
import { Box, Flex } from "@chakra-ui/react";
import ResultsList from "./ResultsList";
import { ReactNode, useState } from "react";
import { useDebounce } from "usehooks-ts";
import SearchBar from "./SearchBar";
import Header from "./Header";
import HeaderWrapper from "./HeaderWrapper";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function DrinkSearch() {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const debouncedValue = useDebounce<string | undefined>(search, 500);
  const { data, error, isLoading } = useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${debouncedValue}`,
    fetcher
  );
  const { drinks } = data || {};
  let result: ReactNode = <></>;

  if (error) result = <div>There's been an error</div>;
  if (isLoading) result = <div>Loading...</div>;
  if (data && search) result = <ResultsList drinks={drinks} />;

  return (
    <Flex direction="column">
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SearchBar searchText={search} onSearchTextChange={setSearch} />
      <Box>{result}</Box>
    </Flex>
  );
}
