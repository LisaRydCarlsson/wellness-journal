// components/ActivityPopup.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addActivityToJournal } from "../redux/myFeatures";
import { Link } from "react-router-dom";
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
	activity: PropTypes.object.isRequired, // Adjust the prop type as per your data structure
	onClose: PropTypes.func.isRequired,
};

export default ActivityPopup;
