import React from 'react';
import './Testimonials.css'
// import slider from '../../../src/img/footerbg.jpg'
const Testimonials = () => {
  return (
    <section id="Testimonials" className="container">
      <h3 className="">Happy Clients_</h3>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src='https://i.ibb.co/GtTDpQn/user-1.png' className="d-block" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Ronald Frazier</h5>
              <p>Very professional and great personality, I enjoyed working with him, we accomplished a lot, warmly recommend!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src='https://i.ibb.co/N9JXGdh/user-3.png' className="d-block" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Thea Linde</h5>
              <p>Excellent code quality, great understanding of requirements, and very intelligent execution.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src='https://i.ibb.co/vd0GSjJ/user-2.png' className="d-block" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Chow Yu</h5>
              <p>Rafi has done really a great job! Amazing developer, very friendly to work with. Highly recommend"</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;