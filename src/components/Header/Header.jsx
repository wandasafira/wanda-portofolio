import React, {useState} from 'react';
import './header.css';

const Header = () => {
const [Toggle, ShowMenu] = useState(false);

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                Wanda's 
            </a>

            <div className={Toggle ? "navmenu show-menu" : "navmenu"}>
                <ul className="navlis grid">
                    <li className="navitem">
                        <a href="#home" className="navlink active-link">
                            <i className="uil uil-home navicon"></i> Home
                        </a>
                    </li>
                    <li className="navitem">
                        <a href="#about" className="navlink">
                            <i className="uil uil-user navicon"></i> About
                        </a>
                    </li>
                    <li className="navitem">
                        <a href="#skills" className="navlink">
                            <i className="uil uil-arrow navicon"></i> Skills
                        </a>
                    </li>
                    <li className="navitem">
                        <a href="#projects" className="navlink">
                            <i className="uil uil-folder-open navicon"></i> Projects
                        </a>
                    </li>
                    <li className="navitem">
                        <a href="#contact" className="navlink">
                            <i className="uil uil-phone navicon"></i> Contact
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times navclose" onClick={() => ShowMenu(!Toggle)}></i> 
            </div>
            <div className="navtoggle" onClick={() => ShowMenu(!Toggle)}>
            <i class="uil uil-bars"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header