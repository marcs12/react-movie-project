import React, { useEffect, useState } from "react";
import { moviePoster, apiKey, API, movieAPI } from "../globals/globalVariables";

const Hero = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(movieAPI);
      const data = await response.json();
      console.log(data);
      setMovie(data.results);
    };

    fetchData();
  }, [setMovie]);

  console.log(movie.map((Val) => Val.poster_path));

  return (
    <>
      <section className="hero-section"></section>
    </>
  );
};

export default Hero;
