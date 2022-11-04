import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-file about__icon'></i>

            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">8+ Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-building about__icon'></i>

            <h3 className="about__title">BINUS University</h3>
            <span className="about__subtitle">2020-2025</span>
        </div>
    </div>
  )
}

export default Info