import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

interface SearchBarProps {
  searchText: string | undefined;
  onSearchTextChange: (arg: string) => void;
}

export default function SearchBar({
  searchText,
  onSearchTextChange,
}: SearchBarProps) {
  return (
    <InputGroup m="auto" mt={[0, "20px"]} w={["100%", 500]} alignItems="center">
      {" "}
      <Input
        value={searchText}
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
