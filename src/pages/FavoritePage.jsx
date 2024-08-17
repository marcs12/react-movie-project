import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Favorites from "../globals/Favorites";
import { BrowserRouter, Link } from "react-router-dom";

const Favorite = () => {
  const { favorites, setFavorites } = useContext(Favorites);
  return (
    <>
      <Header />
      <section className="">
        <article className="">
          <img src="" alt="" />
          <p className="hero-section">favourites</p>
        </article>
      </section>
      <section>
        <ul>
          {favorites.length > 0 &&
            favorites.map((movie) => {
              <h3>---{favorites[0]}---</h3>;
              return (
                <li key={movie} className="movie-wrap">
                  <Link to={`/movie/${movie}`}>{movie}</Link>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Favorite;
