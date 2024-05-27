import React from "react";
import "./navbargreen.css";
export const NavbarGreen = () => {
  return (
    <nav className="navbar-style d-flex flex-row ">
      <a href="#" className="link-style mx-3">
        <h2 className="link-style"> The Rick and Morty Web </h2>
      </a>
      <a href="#" className="link-style mx-5">
        CHARACTERS
      </a>
      <a href="#" className="link-style">
        EPISODES
      </a>
    </nav>
  );
};
