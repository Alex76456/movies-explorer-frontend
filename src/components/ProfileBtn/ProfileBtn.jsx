import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileBtn.css';
import profileIcon from '../../images/profile-icon.svg';

function ProfileBtn() {
  return (
    <Link to="/profile" className="profile-btn__link">
      <div className="profile-btn__wrapper">
        <img className="profile-btn__logo" src={profileIcon} alt="logo" />
        <p className="profile-btn__text">Аккаунт</p>
      </div>
    </Link>
  );
}

export default ProfileBtn;
