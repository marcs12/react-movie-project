import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const baseImgURL = "https://image.tmdb.org/t/p/w500/";

const Favorite = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize the first set of movies to display if there are any favorites
    if (Favorites.length > 0) {
      setLoadedMovies(Favorites.slice(0, 10)); // Initially load 10 movies
    }
  }, [Favorites]);

  const loadMoreMovies = () => {
    if (loadedMovies.length < Favorites.length) {
      // Load more movies as user scrolls
      const newMovies = Favorites.slice(
        loadedMovies.length,
        loadedMovies.length + 10,
      );
      setLoadedMovies((prevMovies) => [...prevMovies, ...newMovies]);
    }
  };

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreMovies();
        }
      },
      {
        root: null,
        threshold: 1.0,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loadedMovies]);

  return (
    <div>
      <h1>Your Favorites</h1>
      {Favorites.length > 0 ? (
        <ul>
          {Favorites.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <button onClick={() => removeFavorite(movie.id)}>
                  Remove from Favorites
                </button>
                <Link to={`/movie/${movie.id}`}>View Details</Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorite;
