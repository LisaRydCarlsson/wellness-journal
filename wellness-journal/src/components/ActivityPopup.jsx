// components/ActivityPopup.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addActivityToJournal } from "../redux/myFeatures";
import "../styling/activityPopup.scss";

const ActivityPopup = ({ activity, onClose }) => {
	const dispatch = useDispatch();
	const [minutesSpent, setMinutesSpent] = useState(0);

	const handleRegisterClick = () => {
		dispatch(addActivityToJournal(activity, minutesSpent, dateString));
	};

	const today = new Date();
	const dateString = today.toISOString().split("T")[0];
	return (
		<div className="activity-popup">
			<main>
				<section className="header">
					<h2>WELLNESS JOURNAL</h2>
					<p>register you activity time</p>
				</section>
				<img src={activity.iconURL} alt={`${activity.activity} icon`} />
				<h2>{activity.activity}</h2>
				<p className="date">{dateString}</p>
				<label>
					minutes:
					<input
						type="number"
						min="0"
						step="5"
						onKeyDown={(e) => {
							if (!/[0-9]/.test(e.key)) {
								e.preventDefault();
							}
						}}
						onChange={(e) => {
							setMinutesSpent(e.target.value);
						}}
					/>
				</label>
				<button className="main-btn" onClick={handleRegisterClick}>
					REGISTER
				</button>
				<button className="main-btn">TO YOUR JOURNAL</button>
				<button onClick={onClose}>Close</button>
			</main>
		</div>
	);
};

ActivityPopup.propTypes = {
	activity: PropTypes.object.isRequired, // Adjust the prop type as per your data structure
	onClose: PropTypes.func.isRequired,
};

export default ActivityPopup;
