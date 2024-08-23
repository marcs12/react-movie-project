import { useEffect, useState, useContext } from "react";
import starSolid from "../assets/Images/star-solid.svg";
import starRegular from "../assets/Images/star-regular.svg";
import Favorites from "../globals/Favorites";
import { Link } from "react-router-dom";

const endpoint = "https://api.themoviedb.org/3/movie/";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
const API = import.meta.env.VITE_MOVIE_API_KEY;

const Home = () => {
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const { favorites, setFavorites } = useContext(Favorites);

  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`${endpoint}${category}?api_key=${API}`);
      const json = await response.json();
      setMovies(json.results || []); // Ensure movies is an array
    };

    getMovies();
  }, [category]);

  const handleClick = (id) => {
    setCategory(id);
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
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Update search query when the search button is clicked
  const handleSearchSubmit = () => {
    setSearchQuery(searchTerm); 
  };

  // Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      {/* Search bar */}
      <div className="search_bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>

      <nav className="subnav">
        <button className="button-38" onClick={() => handleClick("now_playing")}>Now Playing</button>
        <button className="button-38" onClick={() => handleClick("top_rated")}>Top Rated</button>
        <button className="button-38" onClick={() => handleClick("upcoming")}>Upcoming</button>
        <button className="button-38" onClick={() => handleClick("popular")}>Popular</button>
      </nav>

      <ul>
        {filteredMovies.length > 0 &&
          filteredMovies.map((movie) => {
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
