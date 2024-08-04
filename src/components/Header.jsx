// import React from "react";
import mainLogo from "../assets/main-logo.png";

const Header = () => {
  return (
    <header>
      <section className="nav-wrap">
        <div className="menu-icon">
          <input className="menu-icon__cheeckbox" type="checkbox" />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="logo-main">
          <a href="#">
            <img src={mainLogo} alt="35mm Logo" />
          </a>
        </div>
      </section>
      <section className="dropdown-menu show">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Favourites</a>
          </li>
          <li>
            <a href="#">Info</a>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
