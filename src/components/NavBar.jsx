import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

function NavBar({ open, onToggleSide }) {
  return (
    <nav className="nav-vertical">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      <button
        type="button"
        className="nav-menu"
        onClick={onToggleSide}
        aria-label="Toggle side menu"
      >
        <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
      </button>

      <div className="nav-social">
        <a href="#">
          <i className="fa-solid fa-globe" />
        </a>
        <a href="#">
          <i className="fa-solid fa-share-nodes" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
