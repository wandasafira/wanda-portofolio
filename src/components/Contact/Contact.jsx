import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1e9gl9u', 'template_su73bvs', form.current, '9Z_pQTBNghY5tb4iI')
      e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contact</h2>
        <span className="section__subtitle">You Can Contact Me!</span>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Get to know me!</h3>

            <div className="contact__info">
              <div className="contact__card">
                  <i className="bx bx-mail-send contact__card-icon"></i>
              
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">wanda.safira@binus.ac.id</span> 

                  <a href="mailto:wanda.safira@binus.ac.id" className="contact__button">Text me! <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>            
              </div>

              <div className="contact__card">
                  <i className="bx bxl-whatsapp contact__card-icon"></i>
              
                  <h3 className="contact__card-title">WhatsApp</h3>
                  <span className="contact__card-data">+62 812-9141-9508</span> 

                  <a href="https://wa.me/6281291419508" className="contact__button">Text me!<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>            
              </div>

              <div className="contact__card">
                  <i className="uil uil-line contact__card-icon"></i>
              
                  <h3 className="contact__card-title">LINE</h3>
                  <span className="contact__card-data">ID : wandasafira02</span> 

                  <a href="https://line.me/ti/p/_QbxvBL4tO" className="contact__button">Text me! <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>            
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Send me an email!</h3>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Your Name</label>
                <input type="text" name="name" className="contact__form-input" placeholder="Inser your name here!"/>
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag">Your e-mail</label>
                <input type="email" name="email" className="contact__form-input" placeholder="Inser your e-mail here!"/>
              </div>
              <div className="contact__form-div contact__form-area ">
                <label className="contact__form-tag">Your Message or Mail</label>
                <textarea name="mail" cols="30" rows="10" className="contact__form-input" placeholder="Write your Message here!"></textarea>
              </div>
              <button className="button button--flex">Send Message</button>
            </form>         
          </div>
        </div>
    </section>
  )
}

export default Contact
