import React from 'react'
import './about.css'
import Photographer from "../../img/photographer.jpg"
import Award from "../../img/award.jpg"

const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img
                    src={Photographer}
                    alt=''
                    className='a-img'
                />
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
            <p className='a-desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className='a-award'>
                <img src={Award} alt='' className='a-award-img'></img>
                <div className='a-award-texts'>
                    <h4 className='a-award-title'>International Design</h4>
                    <p className='a-award-desc'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About