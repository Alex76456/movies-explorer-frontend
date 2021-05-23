import React from 'react';

import './Movies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesFromSearch } from '../../data/data';

const Movies = ({ isLoading }) => {
  return (
    <React.Fragment>
      <SearchForm />
      {isLoading && <Preloader />}
      <MoviesCardList moviesCards={moviesFromSearch} isSaved={false} />
    </React.Fragment>
  );
};

export default Movies;
