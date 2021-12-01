import React from 'react';
import './Navagation.css'
import logo from '../../../img/MDRafiulAlamLogo.png'

const Navagation = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid container">
        <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Testimonials">Testimonials</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navagation;