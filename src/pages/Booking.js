import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import VoiceAssistant from "../components/VoiceAssistant";
import "../styles/Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    days: "",
    vehicle: "",
    persons: "",
  });

  return (
    <div className="booking-container">
      <h1 className="booking-title">🚖 Red Taxi Booking</h1>
      <BookingForm formData={formData} setFormData={setFormData} />
      <VoiceAssistant formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default Booking;
