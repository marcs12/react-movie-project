import React from "react";

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

  // `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API}`

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
        <nav className="subnav">
          <button id="now-playing" className="button-38" role="button">
            Now Playing
          </button>
          <button id="top-rated" className="button-38" role="button">
            Top Rated
          </button>
          <button id="upcoming" className="button-38" role="button">
            Upcoming
          </button>
          <button id="popular" className="button-38" role="button">
            Popular
          </button>
        </nav>
      </section>
      <div className="container-fluid">
        <button onClick={handleClick}>Test Here</button>
        <div className="row">
          {/* <div className="col-12 text-center bg-dark subnav">
            {data.map((Val) => {
              return (
                <>
                <button id={Val.name.toLowerCase().replace(" ", "-")} className="col-sm-2 col-md btn btn-dark">
                  <i className={`${Val.name}`}></i>
                </button>
                </>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SubNav;
