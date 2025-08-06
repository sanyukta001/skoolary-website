import React from 'react';
import './Competition.css';

const Competition = () => {
  return (
    <section id="competition" className="competition">
      <div className="walking-bus walking-bus-3">
        <i className="fas fa-bus"></i>
      </div>
      <div className="walking-bus walking-bus-4">
        <i className="fas fa-bus"></i>
      </div>
      <div className="container">
        <h2 className="section-title">Competitive Analysis</h2>
        <p className="section-subtitle">Manual logbooks, spreadsheet-based management, and apps like TrackSchoolBus.</p>
        <div className="competition-grid">
          <div className="competition-card" data-aos="fade-up">
            <div className="competition-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>Outdated Manual Systems</h3>
            <p>Logbooks and spreadsheets are outdated and cause manual errors.</p>
          </div>
          <div className="competition-card" data-aos="fade-up" data-aos-delay="100">
            <div className="competition-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Lack of Integration</h3>
            <p>Current GPS apps lack full system integration and customization.</p>
          </div>
          <div className="competition-card" data-aos="fade-up" data-aos-delay="200">
            <div className="competition-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Unresponsive Tracking</h3>
            <p>Real time tracking is often become irresponsive for instant parent alerts.</p>
          </div>
          <div className="competition-card" data-aos="fade-up" data-aos-delay="300">
            <div className="competition-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3>Overpriced Services</h3>
            <p>Current service providers are overpriced for most schools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
