import React from 'react';

const speaker = (props) => {
	return (
		<div className="speaker">
			<a className="speaker-link">
				<img className="speaker-image" src={props.img} alt={'Image of ' + props.title} />
			</a>
			<div className="speaker-details">
				<div className="speaker-tile">{props.title} </div>
				{props.children}
			</div>
		</div>
	);
};

export default speaker;
