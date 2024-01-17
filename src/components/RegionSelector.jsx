import React, { useContext } from "react";
import { ThemeContext } from "./ContextTheme";

const RegionSelector = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div>
      <select className={darkTheme ? "dark" : ""}>
        <option>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default RegionSelector;
