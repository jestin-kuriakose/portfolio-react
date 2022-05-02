import { useContext } from "react";
import { ThemeContext } from "./context";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";


function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
