import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from "../assets/main-logo.png";
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo-container">
        <span className="line"></span>
        <Link to="/">
          <img src={mainLogo} alt="35mm Logo" />
        </Link>
        <span className="line"></span>
      </div>
      <div className="footer-container">
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/favorites">Favourites</Link></li>
          <li><Link to="/now_playing">Now Playing</Link></li>
          <li><Link to="/top_rated">Top Rated</Link></li>
          <li><Link to="/upcoming">Upcoming</Link></li>
        </ul>
        <figure className="social-links">
            <a href="https://discord.com">
              <img src={discordLogo} alt="Discord Logo" />
            </a>
            <a href="https://facebook.com">
              <img src={facebookLogo} alt="Facebook Logo" />
            </a>
            <a href="https://youtube.com">
              <img src={youtubeLogo} alt="YouTube Logo" />
            </a>
          </figure>
      </div>
            <p>Copyright © FWD 2024 Yining Li Mahdi Roozbahani Marc Sapa Kate Shepherd</p>
    </footer>
  );
};

export default Footer;
