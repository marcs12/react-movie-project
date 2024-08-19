import React, { useContext, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import Header from "../components/Header";
import Favorites from "../globals/Favorites";
import { Link } from "react-router-dom";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
import starSolid from "../assets/Images/star-solid.svg";
import starRegular from "../assets/Images/star-regular.svg";

const Favorite = () => {
  const { favorites, setFavorites } = useContext(Favorites);
  const carouselRef = useRef(null);

  const toggleFavorite = (movie) => {
    if (favorites.some((obj) => obj.id === movie.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  // Infinite scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;

    // Handle "slide" event
    const handleSlideEnd = () => {
      const activeIndex = carousel.querySelector('.carousel-item.active').dataset.index;
      if (parseInt(activeIndex) === favorites.length - 1) {
        setTimeout(() => {
          // Manually reset to the first slide with no animation
          carousel.classList.remove('slide');
          carousel.querySelector('.carousel-item.active').classList.remove('active');
          carousel.querySelector('.carousel-item').classList.add('active');
        }, 500); // Timing depends on your slide interval
      }
    };

    // Listen for Bootstrap carousel "slid" event
    carousel.addEventListener('slid.bs.carousel', handleSlideEnd);

    // Cleanup event listener on component unmount
    return () => {
      carousel.removeEventListener('slid.bs.carousel', handleSlideEnd);
    };
  }, [favorites]);

  return (
    <>
      <Header />
      <section className="favorite-carousel">
        {favorites.length === 0 ? (
          <p>No favorite movies selected.</p>
        ) : (
          <Carousel ref={carouselRef} interval={3000} ride="carousel">
            {favorites.map((movie, index) => {
              const isFavorite = favorites.some((obj) => obj.id === movie.id);

              return (
                <Carousel.Item key={movie.id} data-index={index}>
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


