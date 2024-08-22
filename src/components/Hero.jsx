import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import heroContainerBottom from "../assets/buttons-imported/container-bottom.png";
import heroContainerTop from "../assets/buttons-imported/container-top.png";
import { Link } from "react-router-dom";
import infoBtn from "../assets//circle-info-solid.svg";

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
        <article className="carousel">
          <Carousel>
            {movieData &&
              movieData.map((movie, index) => (
                <Carousel.Item key={index}>
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="d-block w-100"
                    />
                  </Link>
                  <Carousel.Caption>
                    <h3 id="caption-title">{movie.title}</h3>
                    <div className="hero-caption">
                      <p className="caption-info">
                        <Link to={`/movie/${movie.id}`}>More Info</Link>
                      </p>
                      <Link to={`/movie/${movie.id}`}>
                        <img src={infoBtn} alt="Info Button" id="info-button" />
                      </Link>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>
        </article>
      </div>
    </section>
  );
};

export default Hero;
