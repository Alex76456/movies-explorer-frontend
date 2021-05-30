import React, { useState } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ moviesCards, isSaved }) => {
  const [ visibleMovies, setVisibleMovies ] = useState(12);

  function showMoreCards() {
    setVisibleMovies(visibleMovies + 3);
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {moviesCards.map((item, i) => {
          return i < visibleMovies && <MoviesCard moviesCard={item} key={i} isSaved={isSaved} />;
        })}
      </ul>

      {moviesCards.length > visibleMovies && (
        <button className="movies-card-list__more-button" type="button" onClick={showMoreCards}>
          Ещё
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
