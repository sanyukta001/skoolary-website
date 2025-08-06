import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <i className="fas fa-bus"></i>
            <span>Skoolary</span>
          </div>
          <p>&copy; 2024 Skoolary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
