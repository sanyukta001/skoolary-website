import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="walking-bus walking-bus-3">
        <i className="fas fa-bus"></i>
      </div>
      <div className="walking-bus walking-bus-4">
        <i className="fas fa-bus"></i>
      </div>
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-up">
            <div className="feature-icon">
              <i className="fas fa-satellite-dish"></i>
            </div>
            <h3>GPS Monitor</h3>
            <p>Real-time school bus tracking via driver's phone app for location, speed, and safety.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Parent App</h3>
            <p>Parent facing app to track daily bus status and receive instant alerts for delays, breakdowns, or route changes.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Fleet Dashboard</h3>
            <p>Fleet dashboard for school transport managers to monitor and control bus routes, driver logs, and vehicle health.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-icon">
              <i className="fas fa-bell"></i>
            </div>
            <h3>Instant Alerts</h3>
            <p>Automatic notifications in case of bus reassignment or breakdowns, enables better parent school coordination.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
