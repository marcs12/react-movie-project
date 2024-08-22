import React from 'react';
import { Link } from 'react-router-dom'; 
import mainLogo from "../assets/main-logo.png";
import './footer.scss';

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <Link to="/">
                <img src={mainLogo} alt="35mm Logo" />
            </Link>
            <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/favorites">Favourites</Link></li>
            </ul>
            <p>Copyright © FWD 2024 Yining Li Mahdi Roozbahani Marc Sapa Kate Shepherd</p>
        </div>
    </footer>
  );
};

export default Footer;

