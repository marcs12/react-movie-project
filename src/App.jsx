
import { useState } from "react";
import { FavoritesProvider } from "./components/FavoritesProvider"; 
import AppRouter from "./routers/AppRouter";
import Favorites from "./globals/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/styles.scss";
import backgroundImg from "./assets/background.png";

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
      <img src="#" alt="Background" className="background" />
      <Favorites.Provider value={{ favorites, setFavorites }}>
        <AppRouter />
      </Favorites.Provider>
    </>
  );
}

export default App;



