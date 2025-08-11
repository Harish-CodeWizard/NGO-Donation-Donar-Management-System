import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>We are a non-profit organization connecting donors with those in need through transparency and trust. Whether you're donating, managing, or supporting — we're here to make giving easier and more meaningful.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: contact@donation.org</p>
          <p>Phone: +919876543210</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p> &copy; 2025 NGO Donation Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;