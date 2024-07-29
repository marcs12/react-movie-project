import React from "react";

const SubNav = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center w-100 text-uppercase p-3 subnav">
            <a href="#popular">Popular</a>
            <a href="#top-rated">Top Rated</a>
            <a href="#upcoming">Upcoming</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNav;
