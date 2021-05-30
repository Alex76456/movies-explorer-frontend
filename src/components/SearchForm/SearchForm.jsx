import React from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg';

const SearchForm = ({ isLoading }) => {
  //const [ searchText, setSearchText ] = useState('');
  return (
    <section className="search">
      <form className="search-form" noValidate /*onSubmit={handleSubmit}*/>
        <div className="search-form__input-wrapper">
          <input
            name="searchText"
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required /*
            value={searchText || ''}*/
            /*onChange={handleChange}*/
            autoComplete="off"
            disabled={isLoading}
          />
          <button className="search-form__button" type="submit">
            <img className="header__logo" src={searchIcon} alt="поиск" />
          </button>
        </div>
        <div className="search-form__checkbox-wrapper">
          <p className="search-form__checkbox-name">Короткометражки</p>
          <FilterCheckbox />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
