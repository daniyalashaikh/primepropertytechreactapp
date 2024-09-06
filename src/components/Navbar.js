import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
