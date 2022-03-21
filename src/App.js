import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";

function App() {
  const theme = useContext()
  return (
    <div style={{backgroundColor:"Black", color:"white"}}>
      <Toggle/>
      <Intro />
      <About />
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
