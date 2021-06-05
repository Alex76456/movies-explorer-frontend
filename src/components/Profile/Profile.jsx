import React, { useEffect, useContext } from 'react';
import { useFormWithValidation } from '../../utils/Validation/Validation';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ logOutHandler, changeUserInfo, successEdit, failedEdit }){
  const { values, setValues, handleChange, errors, isValid, setIsValid } = useFormWithValidation();

  const user = useContext(CurrentUserContext);

  useEffect(
    () => {
      setValues(user);
      setIsValid(true);
    },
    [ user, setValues, setIsValid ]
  );

  const submitHandler = (e) => {
    e.preventDefault();
    changeUserInfo(values);
  };

  return (
    <section className="profile">
      <h2 className="profile__title">
        Привет, {user.name}
        !
      </h2>
      <form className="profile__form" onSubmit={submitHandler} noValidate>
        <label className="profile__form-label" htmlFor="name">
          Имя
          <input
            className="profile__form-input"
            id="name"
            required
            minLength="2"
            maxLength="30"
            name="name"
            type="text"
            placeholder="Имя"
            value={values.name || ''}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="profile__form-error">{errors.name}</span>
        </label>

        <label className="profile__form-label" htmlFor="email">
          Почта
          <input
            className="profile__form-input"
            id="email"
            required
            name="email"
            type="email"
            placeholder="Почта"
            value={values.email || ''}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="profile__form-error">{errors.email}</span>
        </label>
        {successEdit && <p className="profile__form-sbmt-success">Данные успешно изменены!</p>}
        {failedEdit && <p className="profile__form-sbmt-failed">Ошибка при изменении данных</p>}

        <button
          type="submit"
          className={
            isValid && (values.name !== user.name || values.email !== user.email) ? (
              'profile__form-submit profile__form-submit_is-active'
            ) : (
              'profile__form-submit'
            )
          }
          disabled={(values.name === user.name && values.email === user.email) || !isValid}
        >
          Редактировать
        </button>
      </form>
      <button className="profile__logout-btn" onClick={logOutHandler}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
