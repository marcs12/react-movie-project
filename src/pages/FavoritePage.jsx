import React, { useContext, useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Favorites from "../globals/Favorites";
import { Link } from "react-router-dom";
import starSolid from "../assets/Images/star-solid.svg";
import starRegular from "../assets/Images/star-regular.svg";

const baseImgURL = "https://image.tmdb.org/t/p/w500/";

const Favorite = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const containerRef = useRef(null);
  const { favorites, setFavorites } = useContext(Favorites);

  useEffect(() => {
    if (favorites.length > 0) {
      setLoadedMovies(favorites.slice(0, 128));
    }
  }, [favorites]);

  const loadMoreMovies = () => {
    if (loadedMovies.length < favorites.length) {
      const newMovies = favorites.slice(
        loadedMovies.length,
        loadedMovies.length + 10,
      );
      setLoadedMovies((prevMovies) => [...prevMovies, ...newMovies]);
    }
  };

  // Function to handle favorite toggle
  const toggleFavorite = (movie) => {
    if (favorites.some((obj) => obj.id === movie.id)) {
      // Remove from favorites
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadMoreMovies();
      }
    },
    {
      root: null,
      threshold: 0.1,
    },
  );
  return (
    <>
      <Header />
      <h1 className="fave-heading">Favourites</h1>
      <section className="favorite-section">
        {favorites.length === 0 ? (
          <div className="no-favorites-message">
            <p>No favorite movies selected. </p>
            <br></br>
            <p>
              Please select your favourite movies by pressing on the star icon.
            </p>
          </div>
        ) : (
          <>
            <div className="movie-grid">
              <ul className="subnav-ul">
                {loadedMovies.map((movie) => {
                  let isFavorite = false;
                  if (favorites.some((obj) => obj.id === movie.id)) {
                    isFavorite = true;
                  }

                  return (
                    <li key={movie.id} className="movie-wrap">
                      <Link to={`/movie/${movie.id}`}>
                        <img
                          src={`${baseImgURL}${movie.poster_path}`}
                          alt={movie.title}
                        />
                      </Link>
                      <div className="stars">
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
                      <div className="movie-title">
                        <Link to={`/movie/${movie.id}`}>
                          <h2>{movie.title}</h2>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div ref={containerRef} className="scroll-trigger"></div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Favorite;
