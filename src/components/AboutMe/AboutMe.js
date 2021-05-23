import React from 'react';
import './AboutMe.css';
import me from '../../images/me.jpg';

const AboutMe = () => {
	return (
		<section className="about-me" id="student-anchor">
			<h3 className="about-me__title">Студент</h3>
			<div className="about-me__container">
				<div className="about-me__me-wrapper">
					<h2 className="about-me__big-title">Алексей</h2>
					<p className="about-me__subtitle">Фронтенд-разработчик, 29 лет</p>
					<p className="about-me__description">
						Меня зовут Алексей Логвенкин, я начинающий front-end разработчик.Мне 29 лет,
						живу в городе Санкт-Петербург. Последние 10 лет работал в банках, в основном
						в сфере кредитования. До этого учился по специальности специалист
						банковского дела -финансы и кредит. Люблю логические задачки, шахматы а
						также настольные игры, мафию.
					</p>
					<div className="about-me__links-wrapper">
						<a
							className="about-me__link"
							target="_blank"
							href="https://vk.com/logvenkin"
							rel="noreferrer"
						>
							Vk
						</a>
						<a
							className="about-me__link"
							target="_blank"
							href="https://github.com/Alex76456"
							rel="noreferrer"
						>
							Github
						</a>
					</div>
				</div>
				<img className="about-me__image" src={me} alt="фото студента" />
			</div>
		</section>
	);
};

export default AboutMe;
