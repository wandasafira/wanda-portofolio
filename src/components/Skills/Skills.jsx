import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import DesignUIUX from './DesignUIUX'
import Anotherskills from './AnotherSkills'

const skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Level</span>
      <div className="skills__container container grid">
      <Frontend />
      <DesignUIUX />
      <Anotherskills />
      </div>
    </section>
  )
}

export default skills