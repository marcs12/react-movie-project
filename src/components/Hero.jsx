import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import infoBtn from "../assets/circle-info-solid.svg";

const API = import.meta.env.VITE_MOVIE_API_KEY;

const Hero = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data.results));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === movieData.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? movieData.length - 1 : prevSlide - 1,
    );
  };

  return (
    <section className="hero-section">
      <h2>Now Playing</h2>
      <div className="carousel-container">
        {movieData && movieData.length > 0 && (
          <>
            <div
              className="carousel-slides"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {movieData.map((movie, index) => (
                <div key={index} className="carousel-slide">
                  <div className="hero-carousel-content">
                    <div className="hero-image-wrapper">
                      <Link to={`/movie/${movie.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="hero-image"
                        />
                      </Link>
                    </div>
                    <div className="hero-text-wrapper">
                      <h3 className="hero-title">{movie.title}</h3>
                      <p className="hero-description">
                        {movie.overview.split(" ").slice(0, 20).join(" ")}...
                      </p>
                      <div className="hero-info">
                        <img src={infoBtn} alt="More Info" />
                        <div className="hero-info-text">
                          <p>PG</p>
                          <p>1H 36MINS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
              &#10095;
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
