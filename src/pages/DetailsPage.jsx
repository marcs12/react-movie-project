import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  return (
    <>
      <Header />
      <section className="">
        <article className="">
          <img src="" alt="" />
          <p className="hero-section">{id}</p>
        </article>
      </section>
    </>
  );
};

export default Details;
