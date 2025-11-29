import React from "react";
import MovieCard from "./MovieCard.jsx";

function HeroSection({ movies, searchTerm, setSearchTerm, onSearchChange }) {
  return (
    <section id="hero" className="container py-5">
      <div className="hero-search-wrapper">
        <input
          id="search"
          type="search"
          placeholder="Search"
          className="hero-search form-control bg-transparent text-white shadow-none border-white"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>

      <div className="row g-4 mt-3 text-white">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeIn"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
