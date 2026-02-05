import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we’ll get back to you shortly!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="premium-contact-page">
      <header className="top-header">
        <h1><span>Contact</span> Us</h1>
        <p>Connect with us to plan your next adventure</p>
      </header>

      <main className="main-contact-form">
        <section className="form-section">
          <h2>Let’s Talk</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your Message"
            />
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </section>
      </main>

      <footer className="footer-contact-info">
        <div className="info-card">
          <div className="icon">📞</div>
          <p>+91 8122666644</p>
        </div>
        <div className="info-card">
          <div className="icon">✉️</div>
          <p>info@autobotztravels.com</p>
        </div>
        <div className="info-card">
          <div className="icon">📍</div>
          <p>123, Main Road, Coimbatore, TN</p>
        </div>
      </footer>
    </div>
  );
}
