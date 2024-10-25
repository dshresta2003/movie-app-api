import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Movie Booking Platform. All rights reserved.</p>
    <p>
      <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
    </p>
    <p>Follow us: 
      <a href="https://facebook.com">Facebook</a> | 
      <a href="https://twitter.com">Twitter</a> | 
      <a href="https://instagram.com">Instagram</a>
    </p>
  </footer>
);

export default Footer;