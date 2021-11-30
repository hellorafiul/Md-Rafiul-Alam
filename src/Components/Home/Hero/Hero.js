import React from 'react';
import './Hero.css'
import myImg from '../../../img/MdRafiulAlam.jpeg'
import Navagation from './../Navagation/Navagation';
import { Typewriter } from 'react-simple-typewriter'
// import Particles from 'react-particles-js';
const Hero = () => {
  return (
    <div id="hero">
      {/* <Particles /> */}
      <div className="container">
        <Navagation></Navagation>
        <div class="row">
          <div class="col-md-4 img-fluid d-sm-block d-none" >
            <img class="img-fluid profilePic" src={myImg} alt="" data-aos="fade-up"
              data-aos-duration="2000" />
          </div>
          <div class="col-md-8 text-white hero-details" data-aos="fade-up"
            data-aos-duration="2000">
            <p class="personal-profile__name">Md Rafiul Alam</p>
            <p class="personal-profile__work">I'm <span style={{ fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['A MERN Stack Web Developer ⚛', 'Co-Founder at DSA Enthusiast !', 'A Self Believer ❤️']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span></p>
            <div class="personal-profile__contacts">
              <dl class="contact-list contact-list__opacity-titles">
                <dt>Age:</dt>
                <dd>23</dd>
                <dt>Phone:</dt>
                <dd><a href="tel:82344563333">8 (234) 555-33-69</a></dd>
                <dt>Email:</dt>
                <dd><a href="mailto:rafi@dsaenthusiast.codes">rafi@dsaenthusiast.codes</a></dd>
                <dt>Address:</dt>
                <dd>Bogura, Bangladesh</dd>
              </dl>
            </div>
            <div class="personal-profile__social">
              <a href="https://github.com/hellorafiul" target="_blank"><i class="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/hellorafiul/" target="_blank"><i class="fa fa-linkedin-square"></i></a>
              <a href="https://www.facebook.com/heyrafiul/" target="_blank"><i class="fa fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/hellorafiul/" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;