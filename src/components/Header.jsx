import React, { useState, useEffect } from "react";
import mainLogo from "../assets/main-logo.png";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_MOVIE_API_KEY;

const Header = () => {
  const [movieData, setMovieData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data.results[0]));
  }, []);

  const handleMenuClick = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header>
      <section className="nav-wrap">
        <button
          className={`menu-icon ${menuOpen ? "active-nav" : ""}`}
          onClick={handleMenuClick}
        >
          <input
            className="menu-icon__cheeckbox"
            type="checkbox"
            checked={menuOpen}
            readOnly
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="logo-main">
          <a href="/">
            <img src={mainLogo} alt="35mm Logo" />
          </a>
        </div>
        {/* Dropdown Menu for Mobile */}
        <section className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/favorites">Favourites</a>
            </li>
          </ul>
        </section>

        {/* Regular Menu for Desktop */}
        <nav className="regular-menu">
          <ul>
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
        </nav>
        <div className="desktop-logo">
          <a href="/">
            <img src={mainLogo} alt="35mm Logo" />
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
