import React from 'react';
import './Problems.css';

const Problems = () => {
  return (
    <section id="problems" className="problems">
      <div className="walking-bus walking-bus-1">
        <i className="fas fa-bus"></i>
      </div>
      <div className="walking-bus walking-bus-2">
        <i className="fas fa-bus"></i>
      </div>
      <div className="container">
        <h2 className="section-title">The Problems We Solve</h2>
        <div className="problems-grid">
          <div className="problem-card animate-card">
            <div className="problem-number">01</div>
            <h3>Fleet Chaos</h3>
            <p>Schools lack a centralized platform to effectively manage their school bus fleets, routes, schedules, and driver communications.</p>
          </div>
          <div className="problem-card animate-card">
            <div className="problem-number">02</div>
            <h3>No Visibility</h3>
            <p>Parents currently have no real-time visibility into their child's bus location or status, causing anxiety and communication issues.</p>
          </div>
          <div className="problem-card animate-card">
            <div className="problem-number">03</div>
            <h3>Disruption</h3>
            <p>Unexpected incidents like bus breakdowns or reassignments create chaos due to lack of instant updates for parents and schools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
