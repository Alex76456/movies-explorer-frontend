import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

const Portfolio = () => {
	return (
		<section className="portfolio">
			<h3 className="portfolio__title">Портфолио</h3>
			<ul className="portfolio__list">
				<li className="portfolio__list-item">
					<a
						href="https://alex76456.github.io/kuda-mockup/"
						target="_blank"
						className="portfolio__link"
					>
						<p className="portfolio__project">Статичный сайт</p>
						<img className="portfolio__arrow" src={arrow} alt="стрелочка" />
					</a>
				</li>
				<li className="portfolio__list-item">
					<a
						href="https://alex76456.github.io/russian-travel/"
						target="_blank"
						className="portfolio__link"
					>
						<p className="portfolio__project">Адаптивный сайт</p>
						<img className="portfolio__arrow" src={arrow} alt="стрелочка" />
					</a>
				</li>
				<li className="portfolio__list-item">
					<a
						href="https://alex76456.github.io/search-books-ts/"
						target="_blank"
						className="portfolio__link"
					>
						<p className="portfolio__project">Одностраничное приложение</p>
						<img className="portfolio__arrow" src={arrow} alt="стрелочка" />
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Portfolio;
