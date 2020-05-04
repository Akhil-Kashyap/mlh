import React from 'react';
import './schedule.css';

const schedule = () => {
	return (
		<div id="schedule">
			<div className="timeline">
				<div className="title">
					<h3>Schedule</h3>
					<p className="separator" />
				</div>
				<div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
					<div className="timeline__event__icon ">
						<i className="fas fa-code" />
					</div>
					<div className="timeline__event__date">20-08-2019</div>
					<div className="timeline__event__content ">
						<div className="timeline__event__title">Start Date</div>
						<div className="timeline__event__description">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
								accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!
							</p>
						</div>
					</div>
				</div>
				<div className="timeline__event  animated fadeInUp delay-3s timeline__event--type2">
					<div className="timeline__event__icon ">
						<i className="fas fa-laptop-code" />
					</div>
					<div className="timeline__event__date">20-08-2019</div>
					<div className="timeline__event__content ">
						<div className="timeline__event__title">Hackathon Starts</div>
						<div className="timeline__event__description">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
								accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!
							</p>
						</div>
					</div>
				</div>
				<div className="timeline__event animated fadeInUp delay-2s timeline__event--type3">
					<div className="timeline__event__icon">
						<i className="lni-burger" />
					</div>
					<div className="timeline__event__date">20-08-2019</div>
					<div className="timeline__event__content">
						<div className="timeline__event__title">Lunch</div>
						<div className="timeline__event__description">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
								accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!
							</p>
						</div>
					</div>
				</div>
				<div className="timeline__event animated fadeInUp delay-1s timeline__event--type1">
					<div className="timeline__event__icon">
						<i className="fas fa-file-powerpoint" />
					</div>
					<div className="timeline__event__date">20-08-2019</div>
					<div className="timeline__event__content">
						<div className="timeline__event__title">Presentation</div>
						<div className="timeline__event__description">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
								accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!
							</p>
						</div>
					</div>
				</div>
				<div className="timeline__event animated fadeInUp timeline__event--type2">
					<div className="timeline__event__icon">
						<i className="lni-cake" />
					</div>
					<div className="timeline__event__date">20-08-2019</div>
					<div className="timeline__event__content">
						<div className="timeline__event__title">Birthday</div>
						<div className="timeline__event__description">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
								accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default schedule;
