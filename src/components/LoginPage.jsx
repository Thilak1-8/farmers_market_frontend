import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return;
    }

    try {
      console.log('Sending login request:', { email, password });
      const response = await fetch('http://localhost:5000/signups/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);
      if (response.ok) {
        localStorage.setItem('token', data.token);
        const profileResponse = await fetch('http://localhost:5000/signups/profile', {
          headers: { Authorization: `Bearer ${data.token}` },
        });
        const profileData = await profileResponse.json();
        console.log('Profile response:', profileData);
        if (profileResponse.ok) {
          if (profileData.farmerID) {
            navigate('/dashboard');
          } else {
            navigate('/farmer-registration');
          }
        } else {
          setError(profileData.message || 'Failed to fetch profile');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Is the backend server running?');
    }
  };

  return (
    <div className="farmer-login">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleLogin}>
        <Link to="/">
            <img className="mb-4" src="./images/FARMER’S.png" alt="Farmer's Market Logo" width="72" height="57" />
          </Link>          
          <h1 className="h3 mb-3 fw-normal">Log in as a Farmer</h1>

          {error && <p className="text-danger">{error}</p>}

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email address</label>
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

          <button className="btn btn-primary w-100 py-2 farmer-btn" type="submit">
            Log in
          </button>

          <p className="mt-3">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <p className="mt-5 mb-3 text-body-secondary">© 2023-2026</p>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;