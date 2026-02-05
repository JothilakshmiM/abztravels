import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../About.css';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="highlight">Autobotz</span> Travels
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>ABOUT <span className="highlight">AUTOBOTZ TRAVELS</span></h1>
          <p>Your trusted partner for seamless journeys. Learn about our mission, values, and dedicated team.</p>
          <button className="hero-btn" onClick={() => navigate('/services')}>Learn More</button>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Image Cards Section */}
      <section className="image-cards">
        <div className="image-card">
          <div className="card-label-top">WHO WE ARE</div>
          <img src="https://st5.depositphotos.com/68721766/64927/i/450/depositphotos_649273384-stock-photo-travel-live-quote-shirt.jpg" alt="Who We Are" />
          <p className="card-description">
            We are a dedicated travel company passionate about creating memorable experiences. Our team works tirelessly to offer unique, reliable, and seamless travel solutions.
          </p>
        </div>

        <div className="image-card">
          <div className="card-label-top">OUR MISSION</div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-909040892-1535400758.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*" alt="Our Mission" />
          <p className="card-description">
            Our mission is to make travel accessible, safe, and enjoyable for everyone. We focus on delivering exceptional service that exceeds expectations.
          </p>
        </div>

        <div className="image-card">
          <div className="card-label-top">OUR VALUES</div>
          <img src="https://www.salkantaytrekking.com/images/hero-bg/mission-vision-philosophy-values-hero-image-1500x600.jpg" alt="Our Values" />
          <p className="card-description">
            Customer-first mindset, transparency, reliability, and excellence in service define us. We value honesty, trust, and building lasting relationships.
          </p>
        </div>

        <div className="image-card">
          <div className="card-label-top">MEET OUR TEAM</div>
          <img src="https://img.freepik.com/premium-photo/hapy-driver-loves-job-travel-service-company_85574-7129.jpg" alt="Meet Our Team" />
          <p className="card-description">
            Our friendly and experienced team is committed to guiding you every step of the way, ensuring your travel is smooth and worry-free.
          </p>
        </div>
      </section>
    </div>
  );
}
