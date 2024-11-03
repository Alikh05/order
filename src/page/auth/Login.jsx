import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import googleIcon from './icons/google_logo.png'; 
import Navbar from '../../components/Navbar';

function Login() {
  return (
    <div>
    <Navbar /> {/* Add Navbar at the top */}
    <div className="signin-container">
    <h2 className="signin-title">Log in to HelpNet</h2>
    <div className="google-signin-button">
        <img src={googleIcon} alt="Google icon" className="google-icon" /> {/* Use the imported image */}
        Sign in with Google
    </div>
    <div className="divider">
        <span>or</span>
    </div>
    <form className="signin-form">
        <div className="input-container">
        <input
            type="email"
            className="signin-input"
            placeholder="Email"
        />
        </div>
        <div className="input-container">
        <input
            type="password"
            className="signin-input"
            placeholder="Password"
        />
        </div>
        <button type="submit" className="signin-button">
        Log In
        </button>
    </form>
    <div className="signup-footer">
        <p>
        Don’t have an account?{' '}
        <Link to="/" className="link">Sign up here!</Link>
        </p>
    </div>
    </div>
    </div>
  );
}

export default Login;
