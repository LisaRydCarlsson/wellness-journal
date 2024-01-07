// components/ActivityPopup.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addActivityToJournal } from "../redux/myFeatures";
import { Link } from "react-router-dom";
import "../styling/activityPopup.scss";

const ActivityPopup = ({ activity, onClose }) => {
	const dispatch = useDispatch();
	const [minutesSpent, setMinutesSpent] = useState(5);
	const weekdays = [
		"SUNDAY",
		"MONDAY",
		"TUESDAY",
		"WEDNESDAY",
		"THURSDAY",
		"FRIDAY",
		"SATURDAY",
	];
	const months = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];
	const today = new Date();
	let day = today.getDate().toString().padStart(2, "0");
	let weekday = weekdays[today.getDay()];
	let month = months[today.getMonth()];

	let dateString = `${weekday} ${day} ${month}`;

	const handleRegisterClick = () => {
		if (minutesSpent > 0) {
			dispatch(addActivityToJournal(activity, minutesSpent, dateString));
		}
	};

	return (
		<div className="activity-popup">
			<main>
				<section className="header">
					<h2>
						WELLNESS <br />
						JOURNAL
					</h2>
					<h4>register you activity time</h4>
				</section>
				<img src={activity.iconURL} alt={`${activity.activity} icon`} />
				<h3>{activity.activity}</h3>
				<h3 className="date">{dateString}</h3>
				<section className="btn-container">
					<label>
						minutes:
						<input
							type="number"
							min="5"
							step="5"
							defaultValue={minutesSpent}
							onKeyDown={(e) => {
								if (!/[0-9]/.test(e.key)) {
									e.preventDefault();
								}
							}}
							onChange={(e) => {
								const value = parseInt(e.target.value);
								if (value < 5) {
									setMinutesSpent(5);
								} else {
									setMinutesSpent(value);
								}
							}}
						/>
					</label>
					<button
						className="main-btn"
						onClick={handleRegisterClick}
						disabled={minutesSpent < 1}
					>
						REGISTER
					</button>
					<Link to="/journal">
						<button className="main-btn">YOUR JOURNAL</button>
					</Link>
				</section>
				<img
					className="close-btn"
					src="src/assets/cross-white.png"
					onClick={onClose}
				/>
			</main>
		</div>
	);
};

ActivityPopup.propTypes = {
	activity: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default ActivityPopup;
