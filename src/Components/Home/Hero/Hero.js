import React from 'react';
import './Hero.css'
import myImg from '../../../img/MdRafiulAlam.jpeg'
import Navagation from './../Navagation/Navagation';
import { Typewriter } from 'react-simple-typewriter'
import Particles from "react-tsparticles";
const Hero = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div id="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: .5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
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