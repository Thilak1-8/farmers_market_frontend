// src/components/Footer.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer>
      <div className="container1">
        <div className="footer-content">
          <h3 id="Contact">Contact Us</h3>
          <p>Email: <a href="mailto:info@email.com">info@email.com</a></p>
          <p>Phone: <a href="tel:+91998876757">+91 99887 6757</a></p>
          <p>Address: 123 Street</p>
        </div>

        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul className="list">
            <li><a href="#">Home</a></li>
            <li><a href="#Products">Products</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-content" id="aboutus">
          <h3>Follow Us</h3>
          <ul className="list social-links">
            <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="bottom-bar">
        <p>&copy; 2024 Farmers Market. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
