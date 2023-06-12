"use client";
import useSWR from "swr";
import { Box } from "@chakra-ui/react";
import ResultsList from "./ResultsList";
import { ReactNode, useState } from "react";
import { useDebounce } from "usehooks-ts";
import SearchBar from "./SearchBar";
import Header from "./Header";
import HeaderWrapper from "./HeaderWrapper";
import BodyWrapper from "./BodyWrapper";
import Loading from "./Loading";
import Error from "./Error";

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

  if (error) result = <Error />;
  if (isLoading && search) result = <Loading />;
  if (data && debouncedValue) result = <ResultsList drinks={drinks} />;

  return (
    <Box>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <BodyWrapper>
        <SearchBar onSearchTextChange={setSearch} />
        {result}
      </BodyWrapper>
    </Box>
  );
}
