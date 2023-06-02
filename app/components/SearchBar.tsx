import { Input } from "@chakra-ui/react";

interface SearchBarProps {
  searchText: string;
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
    />
  );
}
