import React from 'react';
import './About.css'
import downloadResume from '../../../src/img/img_btn_icon.png'
import resume from '../../img/Resume of MD. Rafiul Alam.pdf'
const About = () => {
  return (
    <section id="about" class="container section">
      <div class="row">
        <div class="col-md-10" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000">
          <h2 id="hello_header" class="section__title">Hi_</h2>
          <p class="section__description pe-lg-5">
            I am Rafi, a Junior <b>MERN</b> Stack Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Experienced with a demonstrated history of working in the computer software industry. Skilled in Front End technologies such as Html5 , Css3 , JavaScript , React , BootStrap, Material UI, Sass, and Back End technologies such as Node.JS, Express JS and MongoDb. Learning a variety of scripting languages and multimedia tools is one of my strengths. I am also a hard worker and team player. I am looking for a challenging opportunity that will enable me to use my skills and abilities to achieve a challenging goal.
          </p>
          <a href={resume} target="_blank" class="section_btn site-btn" data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"><img src={downloadResume} alt="" />Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;