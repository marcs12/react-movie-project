import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Favorites from "../globals/Favorites";
import { BrowserRouter, Link } from "react-router-dom";
const baseImgURL = "https://image.tmdb.org/t/p/w500/";

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
              <h3>---{favorites[0].id}---</h3>;
              return (
                <li key={movie.id} className="movie-wrap">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`${baseImgURL}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
                 
                <Link to={`/movie/${movie.id}`}>
                  <div>{movie.title}</div>
                  <div>{movie.release_date}</div>
                </Link>
              </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Favorite;
