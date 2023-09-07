import React from 'react';
import "./landingpage.css";

const Landingpage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Enord</h1>
        <p>Your one-stop shop for high-quality drones.</p>
        <a href="/productsection" className="cta-button">Explore Drones</a>
      </header>
      <footer className="footer">
        <p>&copy; 2023 ENORD. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landingpage;
