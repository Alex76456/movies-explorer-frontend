import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<section className="footer">
			<p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
			<div className="footer__wrapper">
				<p className="footer__copyright">© {new Date().getFullYear()}</p>
				<ul className="footer__links-list">
					<li className="footer__links-list-item">
						<a
							className="footer__link"
							target="_blank"
							href="https://praktikum.yandex.ru"
							rel="noreferrer"
						>
							Яндекс.Практикум
						</a>
					</li>
					<li className="footer__links-list-item">
						<a
							className="footer__link"
							target="_blank"
							href="https://github.com/Alex76456"
							rel="noreferrer"
						>
							Github
						</a>
					</li>
					<li className="footer__links-list-item">
						<a
							className="footer__link"
							target="_blank"
							href="https://vk.com/logvenkin"
							rel="noreferrer"
						>
							Vk
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Footer;
