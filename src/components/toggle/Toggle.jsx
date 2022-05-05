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
  return (
    <div>
      <ul className='menu'>
        <Link to={'/'}> <li><h3>Home</h3></li> </Link>
        <Link to={'/portfolio'}><li><h3>Projects</h3></li></Link>
        <a href="https://teslaelectronics.ca/wp-content/uploads/2022/05/Jestin_Kuriakose-Updated-Resume.pdf" target="_blank"><li><h3>Resume</h3></li></a>
        <a href="https://github.com/jestin-kuriakose" target="_blank"><li><h3>GitHub</h3></li></a>
      </ul>
      <div className='t'>
          <img src={Sun} className='t-icon'/>
          <img src={Moon} className='t-icon'/>
          <div className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : "25px"}}></div>
      </div>
    </div>
  )
}

export default Toggle