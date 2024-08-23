import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from "../assets/main-logo.png";


const Footer = () => {
  return (
    <footer>
       <Link to="/">
            <span class="line"></span>
                <img src={mainLogo} alt="35mm Logo" />
                <span class="line"></span>
            </Link>
        <div className="footer-container">
            <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/favorites">Favourites</Link></li>
            </ul>
            <ul className="sub-menulinks">
            <li><Link to="/now_playing">Now Playing</Link></li>
            <li><Link to="/top_rated">Top Rated</Link></li>
            <li><Link to="/upcoming">Upcoming</Link></li>
            </ul>
          
            <p>Copyright © FWD 2024 Yining Li Mahdi Roozbahani Marc Sapa Kate Shepherd</p>
        </div>
    </footer>
  );
};

export default Footer;
