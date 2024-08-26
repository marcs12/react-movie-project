import { useEffect, useState, useContext } from "react";
import starSolid from "../assets/Images/star-solid.svg";
import starRegular from "../assets/Images/star-regular.svg";
import Favorites from "../globals/Favorites";
import { Link } from "react-router-dom";
import searchImg from "../assets/magnifying-glass-solid.svg";
import moreInfo from "../assets/circle-info-solid.svg";
import caretLeft from "../assets/caret-left-solid.svg";
import caretRight from "../assets/caret-right-solid.svg";

const endpoint = "https://api.themoviedb.org/3/movie/";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
const API = import.meta.env.VITE_MOVIE_API_KEY;

const Home = () => {
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]); // Store all movies fetched
  const { favorites, setFavorites } = useContext(Favorites);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`${endpoint}${category}?api_key=${API}`);
      const json = await response.json();
      setMovies(json.results || []);
      setAllMovies(json.results || []); // Store all fetched movies
    };

    getMovies();
  }, [category]);

  const handleClick = (id, placeholder) => {
    setCategory(id);
    setPlaceholderText(`Search for ${placeholder}...`);
    setSearchTerm(""); // Reset search term when changing categories
  };

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

  // Update search term as user types
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
      // Reset to all movies when search term is empty
      setMovies(allMovies);
    } else {
      const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm),
      );
      setMovies(filteredMovies);
    }
  };

  const [placeholderText, setPlaceholderText] = useState(
    "Search for Now Playing...",
  );

  return (
    <div>
      <nav className="subnav">
        <img src={caretRight} alt="Previous" className="caret-right" />
        <button
          className="button-38"
          onClick={() => handleClick("now_playing", "Now Playing")}
        >
          Now Playing
        </button>
        <button
          className="button-38"
          onClick={() => handleClick("top_rated", "Top Rated")}
        >
          Top Rated
        </button>
        <button
          className="button-38"
          onClick={() => handleClick("upcoming", "Upcoming")}
        >
          Upcoming
        </button>
        <button
          className="button-38"
          onClick={() => handleClick("popular", "Popular")}
        >
          Popular
        </button>
        <img src={caretLeft} alt="caret left" className="caret-left" />
      </nav>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder={placeholderText}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img src={searchImg} alt="Search" className="search-btn" />
      </div>

      <ul className="subnav-ul">
        {movies.length > 0 &&
          movies.map((movie) => {
            let isFavorite = false;
            if (favorites.some((obj) => obj.id === movie.id)) {
              isFavorite = true;
            }

            return (
              <li key={movie.id} className="movie-wrap">
                <div className="hover-overlay">
                  <h2>{movie.title}</h2>
                  <br />
                  <p>{movie.overview.split(" ").slice(0, 50).join(" ")}...</p>
                  <br />
                  <Link to={`/movie/${movie.id}`}>
                    <p>More Info</p>
                    <img src={moreInfo} alt="More Info" className="more-info" />
                  </Link>
                </div>
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
