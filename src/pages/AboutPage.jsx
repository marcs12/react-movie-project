import React from "react";
import Header from "../components/Header";
import mainLogo from "../assets/main-logo.png";

const About = () => {
  return (
    <>
      <Header />
      <section className="about">
        <h1>About 35MM</h1>
        <p>
          Welcome to 35mm, your go-to movie database for all things cinematic.
        </p>
        <p>
          Dive into a curated collection of films spanning genres and decades.
        </p>
        <p>
          Explore, review, and save your favorites with ease on our
          user-friendly platform.
        </p>
        <figure>
          <img src={mainLogo} alt="35mm Logo" />
        </figure>
      </section>
    </>
  );
};

export default About;
