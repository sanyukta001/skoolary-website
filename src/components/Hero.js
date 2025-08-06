import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    { icon: "🚌", title: "Real-time Tracking", desc: "Live bus location updates" },
    { icon: "⏰", title: "Smart Scheduling", desc: "Predictive arrival times" },
    { icon: "🔔", title: "Instant Notifications", desc: "Push alerts for parents" },
    { icon: "📱", title: "Mobile App", desc: "Easy-to-use interface" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🚀</span>
            <span>Trusted by 500+ Schools</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">Smart Bus Tracking</span>
            <br />
            <span className="hero-subtitle">for Modern Schools</span>
          </h1>
          
          <p className="hero-description">
            Transform your school transportation with Skoolary's intelligent bus tracking system. 
            Real-time updates, predictive analytics, and peace of mind for parents and administrators.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              <span>Get Started</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className="btn-secondary">
              <i className="fas fa-play"></i>
              <span>Watch Demo</span>
            </button>
          </div>
          
          <div className="hero-features">
            <div className="feature-showcase">
              <div className="feature-icon">{features[currentFeature].icon}</div>
              <div className="feature-content">
                <h4>{features[currentFeature].title}</h4>
                <p>{features[currentFeature].desc}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-interface">
                <div className="app-header">
                  <div className="app-logo">
                    <i className="fas fa-bus"></i>
                    <span>Skoolary</span>
                  </div>
                  <div className="app-status">
                    <div className="status-dot active"></div>
                    <span>Live</span>
                  </div>
                </div>
                
                <div className="map-container">
                  <div className="map-grid">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="map-cell"></div>
                    ))}
                  </div>
                  <div className="bus-marker">
                    <i className="fas fa-bus"></i>
                  </div>
                  <div className="route-path"></div>
                </div>
                
                <div className="tracking-info">
                  <div className="tracking-item">
                    <div className="tracking-label">Bus #12</div>
                    <div className="tracking-value">5 min away</div>
                  </div>
                  <div className="tracking-item">
                    <div className="tracking-label">Speed</div>
                    <div className="tracking-value">35 km/h</div>
                  </div>
                </div>
                
                <div className="notification-badge">
                  <i className="fas fa-bell"></i>
                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="floating-elements">
            <div className="floating-card card-1">
              <i className="fas fa-clock"></i>
              <span>ETA: 8:15 AM</span>
            </div>
            <div className="floating-card card-2">
              <i className="fas fa-users"></i>
              <span>45 Students</span>
            </div>
            <div className="floating-card card-3">
              <i className="fas fa-shield-alt"></i>
              <span>Safe Route</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="particle-field"></div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
