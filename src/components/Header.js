import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img src="/Image.jpg" alt="logo" />
          <span>Little Lemon</span>
        </NavLink>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          onClick={() => setMenuOpen(false)}
        >
          Menu
        </NavLink>
        <NavLink
          to="/bookings"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          onClick={() => setMenuOpen(false)}
        >
          Book a Table
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
