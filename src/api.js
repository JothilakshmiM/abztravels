import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

// 🔹 Booking
export const sendBooking = (data) => {
  return axios.post(`${API_BASE}/bookings`, data);
};

// 🔹 Enquiry
export const sendEnquiry = (data) => {
  return axios.post(`${API_BASE}/enquiries`, data);
};

// 🔹 Review
export const sendReview = (data) => {
  return axios.post(`${API_BASE}/reviews`, data);
};

// 🔹 Get data
export const getBookings = () => axios.get(`${API_BASE}/bookings`);
export const getEnquiries = () => axios.get(`${API_BASE}/enquiries`);
export const getReviews = () => axios.get(`${API_BASE}/reviews`); 