import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SideNav({ open, active, onChangeCategory, onContactClick }) {
  return (
    <aside className={`side-nav ${open ? "open" : ""}`}>
      <div className="menu">
        <ul>
          <li>
            <a
              className={active === "nowPlaying" ? "active" : ""}
              onClick={() => onChangeCategory("nowPlaying")}
            >
              Now Playing
            </a>
          </li>
          <li>
            <a
              className={active === "popular" ? "active" : ""}
              onClick={() => onChangeCategory("popular")}
            >
              Popular
            </a>
          </li>
          <li>
            <a
              className={active === "topRated" ? "active" : ""}
              onClick={() => onChangeCategory("topRated")}
            >
              Top Rated
            </a>
          </li>
          <li>
            <a
              className={active === "trending" ? "active" : ""}
              onClick={() => onChangeCategory("trending")}
            >
              Trending
            </a>
          </li>
          <li>
            <a
              className={active === "upcoming" ? "active" : ""}
              onClick={() => onChangeCategory("upcoming")}
            >
              Upcoming
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="footer">
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fas fa-globe"></i>
          </a>
        </div>
        <p>
          Copyright © 2022 All Rights Reserved. <br />
          Created by <span className="creator-name">Amer-Hosam</span>
        </p>
      </div>
    </aside>
  );
}

export default SideNav;
