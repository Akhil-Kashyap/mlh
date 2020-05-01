import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Theme from './components/Theme/theme';
import Schedule from './components/Schedule/schedule';
import './App.css';

class App extends Component {
	state = {
		menuState: false
	};

	toggleMenu = () => {
		this.setState((state) => ({
			menuState: !state.menuState ? 'active' : state.menuState === 'deactive' ? 'active' : 'deactive'
		}));
	};

	render() {
		return (
			<React.Fragment>
				<Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
				<Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
				<Header />

				<Theme />
				<Schedule />
			</React.Fragment>
		);
	}

	// Parallax effect. Pretty heavy for slow devices.
	componentDidMount() {
		const navbar = document.querySelector('#navbar');
		const header = document.querySelector('#welcome-section');
		const city = document.querySelector('.city');
		const silhouette = document.querySelector('.silhouette');
		let cityInitPos = -300;

		window.onscroll = () => {
			let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollPos <= window.innerHeight) {
				silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
				city.style.bottom = `${parseInt(cityInitPos + scrollPos / 6)}px`;
			}

			if (scrollPos - 100 <= window.innerHeight) header.style.visibility = header.style.visibility === 'hidden' && 'visible';
			else header.style.visibility = 'hidden';

			if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
			else navbar.classList.remove('bg-active');
		};

		(function navSmoothScrolling() {
			const internalLinks = document.querySelectorAll('a[href^="#"]');
			for (let i in internalLinks) {
				if (internalLinks.hasOwnProperty(i)) {
					internalLinks[i].addEventListener('click', (e) => {
						e.preventDefault();
						document.querySelector(internalLinks[i].hash).scrollIntoView({
							block: 'start',
							behavior: 'smooth'
						});
					});
				}
			}
		})();
	}
}

export default App;
