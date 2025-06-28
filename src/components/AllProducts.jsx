import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllProducts.css';

const AllProducts = () => {
  const [farmersProducts, setFarmersProducts] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/signups/all-products');
        const data = await response.json();
        if (response.ok) {
          // Group products by farmerID
          const grouped = data.reduce((acc, product) => {
            const farmerID = product.farmerID;
            if (!acc[farmerID]) {
              acc[farmerID] = {
                farmer: product.farmer || { name: 'Unknown', farmName: 'Unknown' },
                products: [],
              };
            }
            acc[farmerID].products.push({
              _id: product._id,
              name: product.name,
              description: product.description || 'N/A',
              price: product.price,
              quantity: product.quantity,
            });
            return acc;
          }, {});
          setFarmersProducts(grouped);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Network error. Is the backend server running?');
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <div className="all-products">
      <header className="all-products-header">
        <Link to="/">
          <img src="./images/FARMER’S.png" alt="Farmer's Market Logo" width="72" height="57" />
        </Link>
        <h1>All Products</h1>
      </header>

      <main className="all-products-content">
        {error && <p className="text-danger">{error}</p>}
        {Object.keys(farmersProducts).length === 0 ? (
          <p>No products available.</p>
        ) : (
          Object.entries(farmersProducts).map(([farmerID, { farmer, products }]) => (
            <div key={farmerID} className="farmer-products-section">
              <h2>{farmer.name} - {farmer.farmName}</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price ($)</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.price.toFixed(2)}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default AllProducts;