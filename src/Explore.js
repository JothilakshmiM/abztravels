import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';

const destinations = [
  {
    id: 1,
    name: 'Ooty',
    description: 'Queen of Hill Stations. Experience the tea gardens and cool weather.',
    image: 'https://images.unsplash.com/photo-1548682136-2244bb688a2d?auto=format&fit=crop&w=800&q=80',
    price: 'From ₹3500'
  },
  {
    id: 2,
    name: 'Kodaikanal',
    description: 'The Princess of Hill stations. Visit the lake and foggy cliffs.',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
    price: 'From ₹4000'
  },
  {
    id: 3,
    name: 'Munnar',
    description: 'Breathtaking tea plantations and misty rolling hills.',
    image: 'https://images.unsplash.com/photo-1596707328605-2d4e73b28b74?auto=format&fit=crop&w=800&q=80',
    price: 'From ₹4500'
  },
  {
    id: 4,
    name: 'Rameshwaram',
    description: 'Spiritual journey with stunning ocean views and Pamban Bridge.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pamban_Bridge_Rameswaram_India.jpg/1200px-Pamban_Bridge_Rameswaram_India.jpg',
    price: 'From ₹5500'
  },
  {
    id: 5,
    name: 'Yercaud',
    description: 'Jewel of the South. A serene getaway in the Shevaroy Hills.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Yercaud_Lake.jpg',
    price: 'From ₹3000'
  },
  {
    id: 6,
    name: 'Pondicherry',
    description: 'French colony charm with beautiful beaches and cafes.',
    image: 'https://images.unsplash.com/photo-1582556708681-42e77b67364b?auto=format&fit=crop&w=800&q=80',
    price: 'From ₹3800'
  }
];

export default function Explore() {
  return (
    <div className="explore-page">
      <header className="explore-header">
        <h1>🚀 Explore Autobotz Travels</h1>
        <p>Discover our top destinations, travel tips, and personalized journeys just for you.</p>
      </header>

      <div className="destinations-grid">
        {destinations.map(dest => (
          <div key={dest.id} className="destination-card">
            <div className="card-image">
              <img src={dest.image} alt={dest.name} />
              <span className="price-tag">{dest.price}</span>
            </div>
            <div className="card-content">
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
              <Link to="/booking" className="btn-book">Book Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
