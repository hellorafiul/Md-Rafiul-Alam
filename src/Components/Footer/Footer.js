import React, { useRef } from 'react';
import './Footer.css';
import { Typewriter } from 'react-simple-typewriter';
import emailjs from 'emailjs-com';
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_31gpkyr', 'template_dsza2aq', form.current, 'user_j2TQB6zm7xW0DuZuOVxRR')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert(error.message);
      });
    e.target.reset();
  };
  return (
    <div class="background">
      <ScrollToTop smooth color="#6f00ff" />
      <div id="contact" class="container section">
        <div class="row">
          <div class="col-md-12">
            <p id="contacts_header" class="section__title">
              <Typewriter
                words={['Say Hi 👋', 'Get in touch now 🤗', "Let's have a cup of tea ☕️"]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              /></p>
          </div>
        </div>
        <div class="row contacts">
          <div class="col-md-3 col-lg-4">
            <div class="contacts__list">
              <dl class="contact-list">
                <dt>Phone:</dt>
                <dd><a href="tel:82344563333">8 (234) 555-33-69</a></dd>
                <dt>Skype:</dt>
                <dd><a href="skype:live:hellorafiul">live:hellorafiul</a></dd>
                <dt>Email:</dt>
                <dd><a href="mailto:rafi@dsaenthusiast.codes">rafi@dsaenthusiast.codes</a></dd>
              </dl>
            </div>
          </div>
          <div class="col-md-6 col-lg-5">
            <div class="contacts__form">
              <p class="contacts__form-title">Or just write me a letter here_</p>
              <form class="js-form" ref={form} onSubmit={sendEmail}>
                <div class="form-group">
                  <input class="form-field js-field-name" type="text" placeholder="Your name" required name="name" id="validationCustom01" />
                  <span class="form-validation"></span>
                  <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
                </div>
                <div class="form-group">
                  <input class="form-field js-field-email" type="email" placeholder="Your e-mail" required name="email" id="validationCustom02" />
                  <span class="form-validation"></span>
                  <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
                </div>
                <div class="form-group">
                  <textarea class="form-field js-field-message" placeholder="Type the message here" required name="message" id="validationCustom03"></textarea>
                  <span class="form-validation"></span>
                  <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
                </div>
                <button class="site-btn site-btn--form" type="submit" value="Send">Send</button>
              </form>
            </div>
          </div>
          <div class="contacts__social col-md-3 pt-4 pt-md-0">
            <ul>
              <li><a href="https://github.com/hellorafiul" target="_blank"><i class="fa fa-github"></i> GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/hellorafiul/" target="_blank"><i class="fa fa-linkedin-square"></i> Linkedin</a></li>
              <li><a href="https://www.facebook.com/heyrafiul/" target="_blank"><i class="fa fa-facebook-square"></i> Facebook</a></li>
              <li><a href="https://www.instagram.com/hellorafiul/" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
          <div class="footer ps-md-5 ms-md-5 mt-5">
            <p>@copy; 2021 Md Rafiul Alam. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;