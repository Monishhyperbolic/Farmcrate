import React from 'react';
import './Navbar.css';  

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="https://imgbb.com/">
          <img 
            src="https://i.ibb.co/qFBHbgc4/Farm-Crate-Logo-1-1.png" 
            className="logo" 
            alt="Logo"
          />
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    
    </nav>
  );
};

export default Navbar;
