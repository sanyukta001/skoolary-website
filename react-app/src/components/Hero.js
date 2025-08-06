import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Smart Bus Tracking</span>
            <br />for Modern Schools
          </h1>
          <p className="hero-description">
            We are pleased to introduce Skoolary, a smart and reliable bus tracking system designed to ensure a smoother, safer, and more efficient transportation experience for students and peace of mind for parents and guardians.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-interface">
                <div className="app-header">
                  <i className="fas fa-bus"></i>
                  <span>Skoolary</span>
                </div>
                <div className="tracking-dots">
                  <div className="dot active"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="route-line"></div>
                <div className="bus-icon">
                  <i className="fas fa-bus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
