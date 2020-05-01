import React from 'react';

import './Menu.css';

const Menu = (props) => {
	return (
		<div className={`menu-container ${props.showMenu}`}>
			<div className="overlay" />
			<div className="menu-items">
				<ul>
					<li>
						<a href="#welcome-section" onClick={props.toggleMenu}>
							HOME
						</a>
					</li>
					<li>
						<a href="#about" onClick={props.toggleMenu}>
							THEME
						</a>
					</li>
					<li>
						<a href="#schedule" onClick={props.toggleMenu}>
							SCHEDULE
						</a>
					</li>
					<li>
						<a href="#contact" onClick={props.toggleMenu}>
							CONTACT
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
