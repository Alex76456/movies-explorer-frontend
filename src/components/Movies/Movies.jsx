import React, { useState } from 'react';

import './Movies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { SHORT_MOVIE_DURATION_MIN } from '../../utils/constants';

const Movies = ({
  savedMoviesList,
  onSubmitSearch,
  movies,
  isLoading,
  loadingError,
  onBookmarkClick,
  isMovieAdded
}) => {
  const [ filterIsOn, setFilterIsOn ] = useState(false);

  const filterShortFilm = (moviesToFilter) =>
    moviesToFilter.filter((item) => item.duration < SHORT_MOVIE_DURATION_MIN);

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  return (
    <React.Fragment>
      <SearchForm onFilterClick={onFilterClick} onSearch={onSubmitSearch} />

      {isLoading && <Preloader />}

      {!isLoading &&
      loadingError === '' && (
        <MoviesCardList
          savedMoviesList={savedMoviesList}
          movies={filterIsOn ? filterShortFilm(movies) : movies}
          onBookmarkClick={onBookmarkClick}
          isMovieAdded={isMovieAdded}
        />
      )}

      {!isLoading && loadingError !== '' && <div className="movies__error">{loadingError}</div>}
    </React.Fragment>
  );
};

export default Movies;
