import React from 'react';
import './Promo.css';
import logo from '../../images/landing-logo.svg';

const Promo = () => {
	return (
		<section className="promo">
			<img className="promo__logo" src={logo} alt="logo promo" />
			<h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
		</section>
	);
};

export default Promo;
