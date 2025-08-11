import React from 'react';
import './Landing.css'; 
import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider'; 
import Footer from '../components/Footer'; 

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-root">
      <div className="topbar">
        <span>+919876543210</span>
        <span>contact@DONATION.org</span>
      </div>

      <nav className="navbar">
        <div className="logo">DONATION TRACKING SYSTEM</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><button onClick={() => navigate('/admin')}>Admin</button></li>
          <li><button onClick={() => navigate('/charity')}>Charity</button></li>
          <li><button onClick={() => navigate('/donor')}>Donor</button></li>
        </ul>
      </nav>

      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>TOGETHER WE CAN IMPROVE THEIR LIVES</h1>
          <p>SO LET'S DO IT!</p>
          <button onClick={() => navigate('/donate')} className="donate-btn">
            DONATE NOW
          </button>
        </div>
      </section>

      <ImageSlider />
      <Footer/>

    </div>
  );
};

export default Landing;
