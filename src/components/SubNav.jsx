import React from "react";

const SubNav = () => {
  const data = [
      {
        name: "Popular",
      },
      {
        name: "Top Rated"
      },
      {
        name: "Upcoming"
      },
      {
        name: "Now Playing"
      },

  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bg-dark subnav">
            {data.map((Val) => {
              return (
                <>
                <button className="col-sm-2 col-md btn btn-dark">
                  <i className={`${Val.name}`}></i>
                </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNav;
