import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface SearchBarProps {
  onSearchTextChange: (arg: string) => void;
}

export default function SearchBar({ onSearchTextChange }: SearchBarProps) {
  return (
    <Box>
      <InputGroup alignItems="center">
        {" "}
        <InputLeftElement top="auto" pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>{" "}
        <Input
          bg="white"
          placeholder="Find a drink..."
          onChange={(e) => onSearchTextChange(e.target.value)}
          size="lg"
          height="3.5rem"
          focusBorderColor="teal.400"
        />
      </InputGroup>
    </Box>
  );
}
