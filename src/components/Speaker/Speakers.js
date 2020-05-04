import React from 'react';
import './speaker.css';
import Speaker from './Speaker';

const list = [
	{
		name: 'est velit',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam in arcu cursus euismod quis. Erat nam at lectus urna duis convallis. Suscipit tellus mauris a diam maecenas.',
		img: require('../../Images/profile.jpg')
	},
	{
		name: 'mauris commodo',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam in arcu cursus euismod quis. Erat nam at lectus urna duis convallis. Suscipit tellus mauris a diam maecenas.',
		img: require('../../Images/prof.jpg')
	},
	{
		name: 'facilisis leo',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam in arcu cursus euismod quis. Erat nam at lectus urna duis convallis. Suscipit tellus mauris a diam maecenas.',
		img: require('../../Images/berlin.jpg')
	}
];

const speakers = (props) => {
	return (
		<section id="speakers">
			<div className="speakers-container">
				<div className="heading">
					<h3 className="title">Speakers</h3>
					<p className="separator" />
				</div>

				<div className="speakers-wrapper">
					{list.map((item, index) => {
						return (
							<Speaker title={item.name} img={item.img} key={index}>
								<small>{item.desc}</small>
							</Speaker>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default speakers;
