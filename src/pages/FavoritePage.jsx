import React, { useContext, useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Favorites from "../globals/Favorites";
import { Link } from "react-router-dom";

const baseImgURL = "https://image.tmdb.org/t/p/w500/";

const Favorite = () => {
  const { favorites } = useContext(Favorites);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (favorites.length > 0) {
      setLoadedMovies(favorites.slice(0, 10));
    }
  }, [favorites]);

  const loadMoreMovies = () => {
    if (loadedMovies.length < favorites.length) {
      // Load more movies as user scrolls
      const newMovies = favorites.slice(
        loadedMovies.length,
        loadedMovies.length + 10,
      );
      setLoadedMovies((prevMovies) => [...prevMovies, ...newMovies]);
    }
  };

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
    <>
      <Header />
      <section className="favorite-section">
        {favorites.length === 0 ? (
          <div className="no-favorites-message">
            <p>No favorite movies selected.</p>
          </div>
        ) : (
          <>
            <div className="movie-grid">
              {loadedMovies.map((movie) => (
                <Link
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                  className="movie-item"
                >
                  <img
                    src={`${baseImgURL}${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                  />
                </Link>
              ))}
            </div>
            <div ref={containerRef} className="scroll-trigger"></div>
          </>
        )}
      </section>
    </>
  );
};

export default Favorite;
