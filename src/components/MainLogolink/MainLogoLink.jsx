import React from 'react';
import logo from '../../images/logo.svg';
import './MainLogoLink.css';

import { Link } from 'react-router-dom';

const MainLogoLink = () => {
  return (
    <Link to="/" className="main-logo__link">
      <img className="main-logo__image" src={logo} alt="logo" />
    </Link>
  );
};

export default MainLogoLink;
