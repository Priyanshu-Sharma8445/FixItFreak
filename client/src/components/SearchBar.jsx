import { useState, useRef } from "react";

export default function SearchBar() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearching(true);
    setTimeout(() => inputRef.current?.focus(), 100); // Focus on input
  };

  const handleBlur = () => {
    if (!searchTerm) setIsSearching(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchTerm);
      setIsSearching(false);
    }
  };

  return (
    <div className="relative">
      {isSearching ? (
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className="px-4 py-2 w-64 border rounded-md outline-none transition-all"
          placeholder="Type to search..."
        />
      ) : (
        <button
          onClick={handleSearchClick}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition-all"
        >
          Search
        </button>
      )}
    </div>
  );
}
