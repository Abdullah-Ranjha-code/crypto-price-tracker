import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");// query yani jo user input dega search bar me... aor setQuery jub user kuch inpi=ut de ga to query ki value update kray ga 

  const handleSearch = () => {
    onSearch(query);//onSearch aik callback function hy jo query ko wapis bhejta hy app.js me filtering k ley 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}// ye query ki value ko change kray ga aor usay woh valur dega jo user search kray ga 
      />
      <button onClick={handleSearch}>Search</button>
    </div>// button click krnay se handleSearch me jo onSearch query hy uski value update hogi 
  );
}

export default SearchBar;
