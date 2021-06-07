import React from 'react';

import { useFormWithValidation } from '../../utils/Validation/Validation';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg';

const SearchForm = ({ onFilterClick, onSearch, isLoading }) => {
  const formWithValidation = useFormWithValidation();
  const { searchText } = formWithValidation.values;
  const { handleChange, resetForm } = formWithValidation;
  const [ error, setError ] = React.useState('');

  React.useEffect(
    () => {
      resetForm();
    },
    [ resetForm ]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError('Нужно ввести ключевое слово');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      onSearch(searchText);
      resetForm();
    }
  };

  return (
    <section className="search">
      <form className="search-form" noValidate onSubmit={handleSubmit}>
        <div className="search-form__input-wrapper">
          <input
            name="searchText"
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
            value={searchText || ''}
            onChange={handleChange}
            autoComplete="off"
            disabled={isLoading}
          />
          {error && <span className="search-form__error">{error}</span>}
          <button className="search-form__button" type="submit" disabled={isLoading}>
            <img className="header__logo" src={searchIcon} alt="поиск" />
          </button>
        </div>
        <div className="search-form__checkbox-wrapper">
          <p className="search-form__checkbox-name">Короткометражки</p>
          <FilterCheckbox onFilterClick={onFilterClick} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
