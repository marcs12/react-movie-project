import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Favorites from "../globals/Favorites";
import starSolid from "../assets/Images/star-solid.svg";
import starRegular from "../assets/Images/star-regular.svg";
import Footer from "../components/Footer";
import containerTop from "../assets/buttons-imported/container-top.png";
import containerBottom from "../assets/buttons-imported/container-bottom.png";

const endpoint = "https://api.themoviedb.org/3/movie/";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
const API = import.meta.env.VITE_MOVIE_API_KEY;

const Details = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { favorites, setFavorites } = useContext(Favorites);

  const isFavorite = favorites.some((obj) => obj.id === movie?.id);

  const toggleFavorite = (movie) => {
    if (favorites.some((obj) => obj.id === movie.id)) {
      // Remove from favorites
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      // Add to favorites
      setFavorites([...favorites, movie]);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`${endpoint}${id}?api_key=${API}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching the movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <section className="details-section">
        <article className="details-image-container">
          <figure className="img-star-container">
            <img
              src={containerTop}
              alt="Top Container"
              className="container-top-details"
            />
            <img
              src={containerBottom}
              alt="Bottom Container"
              className="container-bottom-details"
            />
            <img
              src={`${baseImgURL}${movie.poster_path}`}
              alt="Container Top"
              className="details-image"
            />
            <div className="stars-details">
              <span
                className={`star ${isFavorite ? "favorite" : ""}`}
                onClick={() => toggleFavorite(movie)}
              >
                <img
                  src={isFavorite ? starSolid : starRegular}
                  alt="Star"
                  className="star-icon"
                />
              </span>
            </div>
          </figure>
        </article>
        <article className="details-content">
          <h1 className="details-title" key="title">
            {movie.title}
          </h1>
          <blockquote>{movie.tagline && <p>{movie.tagline}</p>}</blockquote>
          <p className="details-description" key="description">
            {movie.overview}
          </p>
          <div className="details-details" key="details">
            <p className="rating" key="rating">
              {movie.vote_average.toFixed(2)}
            </p>
            <p className="duration" key="duration">
              {movie.runtime} mins
            </p>
            <p className="release-date" key="release-date">
              {movie.release_date}
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Details;
