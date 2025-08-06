import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="walking-bus walking-bus-1">
        <i className="fas fa-bus"></i>
      </div>
      <div className="walking-bus walking-bus-2">
        <i className="fas fa-bus"></i>
      </div>
      <div className="container">
        <h2 className="section-title">Why Choose Skoolary</h2>
        <div className="benefits-list">
          <div className="benefit-item" data-aos="fade-up">
            <div className="benefit-number">01</div>
            <div className="benefit-content">
              <h3>Parents Trust</h3>
              <p>Peace of mind for parents through real-time bus tracking and instant alerts.</p>
            </div>
          </div>
          <div className="benefit-item" data-aos="fade-up" data-aos-delay="100">
            <div className="benefit-number">02</div>
            <div className="benefit-content">
              <h3>Fleet Efficiency</h3>
              <p>Increased operational efficiency and safety for school fleet managers.</p>
            </div>
          </div>
          <div className="benefit-item" data-aos="fade-up" data-aos-delay="200">
            <div className="benefit-number">03</div>
            <div className="benefit-content">
              <h3>Easy Commute</h3>
              <p>Builds trust and transparency between schools and families.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
