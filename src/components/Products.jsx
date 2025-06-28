import React from 'react';

const Products = () => {
  return (
    <section id="Products">
      <div className="album py-5 text-bg-dark">
        <div className="container">
          <h3>Our Products</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src="./images/istockphoto-1203599923-612x612.jpg" alt="photo" width="100%" height="225" />
                <div className="card-body">
                  <p className="card-text"><strong>Vegetables</strong></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="./images/1681484556199.jpeg" alt="photo" width="100%" height="225" />
                <div className="card-body">
                  <p className="card-text"><strong>Fruits</strong></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="./images/cow-milk.jpg" alt="photo" width="100%" height="225" />
                <div className="card-body">
                  <p className="card-text"><strong>Milk</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;