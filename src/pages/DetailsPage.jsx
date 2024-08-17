import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";

const endpoint = "https://api.themoviedb.org/3/movie/";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
const API = import.meta.env.VITE_MOVIE_API_KEY;

const Details = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

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
      <section className="hero-section">
        <article className="">
          <img src={`${baseImgURL}${movie.poster_path}`} alt={movie.title} />
          
          <Link to={`/movie/${movie.id}`}>
            
          </Link>
          <div>{movie.title}</div>
          <div>{movie.release_date}</div>
          <div>{movie.overview}</div>
        </article>
      </section>
    </>
  );
};

export default Details;
