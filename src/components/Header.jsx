import React, { useContext } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { ThemeContext } from "./ContextTheme";

const Header = () => {
  const { darkTheme, handleStateChange } = useContext(ThemeContext);
  return (
    <div className={`nav ${darkTheme ? "dark" : ""}`}>
      <div className={`navBar  ${darkTheme ? "dark" : ""}`}>
        <div>
          <h3 className={`title  ${darkTheme ? "dark" : ""}`}>
            Where in the world?
          </h3>
        </div>
        <div className="toggle d-flex gap-2 mt-2" onClick={handleStateChange}>
          <HiOutlineMoon
            size="1rem"
            color="#111517"
            className={`moon mb-3  ${darkTheme ? "dark" : ""}`}
          />
          <p className={`toggleText  ${darkTheme ? "dark" : ""}`}>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
