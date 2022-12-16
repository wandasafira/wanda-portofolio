import React from 'react'
import './projects.css'
import Work1img from '../../assets/work1.jpg'
import Work2img from '../../assets/work2.jpg'
import Work3img from '../../assets/work3.jpg'
import Work4img from '../../assets/work4.jpg'
import Work5img from '../../assets/work5.png'
import Work6img from '../../assets/work6.jpg'


const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">All Projects</span>
        <div className="portofolio__container container">
        <article className="portofolio__item">
                <div className="portofolio__item-image">
                <img src={Work1img} alt="" />
                </div>
                <h3>Kenshin Impact Web</h3>
                <p className="porto__desc">Kenshin Impact Web is a website designed for a game company called Kenshin Impact. There are sections, characters, aboutgame, gallery, and a place to register on the web. <b>HTML, CSS, and JavaScript</b> are required for the creation of the web</p>
                <div className="portofolio__item-cta">
                <a href="https://github.com/wandasafira/project-hci.github.io" className="button" target='_blank'>Code</a>
                <a href="https://wandasafira.github.io/project-hci.github.io/" className="button button--flex" target='_blank'>Demo</a>
                </div>
            </article>
            <article className="portofolio__item">
                <div className="portofolio__item-image">
                <img src={Work2img} alt="" />
                </div>
                <h3>Web for Diet</h3>
                <p className="porto__desc">
Web for Diet has a goal that is so that people can run a diet in a way that is healthy and not wrong. On the web, there are sections such as Home, Trailer, Video, Story Board, Tips, Why Diet, and Contact Person. <b>HTML and CSS</b> are required for the creation of the web</p>
                <div className="portofolio__item-cta">
                <a href="https://github.com/wandasafira/project-multimedia.github.io" className="button" target='_blank'>Code</a>
                <a href="https://wandasafira.github.io/project-multimedia.github.io/" className="button button--flex" target='_blank'>Demo</a>
                </div>
            </article>
            <article className="portofolio__item">
                <div className="portofolio__item-image">
                <img src={Work3img} alt="" />
                </div>
                <h3>SehatYuk! Prototype</h3>
                <p className="porto__desc">SehatYuk is an application that aims to reduce the death rate in Indonesia. SehatYuk! is also an artificial intelligence-based application that will make it easier for the elderly to use the application <b>Figma</b> is needed when making the prototype of the SehatYuk Application!</p>
                <div className="portofolio__item-cta">
                <a href="https://www.figma.com/file/pTOaGZgOrmDHVPWDZcJH64/Solution-Sketch?node-id=0%3A1" className="button" target='_blank'>Code</a>
                <a href="https://www.figma.com/proto/pTOaGZgOrmDHVPWDZcJH64/Solution-Sketch?node-id=6%3A14&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A55" className="button button--flex" target='_blank'>Demo</a>
                </div>
            </article>
            <article className="portofolio__item">
                <div className="portofolio__item-image">
                <img src={Work4img} alt="" />
                </div>
                <h3>Application to promote KZ21 characters</h3>
                <p className="porto__desc">Give information about the KZ21 characters, give a video about KZ21, play background music while running the application, etc. Make sure to create an attractive UI for the application and provide the customer how to open the KZ21 official website. As additional information, this application is an adaptation of BT21 characters. <b>Adobe Animate</b> is needed when making the Application</p>
                <div className="portofolio__item-cta">
                <a href="https://github.com/wandasafira/project-multimedia-lab" className="button" target='_blank'>Code</a>
                <a href="https://drive.google.com/file/d/1dIUwI6XyHsTgtkahBHBgmNeMNo85gyjt/view?usp=share_link" className="button button--flex" target='_blank'>Demo</a>
                </div>
            </article>
            <article className="portofolio__item">
                <div className="portofolio__item-image">
                <img src={Work5img} alt="" />
                </div>
                <h3>Project Database</h3>
                <p className="porto__desc">Database for car sales and purchase transactions called cArDorm. There are data tables from transactions, data tables from purchases, data tables from cars, data tables from staff, data tables from car brands, and data tables from customers. Create tables and enter the data that has been prepared and make several simulates so that it can be seen whether the database created is correct or not. <b>SQL</b> is needed when making the database</p>
                <div className="portofolio__item-cta">
                <a href="https://github.com/wandasafira/Project-Database" className="button" target='_blank'>Code</a>
                </div>
            </article>
            <article className="portofolio__item">
                <div className="portofolio__item-image">
                <img src={Work6img} alt=""/>
                </div>
                <h3>Twitter Sentiment Analysis of Indonesian Airlines Using LSTM</h3>
                <p className="porto__desc">Twitter sentiment analysis is 
a process to identify whether tweets on Twitter are 
included as positive tweets or negative tweets. In this 
research, the tweets will be divided into three categories: 
positive, neutral, and negative, using Lexicon and Long 
Short-Term Memory (LSTM). <b>Python</b> is needed when making The Sentiment Analysis</p>
                <div className="portofolio__item-cta">
                <a href="https://colab.research.google.com/drive/1xx46QSHDMyH4WphoUk-69wKMcuY78V8y?usp=sharing" className="button" target='_blank'>Code</a>
                <a href="https://ieeexplore.ieee.org/document/9975946"className="button button--flex" target='_blank'>Demo</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Projects
