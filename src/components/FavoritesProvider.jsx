import { createContext, useState } from "react";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    console.log("Adding to favorites:", movie);
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === movie.id)) {
        return [...prevFavorites, movie];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== movieId),
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const FavoritesContext = createContext();
