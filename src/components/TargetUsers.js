import React from 'react';
import './TargetUsers.css';

const TargetUsers = () => {
  return (
    <section id="target-users" className="target-users">
      <div className="walking-bus walking-bus-1">
        <i className="fas fa-bus"></i>
      </div>
      <div className="walking-bus walking-bus-2">
        <i className="fas fa-bus"></i>
      </div>
      <div className="container">
        <h2 className="section-title">Target Users</h2>
        <div className="users-grid">
          <div className="user-card animate-card">
            <div className="user-icon">
              <i className="fas fa-clipboard-check"></i>
            </div>
            <h3>Fleet Manager</h3>
            <p>School Transport Managers who oversee fleet operations.</p>
          </div>
          <div className="user-card animate-card">
            <div className="user-icon">
              <i className="fas fa-user-cog"></i>
            </div>
            <h3>School Admin</h3>
            <p>School Administrators looking for scalable digital solutions.</p>
          </div>
          <div className="user-card animate-card">
            <div className="user-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Parents</h3>
            <p>Parents who want real-time assurance of their child's commute safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;
