import { useState, useEffect } from "react";
import { FavoritesProvider } from "./components/FavoritesProvider";
import AppRouter from "./routers/AppRouter";
import Favorites from "./globals/Favorites";
import "../src/styles/styles.scss";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = sessionStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <Favorites.Provider value={{ favorites, setFavorites }}>
        <AppRouter />
      </Favorites.Provider>
    </>
  );
}

export default App;
