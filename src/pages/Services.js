import React from 'react';
import '../App.css';

const services = [
  {
    title: 'Local Taxi Service',
    description: 'Fast and reliable local travel within the city.',
  },
  {
    title: 'Outstation Trips',
    description: 'Comfortable long-distance journeys at great prices.',
  },
  {
    title: 'Airport Transfers',
    description: 'On-time pickups and drops for all airports.',
  },
  {
    title: 'Tour Packages',
    description: 'Customized holiday packages for your family or group.',
  },
  {
    title: 'Corporate Travel',
    description: 'Professional, punctual, and dedicated corporate transport.',
  },
];

export default function Service() {
  return (
    <div className="page-container">
      <header className="service-header">
        <h1>Our Services</h1>
        <p>Explore what Autobotz Travels offers for your perfect journey.</p>
      </header>

      <section className="service-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="service-video">
        <h2>Watch Our Travel Services in Action</h2>
        <video className="service-video-player" controls>
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}
