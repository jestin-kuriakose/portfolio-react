import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'
import { Link } from 'react-router-dom'


const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
      
        theme.dispatch({type : "TOGGLE"})
    }
    
  const darkMode = theme.state.darkMode;
  console.log(darkMode)
  return (
    <div className='topNav' style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <input  style={{backgroundColor: darkMode && "white"}} id="menu-toggle" type="checkbox" />
      <label  style={{backgroundColor: darkMode && "white"}} class='menu-button-container' for="menu-toggle">
        <div style={{backgroundColor: darkMode && "white"}} class='menu-button'></div>
      </label>
      <div className='menu'>
        <Link to={'/'} style={{ textDecoration: 'none' }}><li><h3 className='menuTitle' style={{color: darkMode && "white"}}> Home</h3></li></Link> 
        <Link to={'/portfolio'}><li><h3 style={{color: darkMode && "white"}}>Projects</h3></li></Link>
        <a href="https://teslaelectronics.ca/wp-content/uploads/2022/05/Jestin_Kuriakose-Updated-Resume.pdf" target="_blank"><li><h3 style={{color: darkMode && "white"}}>Resume</h3></li></a>
        <a href="https://github.com/jestin-kuriakose" target="_blank"><li><h3 style={{color: darkMode && "white"}}>GitHub</h3></li></a>
      </div>
      <div className='t'>
          <img src={Sun} className='t-icon'/>
          <img src={Moon} className='t-icon'/>
          <div className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : "25px"}}></div>
      </div>
    </div>
  )
}

export default Toggle