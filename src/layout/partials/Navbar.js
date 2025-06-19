import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/navbar.css';
import logo from '../../assests/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <Link to="/dashboard" className="nav-logo">
          <img src={logo} alt="Logo" />
          <span>HelpDesk Pro</span>
        </Link>

        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/tickets" className="nav-link">Tickets</Link>

          {localStorage.getItem('auth-token') ? (
            <button
              className="nav-link logout-btn"
              onClick={() => {
                localStorage.removeItem('auth-token');
                window.location.replace('/');
              }}
            >
              LOGOUT
            </button>
          ) : (
            <Link to="" className="nav-link">
              <button className="login-btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
