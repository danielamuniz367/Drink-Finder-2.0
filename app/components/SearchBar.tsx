import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

interface SearchBarProps {
  onSearchTextChange: (arg: string) => void;
}

export default function SearchBar({ onSearchTextChange }: SearchBarProps) {
  return (
    <InputGroup alignItems="center" pt={[0, "20px"]}>
      {" "}
      <Input
        bg="white"
        placeholder="Find a drink..."
        onChange={(e) => onSearchTextChange(e.target.value)}
        size="lg"
        height="3.5rem"
        focusBorderColor="teal.400"
      />
      <InputRightElement top="auto">
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
}
