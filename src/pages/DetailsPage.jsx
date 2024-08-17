import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom"; 
import GlobalContext from "../globals/GlobalContext";

const endpoint = "https://api.themoviedb.org/3/movie/";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
const API = import.meta.env.VITE_MOVIE_API_KEY;

const Details = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { data, setData } = useContext(GlobalContext);

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

      <h3>{data}</h3>
      <button onClick={() => setData(favorites + "X")}></button>
      
      <section className="details-section">
        <h2>Now Playing</h2>
        <div className="details-image-container">
          <img
            src={`${baseImgURL}${movie.poster_path}`}
            alt="Container Top"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title" key="title">
            {movie.title}
          </h1>
          <div className="details-details" key="details">
            <span className="rating" key="rating">
              {movie.vote_average}
            </span>
            <span className="duration" key="duration">
              {movie.runtime} mins
            </span>
          </div>
          <p className="details-description" key="description">
            {movie.overview}
          </p>
        </div>
      </section>
    </>
  );
};

export default Details;
