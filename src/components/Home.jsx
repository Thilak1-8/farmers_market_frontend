import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Hyderabad',
      text: 'Connecting with local farmers through the Farmers Market has been a game-changer! Their fresh produce is top-notch, and I trust their commitment to quality. My family’s eating healthier than ever!',
    },
    {
      name: 'Michael Chen',
      location: 'Chennai',
      text: 'I love the personal connection I’ve built with farmers here. Their passion shines through in every product. The tomatoes and greens are so fresh, it’s transformed our meals and lifestyle!',
    },
    {
      name: 'Priya Sharma',
      location: 'Bangalore',
      text: 'The Farmers Market is amazing! I trust these farmers completely—their organic veggies are incredible. Knowing where my food comes from makes healthy living so rewarding.',
    },
    {
      name: 'David Kumar',
      location: 'Mumbai',
      text: 'This platform connects you directly to farmers who care. Their produce is fresh, and the trust we’ve built is unmatched. My diet’s never been healthier, thanks to them!',
    },
    {
      name: 'Anita Rao',
      location: 'Delhi',
      text: 'The Farmers Market has brought me closer to local farmers. Their dedication to fresh, quality produce is inspiring. It’s a joy to live healthier with their amazing fruits and veggies!',
    },
  ];

  return (
    <div className="home">
      <Header />
      <div className="cover-image text-white">
        <div className="overlay">
          <div className="col-md-6 px-0">
            <h1>Welcome to Farmers Market</h1>
            <p className="lead">Discover fresh, local produce directly from farmers you trust.</p>
            <Link to="/all-products" className="btn btn-primary btn-lg">Shop Now</Link>
          </div>
        </div>
      </div>
      <section id="Products" className="products-section py-5">
        <Products />
      </section>
      <br/>
      <section id="testimonials" className="testimonials-section py-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="testimonial-card">
                  <h3>{testimonial.name}</h3>
                  <p className="location">{testimonial.location}</p>
                  <p className="text">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <br/>
      <Footer />
    </div>
  );
};

export default Home;