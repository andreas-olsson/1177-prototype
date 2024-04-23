import React, { useState, useEffect } from "react";
import { IDSIconUser, IDSInput, IDSButton } from "@inera/ids-react";

import menu from "../assets/menu/private.json";
import "../styles/search.css";

function Search({ serviceNames = [] }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event: { target: { value: string } }) => {
    const query = event.target.value.trim().toLowerCase();
    setSearchQuery(query);
    filterResults(query);
  };

  const filterResults = (query: string) => {
    if (query === "") {
      setSearchResults([]);
    } else {
      const results: never[] = [];
      searchMenu(menu.content, query, results);
      setSearchResults(results.slice(0, 10));
    }
  };

  const searchMenu = (items: any[], query: any, results: any[]) => {
    items.forEach((item: { name: string; sub: any }) => {
      if (item && item.name && item.name.toLowerCase().includes(query)) {
        results.push(item);
      }
      if (item && item.sub) {
        searchMenu(item.sub, query, results);
      }
    });
  };

  return (
    <div className="search-container">
      <IDSInput>
        <label>Hitta på 1177</label>
        <input value={searchQuery} onChange={handleInputChange} type="search" />
      </IDSInput>

      <div className="search-result-list">
        {searchResults.length > 0 ? (
          <div>
            {searchResults.map((item, index) => (
              <a
                className={`search-result-item${
                  serviceNames.includes(item.name) ? " service-link" : ""
                }`}
                key={index}
              >
                {serviceNames.includes(item.name) && (
                  <IDSIconUser
                    size="s"
                    className="menu-item-icon"
                    colorpreset={2}
                  />
                )}
                {item.name}
              </a>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Search;
