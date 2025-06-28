import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Displayfarmer.css';

const Displayfarmer = () => {
  const [farmers, setFarmers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch('http://localhost:5000/signups/farmers');
        const data = await response.json();
        if (response.ok) {
          setFarmers(data);
        } else {
          setError(data.message || 'Failed to fetch farmers');
        }
      } catch (err) {
        setError('Network error. Is the backend server running?');
      }
    };
    fetchFarmers();
  }, []);

  const filteredFarmers = farmers.filter((farmer) =>
    [farmer.location, farmer.name, farmer.farmName].some((field) =>
      field?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="display-farmers">
      <header className="farmers-header">
        <Link to="/">
          <img src="./images/FARMER’S.png" alt="Farmer's Market Logo" width="72" height="57" />
        </Link>
        <h1>Farmers List</h1>
      </header>

      <main className="farmers-content">
        {error && <p className="text-danger">{error}</p>}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by location, name, or farm name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control mb-4"
          />
        </div>
        {filteredFarmers.length === 0 ? (
          <p>No farmers found.</p>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Farmer ID</th>
                <th>Name</th>
                <th>Farm Name</th>
                <th>Location</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {filteredFarmers.map((farmer) => (
                <tr key={farmer.farmerID}>
                  <td>{farmer.farmerID || 'N/A'}</td>
                  <td>{farmer.name || 'N/A'}</td>
                  <td>{farmer.farmName || 'N/A'}</td>
                  <td>{farmer.location || 'N/A'}</td>
                  <td>{farmer.contactInfo || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default Displayfarmer;