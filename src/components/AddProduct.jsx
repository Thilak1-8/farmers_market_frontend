import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://farmers-market-backend-609k.onrender.com/signups/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ name, description, price, quantity }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Product added successfully!');
        navigate('/'); // Redirect to home or dashboard
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Product addition error:', err);
    }
  };

  return (
    <div className="farmer-product">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src="./images/FARMER’S.png" alt="Logo" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Add a Product</h1>

          {error && <p className="text-danger">{error}</p>}

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Product Name</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label>Description</label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min="0"
              step="0.01"
            />
            <label>Price ($)</label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              min="0"
            />
            <label>Quantity</label>
          </div>

          <button className="btn btn-primary w-100 py-2 farmer-btn" type="submit">
            Add Product
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddProduct;