import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import heroContainerBottom from "../assets/buttons-imported/container-bottom.png";
import heroContainerTop from "../assets/buttons-imported/container-top.png";

const API = import.meta.env.VITE_MOVIE_API_KEY;

const Hero = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data.results));
  }, []);

  return (
    <section className="hero-section">
      <h2>Now Playing</h2>
      <div className="hero-image-container">
        <figure className="hero-container">
          <img
            src={heroContainerTop}
            alt="Container Top"
            className="hero-container-top"
          />
          <img
            src={heroContainerBottom}
            alt="Container Bottom"
            className="hero-container-bottom"
          />
        </figure>

        {movieData && (
          <Carousel>
            {movieData.map((movie, index) => (
              <Carousel.Item key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="d-block w-100"
                />
                <Carousel.Caption>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <div className="hero-details">
                    <span className="rating">{movie.vote_average}</span>
                    <span className="duration">{movie.runtime} mins</span>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Hero;

