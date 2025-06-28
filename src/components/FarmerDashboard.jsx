import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });
  const [editProduct, setEditProduct] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch farmer's products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://farmers-market-backend-609k.onrender.com/signups/products', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Network error. Is the backend server running?');
      }
    };
    fetchProducts();
  }, []);

  // Handle add product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://farmers-market-backend-609k.onrender.com/signups/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      if (response.ok) {
        setProducts([...products, data]);
        setNewProduct({ name: '', description: '', price: '', quantity: '' });
        setError('');
      } else {
        setError(data.message || 'Failed to add product');
      }
    } catch (err) {
      setError('Network error. Is the backend server running?');
    }
  };

  // Handle edit product
  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://farmers-market-backend-609k.onrender.com/signups/products/${editProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(editProduct),
      });
      const data = await response.json();
      if (response.ok) {
        setProducts(products.map((p) => (p._id === editProduct._id ? data : p)));
        setEditProduct(null);
        setError('');
      } else {
        setError(data.message || 'Failed to update product');
      }
    } catch (err) {
      setError('Network error. Is the backend server running?');
    }
  };

  // Set product for editing
  const startEditing = (product) => {
    setEditProduct({ ...product });
  };

  // Input change handlers
  const handleNewProductChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleEditProductChange = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  };

  return (
    <div className="farmer-dashboard">
      <header className="dashboard-header">
        
          <img src="./images/FARMER’S.png" alt="Farmer's Market Logo" width="72" height="57" />
                
        <h1>Farmer Dashboard</h1>
        <button className="btn btn-secondary" onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}>
          Logout
        </button>
      </header>

      <main className="dashboard-content">
        {error && <p className="text-danger">{error}</p>}

        {/* Add Product Form */}
        <section className="form-section">
          <h2>Add New Product</h2>
          <form onSubmit={handleAddProduct} className="form-signin">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleNewProductChange}
                required
              />
              <label>Product Name</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                name="description"
                placeholder="Description"
                value={newProduct.description}
                onChange={handleNewProductChange}
                required
              />
              <label>Description</label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleNewProductChange}
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
                name="quantity"
                placeholder="Quantity"
                value={newProduct.quantity}
                onChange={handleNewProductChange}
                required
                min="0"
              />
              <label>Quantity</label>
            </div>
            <button className="btn btn-primary farmer-btn" type="submit">Add Product</button>
          </form>
        </section>

        {/* Edit Product Form */}
        {editProduct && (
          <section className="form-section">
            <h2>Edit Product</h2>
            <form onSubmit={handleEditProduct} className="form-signin">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Product Name"
                  value={editProduct.name}
                  onChange={handleEditProductChange}
                  required
                />
                <label>Product Name</label>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Description"
                  value={editProduct.description}
                  onChange={handleEditProductChange}
                  required
                />
                <label>Description</label>
              </div>
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  placeholder="Price"
                  value={editProduct.price}
                  onChange={handleEditProductChange}
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
                  name="quantity"
                  placeholder="Quantity"
                  value={editProduct.quantity}
                  onChange={handleEditProductChange}
                  required
                  min="0"
                />
                <label>Quantity</label>
              </div>
              <button className="btn btn-primary farmer-btn" type="submit">Update Product</button>
              <button className="btn btn-secondary" type="button" onClick={() => setEditProduct(null)}>Cancel</button>
            </form>
          </section>
        )}

        {/* Product List */}
        <section className="product-list">
          <h2>Your Products</h2>
          {products.length === 0 ? (
            <p>No products added yet.</p>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price ($)</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button className="btn btn-sm btn-primary" onClick={() => startEditing(product)}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
};

export default FarmerDashboard;