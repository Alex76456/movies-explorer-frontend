import React from 'react';

import './StandartForm.css';

import MainLogoLink from '../MainLogolink/MainLogoLink';

const StandartForm = ({ title, children, onSubmit }) => {
  return (
    <div className="standart-form__content">
      <MainLogoLink />
      <h2 className="standart-form__title">{title}</h2>

      <form className="standart-form__form" onSubmit={onSubmit} noValidate>
        {children}
      </form>
    </div>
  );
};

export default StandartForm;
