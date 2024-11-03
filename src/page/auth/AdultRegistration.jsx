import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'; // Import Navbar
import './signupStyles.css';

function AdultRegistration() {
  return (
    <div>
      <Navbar /> {/* Add Navbar at the top */}
      <div className="signup-container">
        <h2 className="signup-title">Sign Up as Adult</h2>
        <form className="signup-form">
          <div className="input-container">
            <input type="text" className="signup-input" placeholder="Full Name" />
          </div>
          <div className="input-container">
            <input type="email" className="signup-input" placeholder="Email" />
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

export default AdultRegistration;