// SearchBar.tsximport React, { useState } from "react";
import { useState } from "react"
import { SearchContainer, SearchInput, SearchButton } from "./SearchBar.style"
interface SearchBarProps {
  onSearch: (query: string) => void,
  query: string,
  setQuery:React.Dispatch<React.SetStateAction<string>>
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch, query, setQuery }) => {
  

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
      <SearchButton variant="primary" onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  )
}
export default SearchBar
