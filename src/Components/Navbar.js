import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#282c34' }} className="navbar"> {/* Fixed inline style */}
      <div className="navbar-logo">
        <img 
          src={logo} 
          alt="Movie Booking Logo" 
          style={{ height: '40px', width: 'auto' }} // Set desired height
        />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
