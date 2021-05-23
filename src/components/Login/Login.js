import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import StandartForm from '../StandartForm/StandartForm';
import { useFormWithValidation } from '../../utils/Validation/Validation';

import './Login.css';

const Login = ({ onLogin }) => {
  const history = useHistory();
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log('Успешный вход!', values);
      onLogin();
      history.push('/movies');
    }
  };

  return (
    <section className="login">
      <StandartForm onSubmit={onSubmit} name="login" title="Рады видеть!">
        <label className="standart-form__form-field">
          <p className="standart-form__input-label">E-mail</p>
          <input
            className={
              errors['email'] !== '' ? (
                'standart-form__input standart-form__input_error'
              ) : (
                'standart-form__input'
              )
            }
            type="email"
            name="email"
            required
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span className="standart-form__input-error">
            {errors && errors['email'] !== '' && errors['email']}
          </span>
        </label>

        <label className="standart-form__form-field">
          <p className="standart-form__input-label">Пароль</p>
          <input
            className={
              errors['password'] !== '' ? (
                'standart-form__input standart-form__input_error'
              ) : (
                'standart-form__input'
              )
            }
            type="password"
            name="password"
            required
            minLength="2"
            maxLength="10"
            onChange={handleChange}
          />
          <span className="standart-form__input-error">
            {errors && errors['password'] !== '' && errors['password']}
          </span>
        </label>
        <button className="standart-form__submit" type="submit" disabled={isValid ? false : true}>
          Войти
        </button>
        <p className="standart-form__submit-description">
          Ещё не зарегистрированы?
          <Link to="/signup" className="standart-form__link">
            Регистрация
          </Link>
        </p>
      </StandartForm>
    </section>
  );
};

export default Login;
