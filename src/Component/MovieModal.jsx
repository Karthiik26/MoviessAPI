import React from "react";
import "../CSS/MovieModal.css";
import Modal from "react-modal";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <>
      <Modal
        isOpen={!!movie}
        onRequestClose={onClose}
        contentLabel="Movie Details"
        className="Moviemodal"
        overlayClassName="Moviemodal-overlay"
      >
        <button onClick={onClose} className="Moviemodal-close">
          &times;
        </button>
        <div className="MovieModal-Container">
          <div className="Moviemodal-image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="Moviemodal-Info">
            <div className="Moviemodal-Title">{movie.title} </div>
            <div className="Moviemodal-Rating">
              {" "}
              Rating <b>{Math.round(movie.vote_average).toFixed(1)}/10</b>
            </div>
            <div className="Moviemodal-Rating">
              {movie.original_language === "en" && (
                <span>Languages : - English</span>
              )}
            </div>
            <div className="Moviemodal-Rating">
              {movie.adult ? <span>Above - 18+</span> : <span>Above - 6+</span>}
            </div>
            <div className="Moviemodal-Description">
              OverView {movie.overview}{" "}
            </div>
            <div className="Moviemodal-Release">
              Realiase Date <b>{movie.release_date}</b>{" "}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MovieModal;
