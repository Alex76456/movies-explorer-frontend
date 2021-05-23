import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MainLogoLink from '../MainLogolink/MainLogoLink';
import BurgerMenuBtn from '../BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ProfileBtn from '../ProfileBtn/ProfileBtn';
import SignInBtn from '../SignInBtn/SignInBtn';

const Header = ({ isLogged }) => {
  const [ width, setWidth ] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width <= 768;

  const [ isOpen, setIsOpen ] = useState(false);
  const handleBurgerMenuClick = () => setIsOpen(!isOpen);

  return (
    <Switch>
      <Route exact path="/">
        <header className="header header_type_promo">
          <MainLogoLink />

          {isLogged && isMobile && <BurgerMenuBtn handleClick={handleBurgerMenuClick} />}

          {!isLogged && (
            <div className="header__nav-wrapper header__nav-wrapper_type_unauth">
              <Navigation isLogged={isLogged} />
              <SignInBtn />
            </div>
          )}

          {!isMobile &&
          isLogged && (
            <div className="header__nav-wrapper header__nav-wrapper_type_auth">
              <Navigation isLogged={isLogged} />
              <ProfileBtn />
            </div>
          )}

          {isLogged && <BurgerMenu isOpen={isOpen} closeHandler={handleBurgerMenuClick} />}
        </header>
      </Route>
      <Route path="/*">
        <header className="header">
          <MainLogoLink />

          {isLogged && isMobile && <BurgerMenuBtn handleClick={handleBurgerMenuClick} />}

          {!isLogged && (
            <div className="header__nav-wrapper header__nav-wrapper_type_unauth">
              <Navigation isLogged={isLogged} />
              <SignInBtn />
            </div>
          )}

          {!isMobile &&
          isLogged && (
            <div className="header__nav-wrapper header__nav-wrapper_type_auth">
              <Navigation isLogged={isLogged} />
              <ProfileBtn />
            </div>
          )}

          {isLogged && <BurgerMenu isOpen={isOpen} closeHandler={handleBurgerMenuClick} />}
        </header>
      </Route>
    </Switch>
  );
  /*
  return (
    <Switch>
      <Route exact path="/">
        <header className="header header_type_main">
          <Link to="/" className="header__logo-link ">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>

          <Navigation />
        </header>
      </Route>
      <Route path="/*">
        <header className="header">
          <Link to="/" className="header__logo-link ">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>

          <Navigation />
        </header>
      </Route>
    </Switch>
  );*/
};

export default Header;
