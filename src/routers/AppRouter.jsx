import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DetailsPage from "../pages/DetailsPage";
import FavoritesPage from "../pages/FavoritePage";
import { APP_FOLDER_NAME } from "../globals";

const AppRouter = () => {
  return (
    <BrowserRouter basename={`/${APP_FOLDER_NAME}`}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
    </BrowserRouter>;
  );
};

export default AppRouter;
