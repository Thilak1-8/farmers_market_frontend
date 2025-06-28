import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="p-3 custom_green">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="./images/FARMER’S.png" alt="Logo" className="me-2" width="72" height="57" />
            <span className="fs-4">Farmers Market</span>
          </Link>
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-3 text-white">Home</Link></li>
            <li>
              <a
                href="#Products"
                className="nav-link px-3 text-white"
                onClick={() => scrollToSection('Products')}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="nav-link px-3 text-white"
                onClick={() => scrollToSection('testimonials')}
              >
                Testimonials
              </a>
            </li>
            <li><Link to="/faq" className="nav-link px-3 text-white">FAQs</Link></li>
            <li><Link to="/farmerslist" className="nav-link px-3 text-white">Farmers List</Link></li>
            <li><Link to="/AboutUsPage" className="nav-link px-3 text-white">About</Link></li>
          </ul>
          <div className="text-end">
            <Link to="/login">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-warning">Sign-up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;