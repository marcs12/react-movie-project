import { useEffect, useState, useContext } from "react";
import starSolid from "../assets/Images/star-solid.svg";
import starRegular from "../assets/Images/star-regular.svg";
import Favorites from "../globals/Favorites";

const endpoint = "https://api.themoviedb.org/3/movie/";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
import { BrowserRouter, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../styles/components/_thumbnails.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API = import.meta.env.VITE_MOVIE_API_KEY;

const Home = () => {
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const { favorites, setFavorites } = useContext(Favorites);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`${endpoint}${category}?api_key=${API}`);
      const json = await response.json();
      setMovies(json.results || []); // Ensure movies is an array
    };

    getMovies();
  }, [category]);

  function handleClick(id) {
    setCategory(id);
  }

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
    <div>
      <nav className="subnav">
        <button
          id="now-playing"
          className="button-38"
          role="button"
          onClick={() => handleClick("now_playing")}
        >
          Now Playing
        </button>
        <button
          id="top-rated"
          className="button-38"
          role="button"
          onClick={() => handleClick("top_rated")}
        >
          Top Rated
        </button>
        <button
          id="upcoming"
          className="button-38"
          role="button"
          onClick={() => handleClick("upcoming")}
        >
          Upcoming
        </button>
        <button
          id="popular"
          className="button-38"
          role="button"
          onClick={() => handleClick("popular")}
        >
          Popular
        </button>
      </nav>

      <ul>
        {movies.length > 0 &&
          movies.map((movie) => {
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
  );
};

export default Home;
