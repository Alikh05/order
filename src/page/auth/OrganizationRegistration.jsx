import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './signupStyles.css';

function OrganizationRegistration() {
  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <h2 className="signup-title">Sign Up as Organization</h2>
        <form className="signup-form">
          <div className="input-container">
            <input type="text" className="signup-input" placeholder="Organization Name" />
          </div>
          <div className="input-container">
            <input type="email" className="signup-input" placeholder="Email" />
          </div>
          <div className="input-container">
            <input type="text" className="signup-input" placeholder="BIN of Organization" />
          </div>
          <div className="input-container">
            <input type="text" className="signup-input" placeholder="Organization Address" />
          </div>
          <div className="input-container">
            <input type="text" className="signup-input" placeholder="Representative's Full Name" />
          </div>
          <div className="input-container">
            <input type="password" className="signup-input" placeholder="Password" />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="signup-footer">
          <p>
            Have an account?{' '}
            <Link to="/login" className="link">Sign in here!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrganizationRegistration;