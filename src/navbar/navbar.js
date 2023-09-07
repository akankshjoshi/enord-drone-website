// Navbar.js
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><a href='/'>ENORD</a></div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="productsection">Products</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <div className="nav-buttons">
        <button className="login-button"><a href='/loginform'>Login</a></button>
        <button className="signup-button"><a href='/signup'>Sign Up</a></button>
      </div>
    </nav>
  );
}

export default Navbar;
