// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Make sure to create this CSS file as well

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Prime Property Tech. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-logo.png" alt="Facebook" className="footer-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-logo.png" alt="Instagram" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

