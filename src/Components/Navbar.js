import React, { useState, useCallback } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  // Close menu
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <div className="Navbar">
      {/* Left Section - Logo */}
      <div className="left">
        <img
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt="Google Logo"
          className="logo"
        />
      </div>

      {/* Hamburger Icon (only visible on mobile) */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`right ${menuOpen ? 'menu-open' : ''}`}>
        <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="/about" className="nav-link" onClick={closeMenu}>About</a>
        <a href="/services" className="nav-link" onClick={closeMenu}>Services</a>
        <a href="/#contact" className="nav-link" onClick={closeMenu}>Contact Us</a>
        <a href="/SignUp" className="SignUp" onClick={closeMenu}>Sign Up</a>
        <a href="/login" className="login" onClick={closeMenu}>Login</a>
      </nav>
    </div>
  );
};

export default Navbar;
