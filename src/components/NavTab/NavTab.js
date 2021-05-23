import React from 'react';
import './NavTab.css';

const NavTab = () => {
	return (
		<section className="nav-tab">
			<ul className="nav-tab__list">
				<li className="nav-tab__list-item">
					<a href="/#about-project-anchor" className="nav-tab__link">
						О проекте
					</a>
				</li>
				<li className="nav-tab__list-item">
					<a href="/#tech-anchor" className="nav-tab__link">
						Технологии
					</a>
				</li>
				<li className="nav-tab__list-item">
					<a href="/#student-anchor" className="nav-tab__link">
						Студент
					</a>
				</li>
			</ul>
		</section>
	);
};

export default NavTab;
