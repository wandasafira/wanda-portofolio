import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact1 from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Scrollup from './components/Scrollup/Scrollup';


const App = () => {
  return (
    <>
    <Header />
    <main className="main">
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact1 />
    </main>
    <Footer />
    <Scrollup />

    

    </>
  )
} 

export default App