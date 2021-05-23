import React from 'react';
import { useFormWithValidation } from '../../utils/Validation/Validation';
import './Profile.css';

const currentUser = {
  name: 'Алексей',
  email: 'a@mail'
};

function Profile({}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  return (
    <section className="profile">
      <h2 className="profile__title">
        Привет, {currentUser.name}
        !
      </h2>
      <form className="profile__form" /* onSubmit={}*/ noValidate>
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
        {/*successEdit &&  <p className="profile__form-sbmt-success">
            Данные успешно изменены!
          </p>*/}
        {/*failedEdit && <p className="profile__form-sbmt-failed">Ошибка при изменении данных</p>*/}

        <button
          type="submit"
          className={
            isValid && (values.name !== currentUser.name || values.email !== currentUser.email) ? (
              'profile__form-submit profile__form-submit_is-active'
            ) : (
              'profile__form-submit'
            )
          }
          disabled={
            (values.name === currentUser.name && values.email === currentUser.email) || !isValid
          }
        >
          Редактировать
        </button>
      </form>
      <button type="button" className="profile__logout-btn">
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
