import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
	return (
		<section className="about-project" id="about-project-anchor">
			<h3 className="about-project__title">О проекте</h3>
			<ul className="about-project__list">
				<li className="about-project__list-item">
					<h4 className="about-project__subtitle">Дипломный проект включал 5 этапов</h4>
					<p className="about-project__description">
						Составление плана, работу над бэкендом, вёрстку, добавление функциональности
						и финальные доработки.
					</p>
				</li>
				<li className="about-project__list-item">
					<h4 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h4>
					<p className="about-project__description">
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
						чтобы успешно защититься.
					</p>
				</li>
			</ul>
			<div className="about-project__graphic">
				<p className="about-project__graphic-week about-project__graphic-week-accent">
					1 неделя
				</p>
				<p className="about-project__graphic-description">Back-end</p>
				<p className="about-project__graphic-week">4 недели</p>
				<p className="about-project__graphic-description">Front-end</p>
			</div>
		</section>
	);
};

export default AboutProject;
