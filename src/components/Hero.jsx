import { useState, useEffect } from "react";
import heroContainerBottom from "../assets/buttons-imported/container-bottom.png";
import heroContainerTop from "../assets/buttons-imported/container-top.png";
import nextSlideBtn from "../assets/buttons-imported/next-slide-button.png";
import prevSlideBtn from "../assets/buttons-imported/back-slide-button.png";

const API = import.meta.env.VITE_MOVIE_API_KEY;

const Header = () => {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data.results));
  }, []);

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movieData.length);
  };

  const handlePrevSlide = () => {
    setCurrentMovieIndex(
      (prevIndex) => (prevIndex - 1 + movieData.length) % movieData.length,
    );
  };

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
        <button className="prev-slide" onClick={handlePrevSlide}>
          <img src={prevSlideBtn} alt="Previous Slide" />
        </button>
        <button className="next-slide" onClick={handleNextSlide}>
          <img src={nextSlideBtn} alt="Next Slide" />
        </button>

        {movieData && movieData[currentMovieIndex] && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData[currentMovieIndex].poster_path}`}
            alt={movieData[currentMovieIndex].title}
            className="hero-image"
          />
        )}
      </div>
      <div className="hero-content">
        {movieData && movieData[currentMovieIndex] && (
          <>
            <h1 className="hero-title" key="title">
              {movieData[currentMovieIndex].title}
            </h1>
            <div className="hero-details" key="details">
              <p className="rating" key="rating">
                {movieData[currentMovieIndex].vote_average} &#9733;
              </p>
              <p className="release-date" key="release-date">
                <strong>Release:</strong>{" "}
                {movieData[currentMovieIndex].release_date}
              </p>
            </div>
            <p className="hero-description" key="description">
              {movieData[currentMovieIndex].overview}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Header;
