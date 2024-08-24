// import React, { useState, useEffect } from "react";
// import mainLogo from "../assets/main-logo.png";
// import { Link } from "react-router-dom";

// const API = import.meta.env.VITE_MOVIE_API_KEY;

// const Header = () => {
//   const [movieData, setMovieData] = useState(null);
//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}`)
//       .then((response) => response.json())
//       .then((data) => setMovieData(data.results[0]));
//   }, []);

//   function menuClick() {
//     const menu = document.querySelector(".dropdown-menu");
//     const menuIcon = document.querySelector(".menu-icon__cheeckbox");
//     if (menuIcon.checked) {
//       menu.classList.add("show");
//     } else {
//       menu.classList.remove("show");
//     }
//   }

//   return (
//     <header>
//       <section className="nav-wrap">
//         <button className="menu-icon" onClick={menuClick}>
//           <input className="menu-icon__cheeckbox" type="checkbox" />
//           <div>
//             <span></span>
//             <span></span>
//           </div>
//         </button>
//         <div className="logo-main">
//           {/* <Link to="/"> */}
//             <a href="/">
//               <img src={mainLogo} alt="35mm Logo" />
//             </a>
//           {/* </Link> */}
//         </div>
//       </section>
//       <section className="dropdown-menu">
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/favorites">Favourites</a>
//           </li>
//         </ul>
//       </section>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import mainLogo from "../assets/main-logo.png";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_MOVIE_API_KEY;

const Header = () => {
  const [movieData, setMovieData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data.results[0]));
  }, []);

  const handleMenuClick = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header>
      <section className="nav-wrap">
        <button className={`menu-icon ${menuOpen ? "active" : ""}`} onClick={handleMenuClick}>
          <input
            className="menu-icon__cheeckbox"
            type="checkbox"
            checked={menuOpen}
            readOnly
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="logo-main">
          <a href="/">
            <img src={mainLogo} alt="35mm Logo" />
          </a>
        </div>
      </section>

      {/* Dropdown Menu for Mobile */}
      <section className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/favorites">Favourites</a>
          </li>
        </ul>
      </section>

      {/* Regular Menu for Desktop */}
      <nav className="regular-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/favorites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

