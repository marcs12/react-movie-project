import React, { useState, useEffect } from "react";
import mainLogo from "../assets/main-logo.png";

const API = import.meta.env.VITE_MOVIE_API_KEY;

const Header = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data.results[0]));
  }, []);

  function menuClick() {
    const menu = document.querySelector(".dropdown-menu");
    const menuIcon = document.querySelector(".menu-icon__cheeckbox");
    if (menuIcon.checked) {
      menu.classList.add("show");
    } else {
      menu.classList.remove("show");
    }
  }

  return (
    <header>
      <section className="hero-section">
        <div className="hero-image-container">
          {movieData && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.title}
              className="hero-image"
            />
          )}
        </div>
        <div className="hero-content">
          {movieData && (
            <>
              <h1 className="hero-title">{movieData.title}</h1>
              <div className="hero-details">
                <span className="rating">{movieData.vote_average}</span>
                <span className="duration">{movieData.runtime} mins</span>
              </div>
              <p className="hero-description">{movieData.overview}</p>
            </>
          )}
        </div>
      </section>
      <section className="dropdown-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Favourites</a>
          </li>
          <li>
            <a href="#">Info</a>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
