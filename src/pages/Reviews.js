import React, { useState } from 'react';
import '../App.css';

export default function Review() {
  const [reviews, setReviews] = useState([
    {
      name: 'Prakash',
      rating: 5,
      comment: 'Great service, on-time pickup and polite driver.',
    },
    {
      name: 'Sivashankar',
      rating: 4,
      comment: 'Quick service and clean vehicle. Will book again!',
    },
    {
      name: 'Kayal Kamaraj',
      rating: 5,
      comment: 'Excellent travel experience, very comfortable.',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: '', comment: '' });

  const handleInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.rating || !newReview.comment) {
      alert('Please fill in all fields.');
      return;
    }
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', rating: '', comment: '' });
    setShowForm(false);
  };

  return (
    <div className="page-container">
      <header className="review-header">
        <h1>Customer Reviews</h1>
        <p>What our happy travelers are saying about us</p>
      </header>

      <button className="add-review-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add Review'}
      </button>

      {showForm && (
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={newReview.rating}
            min="1"
            max="5"
            onChange={handleInputChange}
          />
          <textarea
            name="comment"
            placeholder="Your review"
            value={newReview.comment}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      )}

      <section className="review-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.name}</h3>
            <p className="review-rating">⭐ {review.rating} / 5</p>
            <p className="review-comment">"{review.comment}"</p>
          </div>
        ))}
      </section>
    </div>
  );
}
