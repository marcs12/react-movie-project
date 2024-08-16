import { useEffect, useState } from "react";
const endpoint = "https://api.themoviedb.org/3/movie/";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../styles/components/_thumbnails.scss";


const API = import.meta.env.VITE_MOVIE_API_KEY;
const Home = () => {
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`${endpoint}${category}?api_key=${API}`);
      const json = await response.json();
      setMovies(json.results);
    };

    getMovies();
  }, [category]);

  function handleClick(id) {
    setCategory(id);
  }

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
            return (
              <li key={movie.id} className="movie-wrap">
                <Link to={`/movies/${movie.id}`}>
                  <img src={`${baseImgURL}/${movie.poster_path}`} />
                </Link>
                <div>{movie.title}</div>
                <div>{movie.release_date}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
