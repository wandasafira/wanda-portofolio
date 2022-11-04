import React from 'react'

const DesignUIUX = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">UI UX Design</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxs-check-square'></i>

                <div>
                    <h3 className="skills__name">Figma</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                <div className="skills__data">
                <i class='bx bxs-check-square'></i>

                <div>
                    <h3 className="skills__name">Adobe Animate</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
            {/* pembates */}
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxs-check-square'></i>

                <div>
                    <h3 className="skills__name">Photoshop</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesignUIUX