import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
  <div className="splash">
    <h1>Welcome to Classic Rental houses!</h1>
    <p>Join us and explore our amazing features.</p>
    <div className="horizontal-buttons">
      <Link to="/login" className="button">Login</Link>
      <Link to="/register" className="button">Register</Link>
    </div>
  </div>
);

export default SplashPage;
