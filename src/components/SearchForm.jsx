import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ThemeContext } from "./ContextTheme";

const SearchForm = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`searchForm d-flex align-items-center gap-3 mt-4 ${
        darkTheme ? "dark" : ""
      }`}
    >
      <AiOutlineSearch size="1rem" color="#B2B2B2" className="searchIcon" />
      <input
        type="text"
        placeholder="Search for a country…"
        className={`${darkTheme ? "dark" : ""}`}
      />
    </div>
  );
};

export default SearchForm;
