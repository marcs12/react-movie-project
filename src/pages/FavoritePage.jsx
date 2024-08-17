import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../components/FavoritesProvider'; // Import the useFavorites hook

const FavouritesPage = () => {
  const { favorites, removeFavorite } = useFavorites(); // Use the custom hook

  return (
    <div>
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <button onClick={() => removeFavorite(movie.id)}>
                  Remove from Favorites
                </button>
                <Link to={`/movie/${movie.id}`}>View Details</Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavouritesPage;
