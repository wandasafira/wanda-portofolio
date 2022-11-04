import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="homecontainer container grid">
            <div className="homecontent grid">
                <Social />
                <div className="homeimg"></div>
                <Data />
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home