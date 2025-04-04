import React from 'react';

type SearchBarProps = {
  search: string;
  updateSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ search, updateSearch }) => (
  <input
    type="text"
    placeholder="Search for a blog..."
    value={search}
    onChange={(e) => updateSearch(e.target.value)}
    className="flex-1 p-3 border rounded-md text-left w-full"
  />
);

export default SearchBar;
