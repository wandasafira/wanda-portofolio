import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Wanda's</h1>
            <ul className="footer__list">
                <li>
                   <a href="#about" className="footer__link">About</a> 
                </li>
                <li>
                   <a href="projects" className="footer__link">Projects</a> 
                </li>
                <li>
                   <a href="skills" className="footer__link">Skills</a> 
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.instagram.com/wandasfrx/" className="footer__social-icon" target="_blank">
                <i class="uil uil-instagram"></i>
            </a>
            <a href="https://github.com/wandasafira" className="footer__social-icon" target="_blank">
                <i class="uil uil-github-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/wanda-safira/" className="footer__social-icon" target="_blank">
                <i class="uil uil-linkedin-alt"></i>
            </a>
            </div>
            <span className="footer__copy">Thank you for visiting my portofolio website</span>
        </div>
    </footer>
  )
}

export default Footer