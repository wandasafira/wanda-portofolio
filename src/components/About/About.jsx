import React from 'react'
import './about.css'
import Info from './Info'
import AboutImg from '../../assets/Picsart_22-10-31_23-32-12-739.jpg'
import CV from '../../assets/WANDA SAFIRA - CV (1).pdf'

 
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className='section__title'>About Me</h2>
      <span className="section__subtitle">Nice to meet you!</span>
    
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className='about__img'/>
        <div className='about__data'>
          <Info />
          <p className="about__description">
            Hi! My name is Wanda Safira. I am a MasterTrack Student at Bina Nusantara University.
            My major is Computer Science and Interested in Front End Web Development and UI/UX Design!
          </p>
          <a href={CV} className="button button--flex">
             My CV!
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
