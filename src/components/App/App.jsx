import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import { getAllMovies } from '../../utils/MoviesApi';

const App = () => {
  const [ currentUser, setCurrentUser ] = useState({});
  const [ isLogged, setIsLogged ] = useState(false);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ loadingError, setLoadingError ] = useState('');

  const [ allMovies, setAllMovies ] = useState([]);
  const [ savedMovies, setSavedMovies ] = useState([]);
  const [ filterMovies, setFilterMovies ] = useState([]);

  const [ isSignUpError, setIsSignUpError ] = useState(false);
  const [ isSignInError, setIsSignInError ] = useState(false);

  const [ editIsSuccess, setEditIsSuccess ] = useState(false);
  const [ editIsFailed, setEditIsFailed ] = useState(false);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem('token');
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setIsLogged(true);
            getCurrentUser();
            history.push(path);
          }
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem('token');
          history.push('/');
        });
    }
  }, []);

  const getCurrentUser = () => {
    const token = localStorage.getItem('token');
    mainApi
      .getUserInfo(token)
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onLogin = (email, password) => {
    mainApi
      .signIn(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem('token', data.token);
          setIsLogged(true);
          getCurrentUser();
          history.push('/movies');
        }
      })
      .catch((err) => {
        setIsSignInError(true);
        console.error(err);
      });
  };

  const onRegister = (name, email, password) => {
    mainApi
      .signUp(name, email, password)
      .then((data) => {
        if (data) {
          onLogin(email, password);
        }
      })
      .catch((err) => {
        setIsSignUpError(true);
        console.error(err);
      });
  };

  const onSignOut = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
    setCurrentUser({});

    localStorage.removeItem('allMovies');
    localStorage.removeItem('savedMovies');
    setAllMovies([]);
    setSavedMovies([]);
    setFilterMovies([]);

    history.push('/');
  };

  const changeProfileData = (newUserData) => {
    const { name, email } = newUserData;
    mainApi
      .saveUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setEditIsSuccess(true);
        setEditIsFailed(false);
        setTimeout(() => {
          setEditIsSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setEditIsFailed(true);
        setTimeout(() => {
          setEditIsFailed(false);
        }, 3000);
      });
  };

  const getAllMoviesData = () => {
    getAllMovies()
      .then((data) => {
        const allMoviesData = data.map((item) => {
          const imageURL = item.image ? item.image.url : '';
          return {
            ...item,
            image: `https://api.nomoreparties.co${imageURL}`,
            trailer: item.trailerLink
          };
        });

        localStorage.setItem('allMovies', JSON.stringify(allMoviesData));
        setAllMovies(allMoviesData);
      })
      .catch(() => {
        localStorage.removeItem('allMovies');
        setLoadingError(
          'Во время запроса произошла ошибка. ' +
            'Возможно, проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз'
        );
      });
  };

  const getSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((data) => {
        const savedArray = data.map((item) => ({ ...item, id: item.movieId }));
        localStorage.setItem('savedMovies', JSON.stringify(savedArray));
        setSavedMovies((prev) => savedArray);
      })
      .catch(() => {
        localStorage.removeItem('savedMovies');
        setLoadingError(
          'Во время запроса произошла ошибка. ' +
            'Возможно, проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз'
        );
      });
  };

  useEffect(() => {
    const allMoviesArr = JSON.parse(localStorage.getItem('allMovies'));
    if (allMoviesArr) {
      setAllMovies((prev) => allMoviesArr);
    } else {
      getAllMoviesData();
    }

    const saved = JSON.parse(localStorage.getItem('savedMovies'));
    if (saved) {
      setSavedMovies(saved);
    } else {
      getSavedMovies();
    }
  }, []);

  useEffect(
    () => {
      if (isLogged) {
        getAllMoviesData();
        getSavedMovies();
      }
    },
    [ isLogged ]
  );

  const isMovieAdded = (movie) => savedMovies.some((item) => item.id === movie.id);

  const searchFilter = (data, searchQuery) => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      const filterData = data.filter((item) => regex.test(item.nameRU) || regex.test(item.nameEN));
      if (filterData.length === 0) {
        setLoadingError('Ничего не найдено');
      } else {
        setLoadingError('');
      }
      return filterData;
    }
    return [];
  };

  const searchHandler = (searchQuery) => {
    setIsLoading(true);
    setTimeout(() => {
      setFilterMovies(searchFilter(allMovies, searchQuery));
      setIsLoading(false);
    }, 600);
  };

  const addToBookmarks = (movie) => {
    mainApi
      .addBookmark(movie)
      .then((res) => {
        setSavedMovies([ ...savedMovies, { ...res, id: res.movieId } ]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeFromBookmark = (movie) => {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;

    mainApi
      .removeBookmark(movieId)
      .then((res) => {
        if (res.message === 'Фильм удален') {
          const newArray = savedMovies.filter((item) => item._id !== movieId);
          setSavedMovies([ ...newArray ]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const bookmarkHandler = (m, isAdded) => (isAdded ? addToBookmarks(m) : removeFromBookmark(m));

  useEffect(
    () => {
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    },
    [ savedMovies ]
  );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Route exact path={[ '/', '/movies', '/saved-movies', '/profile' ]}>
            <Header isLogged={isLogged} />
          </Route>

          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute
              exact
              path="/movies"
              movies={filterMovies}
              isLogged={isLogged}
              isLoading={isLoading}
              loadingError={loadingError}
              component={Movies}
              onSubmitSearch={searchHandler}
              onBookmarkClick={bookmarkHandler}
              isMovieAdded={isMovieAdded}
              savedMoviesList={false}
            />

            <ProtectedRoute
              exact
              path="/saved-movies"
              movies={savedMovies}
              isLogged={isLogged}
              isLoading={isLoading}
              loadingError={loadingError}
              component={SavedMovies}
              onBookmarkClick={bookmarkHandler}
              isMovieAdded={isMovieAdded}
              savedMoviesList
            />

            <ProtectedRoute
              exact
              path="/profile"
              isLogged={isLogged}
              successEdit={editIsSuccess}
              failedEdit={editIsFailed}
              component={Profile}
              changeUserInfo={changeProfileData}
              logOutHandler={onSignOut}
            />

            <Route path="/signup">
              <Register signUpHandler={onRegister} isSignUpError={isSignUpError} />
            </Route>

            <Route path="/signin">
              <Login signInHandler={onLogin} isSignInError={isSignInError} />
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
    </CurrentUserContext.Provider>
  );
};

export default App;
