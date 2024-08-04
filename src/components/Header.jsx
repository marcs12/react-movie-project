// import React from "react";
import mainLogo from "../assets/main-logo.png";

const Header = () => {
  function menuClick() {
    const menu = document.querySelector(".dropdown-menu");
    const menuIcon = document.querySelector(".menu-icon__cheeckbox");
    if (menuIcon.checked) {
      menu.classList.add("show");
    } else {
      menu.classList.remove("show");
    }
  }
  return (
    <header>
      <section className="nav-wrap">
        <button className="menu-icon" onClick={menuClick}>
          <input className="menu-icon__cheeckbox" type="checkbox" />
          <div>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="logo-main">
          <a href="#">
            <img src={mainLogo} alt="35mm Logo" />
          </a>
        </div>
      </section>
      <section className="dropdown-menu">
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
