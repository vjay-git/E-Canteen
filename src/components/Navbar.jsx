import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">🍴 E-Canteen</div>
        <ul className="navbar-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button onClick={() => setShowLogin(!showLogin)} className="login-btn">
          {showLogin ? 'Close' : 'Login'}
        </button>
      </nav>

      {showLogin && (
        <div className="login-popup">
          <div className="login-box">
            <h3>Welcome Back!</h3>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="submit-btn">Log In</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
