import React from 'react';

import './MoviesCard.css';

import durationFormatter from '../../utils/movieCardDuration';

const MoviesCard = ({ savedMoviesList, movie, onBookmarkClick, isMovieAdded }) => {
  const { nameRU, duration, trailer, image } = movie;

  let isAdded = isMovieAdded(movie);

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    onBookmarkClick(movie, !isAdded);
  };

  const removeHandler = () => {
    onBookmarkClick(movie, !isAdded);
  };

  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <div className="movie-card__info-wrapper">
          <h3 className="movie-card__title">{nameRU}</h3>
          <p className="movie-card__duration">{durationFormatter(duration)}</p>
        </div>
        {savedMoviesList ? (
          <button
            className="movie-card__bookmark-btn movie-card__bookmark-btn-remove"
            onClick={removeHandler}
          />
        ) : (
          <button
            className={
              isAdded ? (
                'movie-card__bookmark-btn movie-card__bookmark-btn-saved'
              ) : (
                'movie-card__bookmark-btn movie-card__bookmark-btn-not-saved'
              )
            }
            onClick={handleBookmarkClick}
          />
        )}
      </div>

      <a className="movie-card__link" href={trailer} target="_blank" rel="noopener noreferrer">
        <img className="movie-card__image" src={image} alt={nameRU} />
      </a>
    </li>
  );
};

export default MoviesCard;
