import React from "react";
import Header from "../components/Header";
import mainLogo from "../assets/main-logo.png";
import discordLogo from "../../src/assets/discord-button.png";
import facebookLogo from "../../src/assets/facebook-button.png";
import youtubeLogo from "../../src/assets/youtube-button.png";

const About = () => {
  return (
    <>
      <Header />
      <section className="about">
        <h1>About 35MM</h1>
        <article className="details-about">
          <p>
            Welcome to 35mm, your go-to movie database for all things cinematic.
            Dive into a curated collection of films spanning genres and decades.
            Explore, review, and save your favorites with ease on our
            user-friendly platform.
            <br />
            <br />
            We would like to acknowledge The Movie DB API, the API referenced is
            for educational purposes only.
            <br />
            <a href="https://www.themoviedb.org/?language=en-CA">
              Visit The Movie DB
            </a>
            .
          </p>

          <figure className="social-links">
            <a href="https://discord.com">
              <img src={discordLogo} alt="Discord Logo" />
            </a>
            <a href="https://facebook.com">
              <img src={facebookLogo} alt="Facebook Logo" />
            </a>
            <a href="https://youtube.com">
              <img src={youtubeLogo} alt="YouTube Logo" />
            </a>
          </figure>
        </article>
      </section>
    </>
  );
};

export default About;
