import { useState, useEffect } from "react";

function SearchBar({ handleSetName }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleSetName(searchTerm);
  }, [searchTerm]);

  return (
    <div class="bg-white w-9/12 md:w-3/5 xl:w-2/5 rounded-3xl shadow-xl px-8 lg:px-12 pt-16 xl:px-28 pb-20">
      <input
        class="border-2 border-cyan-300 h-8 w-full pl-4 rounded-lg text-md placeholder-cyan-300"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
