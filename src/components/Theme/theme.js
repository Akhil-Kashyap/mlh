import React from 'react';
import './theme.css';

const theme = (props) => {
	return (
		<div>
			<section id="about">
				<div className="wrapper">
					<article>
						<div className="title">
							<h3>Theme</h3>
							<p className="separator" />
						</div>
						<div className="desc full">
							<h4 className="subtitle">Lorem Ipsum Heading</h4>

							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Erat nam at lectus urna duis convallis convallis tellus id. Ac ut consequat semper viverra nam
								libero justo laoreet. Leo a diam sollicitudin tempor id eu nisl nunc. Arcu non odio euismod lacinia at. In
								mollis nunc sed id semper risus in hendrerit gravida. Diam volutpat commodo sed egestas egestas. Sit amet
								facilisis magna etiam tempor orci eu lobortis elementum.
							</p>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
};

export default theme;
