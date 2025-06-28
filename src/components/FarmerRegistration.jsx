import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './FarmerRegistration.css';

const FarmerRegistration = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const farmerID = uuidv4();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !location || !contactInfo) {
      setError('All fields are required');
      return;
    }

    try {
      console.log('Sending registration request:', { farmerID, name, location, contactInfo });
      const response = await fetch('https://farmers-market-backend-609k.onrender.com/signups/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ farmerID, name, location, contactInfo }),
      });

      const data = await response.json();
      console.log('Registration response:', data);
      if (response.ok) {
        alert('Registration completed successfully!');
        navigate('/dashboard');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Network error. Is the backend server running?');
    }
  };

  return (
    <div className="farmer-registration">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleRegistration}>
          <img className="mb-4" src="./images/FARMER’S.png" alt="Logo" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Complete Farmer Registration</h1>

          {error && <p className="text-danger">{error}</p>}

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Full Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <label>Location</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Contact Info"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
            <label>Contact Info</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              value={farmerID}
              readOnly
            />
            <label>Farmer ID</label>
          </div>

          <button className="btn btn-primary w-100 py-2 farmer-btn" type="submit">
            Complete Registration
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2023-2026</p>
        </form>
      </main>
    </div>
  );
};

export default FarmerRegistration;