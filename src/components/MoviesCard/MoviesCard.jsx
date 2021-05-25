import React, { useState } from 'react';

import './MoviesCard.css';

const MoviesCard = ({ moviesCard, isSaved }) => {
  const [ saved, setSeved ] = useState(false);

  const handleBookmarkClick = () => {
    setSeved(!saved);
  };

  const bookmarkBtnClass = `movie-card__bookmark-btn ${saved
    ? 'movie-card__bookmark-btn-saved'
    : 'movie-card__bookmark-btn-not-saved'}
		`;

  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <div className="movie-card__info-wrapper">
          <h3 className="movie-card__title">{moviesCard.title}</h3>
          <p className="movie-card__duration">{moviesCard.duration} </p>
        </div>
        {isSaved ? (
          <button className="movie-card__bookmark-btn movie-card__bookmark-btn-remove" /*onClick={}*/ />
        ) : (
          <button className={bookmarkBtnClass} onClick={handleBookmarkClick} />
        )}
      </div>

      <img className="movie-card__image" src={moviesCard.image} alt={moviesCard.title} />
    </li>
  );
};

export default MoviesCard;
