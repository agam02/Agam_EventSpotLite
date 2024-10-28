// src/components/SearchBar.js

import React from "react";
import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search events by name or location..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
