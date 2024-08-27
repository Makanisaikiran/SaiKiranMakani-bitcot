// SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => (
  <input
    type="text"
    placeholder="Search contacts..."
    value={searchTerm}
    onChange={handleSearch}
  />
);

export default SearchBar;