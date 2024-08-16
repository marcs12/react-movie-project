// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DetailsPage from "../pages/DetailsPage";
import FavouritesPage from "../pages/FavoritePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
