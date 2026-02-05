import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../home.css';

const Home = () => {
  const services = [
    {
      title: 'Local Taxi Service',
      description: 'Fast and reliable local travel within the city.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Outstation Trips',
      description: 'Comfortable long-distance journeys at great prices.',
      image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Airport Transfers',
      description: 'On-time pickups and drops for all airports.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Tour Packages',
      description: 'Customized holiday packages for your family or group.',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Corporate Travel',
      description: 'Professional, punctual, and dedicated corporate transport.',
      image: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <div className="home">
      <header className="navbar">
        <div className="navbar-brand">
          <h1>Autobotz Travels</h1>
        </div>
        <nav className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/explore">Explore</Link>
          <a href="tel:+918122666644" className="call-btn">Call Now</a>
          <a
            href="https://wa.me/918122666644"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon-link"
            title="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#25D366"
            >
              <path d="M12.01 2.003a9.95 9.95 0 0 0-9.95 9.95 9.897 9.897 0 0 0 1.352 5.015L2 22l5.14-1.332a9.963 9.963 0 0 0 4.87 1.24h.001c5.51 0 9.95-4.439 9.95-9.95a9.95 9.95 0 0 0-9.95-9.955Zm5.818 14.174c-.246.69-1.438 1.281-1.99 1.366-.507.077-1.172.11-1.885-.118-.433-.138-1.01-.33-1.75-.647-3.083-1.329-5.1-4.59-5.255-4.81-.154-.22-1.256-1.671-1.256-3.194 0-1.522.801-2.268 1.087-2.58.285-.31.618-.386.824-.386.206 0 .412.002.593.01.191.007.446-.073.699.532.254.605.863 2.087.937 2.239.074.153.123.33.024.533-.099.204-.147.33-.293.505-.147.176-.31.391-.443.525-.147.147-.299.308-.129.604.17.294.754 1.236 1.62 2.004 1.113.994 2.054 1.3 2.346 1.446.29.147.46.132.633-.079.172-.211.73-.845.924-1.134.192-.289.384-.24.648-.147.265.094 1.675.791 1.962.935.286.144.476.215.547.336.07.12.07.695-.176 1.385Z" />
            </svg>
          </a>
        </nav>
      </header>

      <section className="hero-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={800}
        >
          <div className="carousel-slide">
            <img src="https://images.unsplash.com/photo-1570191913959-b48da3aa323e?auto=format&fit=crop&w=1600&q=80" alt="Road Trips" />
            <div className="carousel-caption">
              <h2>Explore Stunning Road Trips</h2>
              <p>Experience the journey of a lifetime with our premium fleet.</p>
              <Link to="/booking" className="btn-primary">Book Now</Link>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80" alt="Mountain Adventure" />
            <div className="carousel-caption">
              <h2>Adventure Awaits</h2>
              <p>Discover breathtaking mountain landscapes in comfort.</p>
              <Link to="/explore" className="btn-primary">Start Your Journey</Link>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80" alt="City Tours" />
            <div className="carousel-caption">
              <h2>City Escapes</h2>
              <p>Navigate vibrant cities with ease and style.</p>
              <Link to="/booking" className="btn-primary">Plan Now</Link>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="services">
        <h3 className="section-title">Our Popular Services</h3>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-img-wrapper">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-info">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Autobotz Travels. All rights reserved.</p>
          <a
            href="https://wa.me/918122666644"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
