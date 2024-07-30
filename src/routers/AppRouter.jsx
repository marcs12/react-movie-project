import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DetailsPage from "../pages/DetailsPage";
import FavouritesPage from "../pages/FavoritePage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/movie/:id" component={DetailsPage} />  
        <Route path="/favourites" component={FavouritesPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
