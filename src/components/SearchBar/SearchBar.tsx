// SearchBar.tsximport React, { useState } from "react";
import { useState } from "react"
import { SearchContainer, SearchInput, SearchButton } from "./SearchBar.style"
interface SearchBarProps {
  onSearch: (query: string) => void
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    onSearch(query)
    setQuery("")
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter service name"
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  )
}
export default SearchBar
