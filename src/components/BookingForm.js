import React, { useState } from "react";

const BookingForm = ({ formData, setFormData }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      alert("Booking Submitted Successfully!\nWe will contact you shortly.");
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="booking-form">

        <div className="form-section">
          <h3 className="form-subtitle">📍 Trip Details</h3>

          <div className="form-group">
            <label htmlFor="pickup">Pickup Location</label>
            <input
              type="text"
              id="pickup"
              name="pickup"
              placeholder="Enter pickup city or address"
              value={formData.pickup}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="drop">Drop Location</label>
            <input
              type="text"
              id="drop"
              name="drop"
              placeholder="Enter destination city"
              value={formData.drop}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3 className="form-subtitle">📅 Schedule & Preference</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Pickup Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="days">No. of Days</label>
              <input
                type="number"
                id="days"
                name="days"
                placeholder="1"
                min="1"
                value={formData.days}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="persons">Passengers</label>
              <input
                type="number"
                id="persons"
                name="persons"
                placeholder="4"
                min="1"
                value={formData.persons}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicle">Vehicle Type</label>
              <select
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Vehicle</option>
                <option value="Sedan">Sedan (4 Seater)</option>
                <option value="SUV">SUV (6-7 Seater)</option>
                <option value="Tempo Traveler">Tempo (12+ Seater)</option>
                <option value="Luxury">Luxury Class</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={submitted}>
          {submitted ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
