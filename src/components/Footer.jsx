import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/main-logo.png";
import discordLogo from "../../src/assets/discord-button.png";
import facebookLogo from "../../src/assets/facebook-button.png";
import youtubeLogo from "../../src/assets/youtube-button.png";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="footer-logo-container">
        <Link to="/">
          <img src={mainLogo} alt="35mm Logo" className="footer-logo" />
        </Link>
      </div>
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/favorites">Favourites</Link>
          </li>
        </ul>
      </div>
      <div className="footer-social-links">
        <a href="https://discord.com">
          <img src={discordLogo} alt="Discord Logo" />
        </a>
        <a href="https://facebook.com">
          <img src={facebookLogo} alt="Facebook Logo" />
        </a>
        <a href="https://youtube.com">
          <img src={youtubeLogo} alt="YouTube Logo" />
        </a>
      </div>
      <p className="footer-p">
        Copyright © FWD 2024 - Yining Li - Mahdi Roozbahani- Marc Sapa - Kate
        Shepherd
      </p>
    </footer>
  );
};

export default Footer;
