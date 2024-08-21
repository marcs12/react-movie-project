import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Favorites from "../globals/Favorites";

const endpoint = "https://api.themoviedb.org/3/movie/";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
const API = import.meta.env.VITE_MOVIE_API_KEY;

const Details = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { favorites, setFavorites } = useContext(Favorites);

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
          <img
            src={`${baseImgURL}${movie.poster_path}`}
            alt="Container Top"
            className="details-image"
          />
        </article>
        <article className="details-content">
          <h1 className="details-title" key="title">
            {movie.title}
          </h1>
          <h2 className="tagline-details">
            {movie.tagline && <span>{movie.tagline}</span>}
          </h2>
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
    </>
  );
};

export default Details;
