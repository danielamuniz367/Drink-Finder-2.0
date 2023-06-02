import { Input } from "@chakra-ui/react";

interface SearchBarProps {
  searchText: string | undefined;
  onSearchTextChange: (arg: string) => void;
}

export default function SearchBar({
  searchText,
  onSearchTextChange,
}: SearchBarProps) {
  return (
    <Input
      value={searchText}
      placeholder="Find a drink..."
      onChange={(e) => onSearchTextChange(e.target.value)}
      bg="white"
      m="auto"
      size="md"
      variant="outline"
    />
  );
}
