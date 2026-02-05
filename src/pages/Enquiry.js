import React, { useState } from 'react';
import '../App.css';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your enquiry has been received!`);
    setFormData({ name: '', email: '', enquiry: '' });
  };

  return (
    <div className="page-container">
      <header className="enquiry-header">
        <h1>Enquiry</h1>
        <p>Have questions? Send us your enquiries below.</p>
      </header>

      <section className="enquiry-form-container">
        <h2>Enquiry Form</h2>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="enquiry">Your Enquiry</label>
          <textarea
            id="enquiry"
            name="enquiry"
            rows="4"
            value={formData.enquiry}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Enquiry</button>
        </form>
      </section>
    </div>
  );
}
