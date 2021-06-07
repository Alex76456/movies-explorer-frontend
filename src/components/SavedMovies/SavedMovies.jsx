import React, { useState, useEffect } from 'react';

import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { SHORT_MOVIE_DURATION_MIN } from '../../utils/constants';

const SavedMovies = ({
  savedMoviesList,
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

  const [ moviesToRender, setMoviesToRender ] = useState([]);

  useEffect(
    () => {
      setMoviesToRender(movies);
    },
    [ movies ]
  );

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      return data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
    }
    return [];
  };

  const searchInSavedHandler = (searchQuery) => {
    setMoviesToRender(searchFilter(movies, searchQuery));
  };

  return (
    <React.Fragment>
      <SearchForm onFilterClick={onFilterClick} onSearch={searchInSavedHandler} />

      {isLoading && <Preloader />}

      {!isLoading &&
      loadingError === '' && (
        <MoviesCardList
          savedMoviesList={savedMoviesList}
          movies={filterIsOn ? filterShortFilm(moviesToRender) : moviesToRender}
          onBookmarkClick={onBookmarkClick}
          isMovieAdded={isMovieAdded}
        />
      )}

      {!isLoading && loadingError !== '' && <div className="movies__error">{loadingError}</div>}
    </React.Fragment>
  );
};

export default SavedMovies;
