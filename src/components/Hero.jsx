import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import infoBtn from "../assets/circle-info-solid.svg";
import bottomContainer from "../assets/buttons-imported/container-bottom.png";
import topContainer from "../assets/buttons-imported/container-top.png";

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
                      <img
                        src={bottomContainer}
                        alt="Container Bottom"
                        className="bottom-container"
                      />
                      <img
                        src={topContainer}
                        alt="Container Top"
                        className="top-container"
                      />
                      <Link to={`/movie/${movie.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                          alt={movie.title}
                          className="hero-image"
                        />
                      </Link>
                    </div>
                    <div className="hero-text-wrapper">
                      <h3 className="hero-title">{movie.title}</h3>
                      <hr className="hero-hr" />
                      <p className="hero-description">
                        {movie.overview.split(" ").slice(0, 45).join(" ")}...
                      </p>
                      <Link to={`/movie/${movie.id}`} className="hero-link">
                        <div className="hero-info">
                          <span className="more-info-btn">
                            <p>More Info</p>
                            <img src={infoBtn} alt="More Info" />
                          </span>
                          <p className="release-date" key="release-date">
                            {movie.release_date}
                          </p>
                        </div>
                      </Link>
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
