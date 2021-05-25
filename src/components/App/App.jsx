import React, { useState } from 'react';
import { Route, Switch /*, Redirect, useHistory */ } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const [ isLogged, setIsLogged ] = useState(false);

  const onLoginSubmith = () => {
    setIsLogged(true);
  };

  return (
    <div className="root">
      <div className="page">
        <Route exact path={[ '/', '/movies', '/saved-movies', '/profile' ]}>
          <Header isLogged={isLogged} />
        </Route>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/signin">
            <Login onLogin={onLoginSubmith} />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>

        <Route exact path={[ '/', '/movies', '/saved-movies' ]}>
          <Footer />
        </Route>
      </div>
    </div>
  );
};

export default App;
