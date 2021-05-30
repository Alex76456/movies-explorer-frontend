import React from 'react';

import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { savedMovies } from '../../data/data';

const SavedMovies = ({ isLoading }) => {
  return (
    <React.Fragment>
      <SearchForm />
      {isLoading && <Preloader />}
      <MoviesCardList moviesCards={savedMovies} isSaved={true} />
    </React.Fragment>
  );
};

export default SavedMovies;
