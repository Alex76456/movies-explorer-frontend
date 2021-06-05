import React from 'react';
import { Link } from 'react-router-dom';
import StandartForm from '../StandartForm/StandartForm';
import { useFormWithValidation } from '../../utils/Validation/Validation';

import './Register.css';

const Register = ({ signUpHandler, isSignUpError }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const submitHandler = (e) => {
    e.preventDefault();
    signUpHandler(values.name, values.email, values.password);
  };

  return (
    <section className="register">
      <StandartForm onSubmit={submitHandler} name="register" title="Добро пожаловать!">
        <label className="standart-form__form-field">
          <p className="standart-form__input-label">Имя</p>
          <input
            className={
              errors && errors['name'] !== '' ? (
                'standart-form__input standart-form__input_error'
              ) : (
                'standart-form__input'
              )
            }
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
            onChange={handleChange}
          />
          <span className="standart-form__input-error">
            {errors && errors['name'] !== '' && errors['name']}
          </span>
        </label>
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
        {isSignUpError && <span className="standart-form__error">Ошибка при регистрации</span>}
        <button
          className={isValid ? 'standart-form__submit' : 'standart-form__submit-no-valid'}
          type="submit"
          disabled={isValid ? false : true}
        >
          Зарегистрироваться
        </button>
        <p className="standart-form__submit-description">
          Уже зарегистрированы?{' '}
          <Link to="/signin" className="standart-form__link">
            Войти
          </Link>
        </p>
      </StandartForm>
    </section>
  );
};

export default Register;
