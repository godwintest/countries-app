import "./App.css";
import Country from "./components/Country";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ThemeContext } from "./components/ContextTheme";
import { useContext } from "react";

function App() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`app ${darkTheme ? "dark" : ""}`}>
      {/* <Router> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/country/:name" element={<Country />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
