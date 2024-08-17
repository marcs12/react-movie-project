import React, { createContext, useState, useContext } from 'react';


export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);


  const addFavorite = (movie) => {
    console.log('Adding to favorites:', movie); 
    setFavorites((prevFavorites) => {
  
      if (!prevFavorites.some(fav => fav.id === movie.id)) {
        return [...prevFavorites, movie];
      }
      return prevFavorites;
    });
  };


  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(fav => fav.id !== movieId)
    );
  };


  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// هوک برای استفاده از context در سایر کامپوننت‌ها
export const useFavorites = () => useContext(FavoritesContext);
