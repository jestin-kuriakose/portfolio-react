import "./contact.css"
import Phone from "../../img/phone.png"
import Address from "../../img/address.png"
import Email from "../../img/email.png"
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef()
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_jjia23g', 'template_8ytoy34', formRef.current, 'uHlnrlooyBC2Q_FV_')
        .then((result) => {
          console.log(result.text);
          setDone(true);
        }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon"/>+1 519-722-0063
                </div>
                <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon"/>jestink@live.com
                </div>
                <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon"/>79 Florence Ave, Kitchener
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story ?</b> Get in touch. Always willing to do freelancing if the right project comes along
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>

                    <input style={{backgroundColor: darkMode && "#222"}} type="text" placeholder="Name" name="user_name"/>
                    
                    <input style={{backgroundColor: darkMode && "#222"}} type="text" placeholder="Subject" name="user_subject"/>
                    
                    <input style={{backgroundColor: darkMode && "#222"}} type="text" placeholder="Email" name="user_email"/>

                    <textarea style={{backgroundColor: darkMode && "#222"}} rows="5" placeholder="Message" name="message" />

                    <button>Submit</button>
                    {done && <p>Your Message has been sent !</p>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact