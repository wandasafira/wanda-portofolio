import React from 'react'

const Anotherskills = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Another Skills</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxs-check-square'></i>

                <div>
                    <h3 className="skills__name">C</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxs-check-square'></i>

                <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                <div className="skills__data">
                <i class='bx bxs-check-square'></i>

                <div>
                    <h3 className="skills__name">Tableau </h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
            {/* pembates */}
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxs-check-square'></i>

                <div>
                    <h3 className="skills__name">SQL</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxs-check-square'></i>

                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>
                <div className="skills__data">
                <i class='bx bxs-check-square'></i>

                <div>
                    <h3 className="skills__name">Cisco Packet Tracer</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Anotherskills