import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-bg">
        <img
          src={process.env.PUBLIC_URL + "Navbar/Shape.png"}
          alt="Navbar Shape"
        />
      </div>
      <div className="navbar-icon">
        <img
          src={process.env.PUBLIC_URL + "/Navbar/Navbar Icon.png"}
          alt="Summer Exploring"
        ></img>
      </div>
      <div className="navbar-container">
        <ul className="navbar-links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">MENU</a>
          </li>

          <li>
            <a href="/">OUR STORY</a>
          </li>
          <li>
            <a href="/">CONTACT US</a>
          </li>
        </ul>
        <div className="navbar-search">
          <img
            className="navbar-search-btn"
            src={process.env.PUBLIC_URL + "Navbar/Search.png"}
            alt="Search Button"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
