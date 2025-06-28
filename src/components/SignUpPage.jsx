import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css'; // Import the new CSS file


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [farmName, setFarmName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://farmers-market-backend-609k.onrender.com/signups/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, farmName, userType: 'Farmer' }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Sign-up successful! Welcome, Farmer!');
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <div className="head farmer-signup">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSignUp}>
          <img className="mb-4" src="./images/FARMER’S.png" alt="Logo" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Join as a Farmer</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
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
              placeholder="Farm Name"
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              required
            />
            <label>Farm Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email Address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 farmer-btn" type="submit">Sign Up as Farmer</button>
          <p className="mt-3">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
          <p className="mt-5 mb-3 text-body-secondary">© 2023-2026</p>
        </form>
      </main>
    </div>
  );
};

export default SignUpPage;