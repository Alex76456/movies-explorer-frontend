import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLogged }) {
  return (
    <nav className="navigation">
      {!isLogged && (
        <Link to="/signup" className="navigation__link">
          Регистрация
        </Link>
      )}

      {isLogged && (
        <React.Fragment>
          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__link_is-active"
          >
            Фильмы
          </NavLink>

          <NavLink
            to="/saved-movies"
            className="navigation__link"
            activeClassName="navigation__link_is-active"
          >
            Сохранённые фильмы
          </NavLink>
        </React.Fragment>
      )}
    </nav>
  );
}

export default Navigation;
