import React, { useContext } from "react";
import Header from "../components/Header";
import Favorites from "../globals/Favorites";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
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
          <Carousel>
            {favorites.map((movie) => {
              const isFavorite = favorites.some((obj) => obj.id === movie.id);

              return (
                <Carousel.Item key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      className="d-block w-100"
                      src={`${baseImgURL}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                  <Carousel.Caption>
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
                      <h3>{movie.title}</h3>
                      <p>{movie.release_date}</p>
                    </Link>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        )}
      </section>
    </>
  );
};

export default Favorite;

