import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'


const Toggle = () => {
  return (
    <div className='t'>
        <img src={Sun} className='t-icon'/>
        <img src={Moon} className='t-icon'/>
        <div className='t-button'></div>
    </div>
  )
}

export default Toggle