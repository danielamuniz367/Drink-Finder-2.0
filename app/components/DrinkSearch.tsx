"use client";
import useSWR from "swr";
import { Box, Heading } from "@chakra-ui/react";
import ResultsList from "./ResultsList";
import { ReactNode, useState } from "react";
import { useDebounce } from "usehooks-ts";
import SearchBar from "./SearchBar";
import Header from "./Header";
import HeaderWrapper from "./HeaderWrapper";
import BodyWrapper from "./BodyWrapper";
import Loading from "./Loading";
import Error from "./Error";
import bg from "../../public/multi-cocktails.jpg";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function DrinkSearch() {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const debouncedValue = useDebounce<string | undefined>(search, 500);
  const { data, error, isLoading } = useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${debouncedValue}`,
    fetcher
  );
  const { drinks } = data || "Loading";
  let result: ReactNode = <></>;

  if (error) result = <Error />;
  if (isLoading && search) result = <Loading />;
  if (data && debouncedValue) result = <ResultsList drinks={drinks} />;

  return (
    <Box
      h="100%"
      sx={{
        height: "100vh",
        width: "100%",
      }}
      _before={{
        content: `""`,
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        position: "absolute",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        filter: "brightness(40%)",
      }}
    >
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <BodyWrapper>
        <Box
          w="100%"
          position={{ base: "relative" }}
          top={{ base: "unset", sm: "25%" }}
          zIndex={1}
        >
          <Heading as="h3" color="white" pb="20px" size="lg">
            Your next thirst-quenching beverage awaits!
          </Heading>
          <SearchBar onSearchTextChange={setSearch} />
          {result}
        </Box>
      </BodyWrapper>
    </Box>
  );
}
