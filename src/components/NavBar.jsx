import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">TecHouse</Link>
      <ul className="navbar-links">
        <li><Link to="/category/heladeras">Heladeras</Link></li>
        <li><Link to="/category/lavarropas">Lavarropas</Link></li>
        <li><Link to="/category/microondas">Microondas</Link></li>
      </ul>
      <div className="cart-widget">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">0</span>
      </div>
    </div>
  );
};

export default NavBar;
