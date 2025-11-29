import React from "react";
const IMG_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  const title = movie.title || movie.name || "No Title";
  const overview = movie.overview || "No overview available.";
  const date = movie.release_date || movie.first_air_date || "Unknown";
  const vote = movie.vote_average || 0;

  const poster = movie.poster_path
    ? `${IMG_BASE}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  const rating5 = vote / 2;
  const fullStars = Math.floor(rating5);
  const hasHalf = rating5 - fullStars >= 0.5;
  const stars = [];

  if (vote === 0) {
    stars.push(<i key="zero" className="fa-solid fa-star text-muted fs-6"></i>);
  } else {
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`full-${i}`} className="fa-solid fa-star text-warning fs-6"></i>
      );
    }
    if (hasHalf) {
      stars.push(
        <i
          key="half"
          className="fa-regular fa-star-half-stroke text-warning fs-6"
        ></i>
      );
    }
  }

  return (
    <div className="item">
      <div className="cardImage">
        <img src={poster} alt={title} />
      </div>

      <div className="overlay">
        <h1 className="title">{title}</h1>
        <p className="desc">{overview}</p>
        <p className="date">Release Date : {date}</p>
        <h3 className="rate">{stars}</h3>
        <h3 className="vote">{vote.toFixed(1)}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
