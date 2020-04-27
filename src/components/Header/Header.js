import React from 'react';
import './Header.css';

const Header = (props) => {
	return (
		<header id="welcome-section">
			<div className="city" />
			<div className="silhouette" />
			<div className="virus" />
			<div className="container">
				<h1>
					<span className="line">Together,</span>
					<span className="line">We can</span>
					<span className="line">
						<span className="color">Rise Again!</span>
					</span>
				</h1>
				<div className="buttons">
					{/* <a href="#projects">Register</a> */}
					<a href="#contact" className="cta">
						Register Now
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
