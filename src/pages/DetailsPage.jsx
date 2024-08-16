import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  return (
    <>
      <section className="">
        <article className="">
          <img src="" alt="" />
          <p class= "hero-section">{id}</p>

        </article>
      </section>
    </>
  );
};

export default Details;
