import { useEffect, useState } from "react";
import starSolid from "../assets/Images/star-solid.svg";
import starRegular from "../assets/Images/star-regular.svg";
import { useFavorites } from "../components/FavoritesProvider"; 
import { Link } from "react-router-dom";

const endpoint = "https://api.themoviedb.org/3/movie/";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
const API = import.meta.env.VITE_MOVIE_API_KEY;

const Home = () => {
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleClick = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`${endpoint}${category}?api_key=${API}`);
      const json = await response.json();
      setMovies(json.results || []); 
    };

    getMovies();
  }, [category]);

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.some(fav => fav.id === movie.id);
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div>
      <nav className="subnav">
        <button onClick={() => handleClick("now_playing")}>Now Playing</button>
        <button onClick={() => handleClick("top_rated")}>Top Rated</button>
        <button onClick={() => handleClick("upcoming")}>Upcoming</button>
        <button onClick={() => handleClick("popular")}>Popular</button>
      </nav>

      <ul>
        {movies.length > 0 && movies.map((movie) => {
          const isFavorite = favorites.some(fav => fav.id === movie.id); 

          return (
            <li key={movie.id} className="movie-wrap">
              <Link to={`/movies/${movie.id}`}>
                <img src={`${baseImgURL}${movie.poster_path}`} alt={movie.title} />
              </Link>
              <div className="stars">
                <span onClick={() => toggleFavorite(movie)}>
                  <img src={isFavorite ? starSolid : starRegular} alt="Star" className="star-icon" />
                </span>
              </div>
              <Link to={`/movies/${movie.id}`}>
                <div>{movie.title}</div>
                <div>{movie.release_date}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
