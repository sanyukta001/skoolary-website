import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/icon.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Skoolary Logo" />
          <span>Skoolary</span>
        </div>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#problems" onClick={closeMobileMenu}>Problems</a></li>
          <li><a href="#features" onClick={closeMobileMenu}>Features</a></li>
          <li><a href="#target-users" onClick={closeMobileMenu}>Users</a></li>
          <li><a href="#competition" onClick={closeMobileMenu}>Analysis</a></li>
          <li><a href="#benefits" onClick={closeMobileMenu}>Benefits</a></li>
        </ul>
        
        <div className="nav-actions">
          <button className="nav-btn-primary">Get Started</button>
        </div>
        
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
