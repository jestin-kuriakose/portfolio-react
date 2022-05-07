import React from 'react'
import './about.css'
import Photographer from "../../img/photographer.jpg"
import JestinImg from "../../img/jestin2.jpg"
import Award from "../../img/award.jpg"

const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img
                    src={JestinImg}
                    alt=''
                    className='a-img'
                />
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>Full-Stack Developer | React Developer</p>
            <p className='a-desc'>I'm a multi-talented human with knowledge and experience in front-end and back-end web development. I currently work as a web developer for a marketing company and are open for new oppurtunities.</p>

        </div>
    </div>
  )
}

export default About