import React from "react";
import "../CSS/MovieCrads.css";

const MovieCrads = ({ movie, onClick }) => {
  return (
    <>
      <div className="MovieCard-Container" onClick={onClick}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="MovieCard-image"
        />
        <div className="MovieCard-Info">
          <div className="MovieCard-Cont">
            <div className="MovieCard-Title">{movie.title}</div>
            <div className="MovieCard-Rating">
              {Math.round(movie.vote_average).toFixed(1)}/10{" "}
            </div>
          </div>
          <div className="MovieCard-Description">{movie.overview}</div>
        </div>
      </div>
    </>
  );
};

export default MovieCrads;
