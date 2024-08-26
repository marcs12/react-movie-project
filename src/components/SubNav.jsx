import React from "react";
import SubNavMovies from "./SubNavMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import './styles/base/bootstrap.scss';
// import '/styles/components/_thumbnails.scss';

const SubNav = () => {
  const data = [
    {
      name: "Popular",
    },
    {
      name: "Top Rated",
    },
    {
      name: "Upcoming",
    },
    {
      name: "Now Playing",
    },
  ];

  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
  const API = `https://api.themoviedb.org/3`;

  const handleClick = async () => {
    const response = await fetch(
      `${API}/movie/popular?language=en-US&page=1&api_key=${apiKey}`,
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <section className="sub-navigation">
        <SubNavMovies />
      </section>
    </>
  );
};

export default SubNav;
