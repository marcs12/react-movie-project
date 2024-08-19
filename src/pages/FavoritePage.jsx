import React, { useContext } from "react";
import Header from "../components/Header";
import Favorites from "../globals/Favorites";
import { BrowserRouter, Link } from "react-router-dom";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
import starSolid from "../assets/Images/star-solid.svg";
import starRegular from "../assets/Images/star-regular.svg";

const Favorite = () => {
  const { favorites, setFavorites } = useContext(Favorites);

  // Function to handle favorite toggle
  const toggleFavorite = (movie) => {
    if (favorites.some((obj) => obj.id === movie.id)) {
      // Remove from favorites
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      // Add to favorites
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <>
      <Header />
      <section className="">
        <article className="">
          <img src="" alt="" />
          <p className="hero-section">favourites</p>
        </article>
      </section>

      <section>
        {favorites.length === 0 ? (
          <p>No favorite movies selected.</p>
        ) : (
          <ul>
            {favorites.map((movie) => {
              const isFavorite = favorites.some((obj) => obj.id === movie.id);

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

                  <Link to={`/movie/${movie.id}`}>
                    <div>{movie.title}</div>
                    <div>{movie.release_date}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};

export default Favorite;

