import React from 'react';
import './Navbar.css';
import logo from '../assets/icon.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Skoolary Logo" />
          <span>Skoolary</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#problems">Problems</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#target-users">Users</a></li>
          <li><a href="#competition">Analysis</a></li>
          <li><a href="#benefits">Benefits</a></li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
