import { useState, useEffect, useRef } from "react";
import { IDSIconUser, IDSInput } from "@inera/ids-react";
import "../styles/search.css";

interface MenuItem {
  name: string;
  url?: string;
  login?: boolean;
  sub?: MenuItem[];
}

interface SearchProps {
  menu: MenuItem[];
}

function Search({ menu }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<MenuItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isFocused && (event.key === "S" || event.key === "s")) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isFocused]);

  const handleInputChange = (event: { target: { value: string } }) => {
    const query = event.target.value.trim().toLowerCase();
    setSearchQuery(query);
    filterResults(query);
  };

  const filterResults = (query: string) => {
    if (query === "") {
      setSearchResults([]);
    } else {
      const results: MenuItem[] = [];
      searchMenu(menu, query, results);
      setSearchResults(results.slice(0, 10));
    }
  };

  const searchMenu = (
    items: MenuItem[],
    query: string,
    results: MenuItem[]
  ) => {
    items.forEach((item) => {
      if (item.name.toLowerCase().includes(query)) {
        results.push(item);
      }
      if (item.sub) {
        searchMenu(item.sub, query, results);
      }
    });
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="search-container">
      <IDSInput>
        <label>
          Sök innehåll (<b>S</b>){" "}
        </label>
        <input
          ref={inputRef}
          value={searchQuery}
          onChange={handleInputChange}
          type="search"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </IDSInput>

      <div className="search-result-list">
        {searchResults.length > 0 && (
          <div>
            {searchResults.map((item, index) => (
              <a
                key={index}
                className={`search-result-item${
                  item.login ? " service-link" : ""
                }`}
                href={item.url ? item.url : "#"}
              >
                {item.login && (
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
        )}
      </div>
    </div>
  );
}

export default Search;
