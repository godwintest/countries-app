import React, { useContext } from "react";
import SearchForm from "./SearchForm";
import RegionSelector from "./RegionSelector";
import Countries from "./Countries";
import { ThemeContext } from "./ContextTheme";

const Home = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className={`appContainer ${darkTheme ? "dark" : ""}`}>
        <div className="searchGroup">
          <SearchForm />
          <RegionSelector />
        </div>
        <Countries />
      </div>
    </div>
  );
};

export default Home;
