import React, { useContext } from 'react'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import Intro from '../../components/intro/Intro'
import ProductList from '../../components/productList/ProductList'
import Toggle from '../../components/toggle/Toggle'
import { ThemeContext } from '../../context'

const Home = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
  return (
    <>
        <Toggle/>
        <Intro />
        <About />
        <ProductList/>
        <Contact/>
    </>
  )
}

export default Home