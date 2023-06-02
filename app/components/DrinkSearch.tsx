"use client";
import useSWR from "swr";
import { Box, Flex } from "@chakra-ui/react";
import ResultsList from "./ResultsList";
import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDebounce } from "usehooks-ts";
import SearchBar from "./SearchBar";
import Header from "./Header";
import HeaderWrapper from "./HeaderWrapper";
import CocktailIcon from "./CocktailIcon";
import BodyWrapper from "./BodyWrapper";

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
  const ref = useRef<HTMLInputElement>(null);
  let height: string | null = null;

  if (error) result = <div>There's been an error</div>;
  if (isLoading && search)
    result = (
      <Flex direction="row" pt={2}>
        Loading <CocktailIcon height="20px" width="20px" />
        ...
      </Flex>
    );
  if (data && debouncedValue) result = <ResultsList drinks={drinks} />;

  useEffect(() => {
    height = `calc(100vh - ${ref?.current?.clientHeight}px)`;
  }, []);

  return (
    <Box>
      <HeaderWrapper refHeight={ref}>
        <Header />
      </HeaderWrapper>
      <BodyWrapper height={height}>
        <SearchBar searchText={search} onSearchTextChange={setSearch} />
        <Box>{result}</Box>
      </BodyWrapper>
    </Box>
  );
}
