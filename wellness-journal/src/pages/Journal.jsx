// pages/Journal.jsx

import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActivityPopup from "../components/ActivityPopup";

const Journal = () => {
	const journal = useSelector((state) => state.journal);
	const [editingActivity, setEditingActivity] = useState(null);
	const [showPopup, setShowPopup] = useState(false);
	const togglePopup = () => {
		setShowPopup(!showPopup);
	};

	return (
		<main>
			<section className="header">
				<h2>
					WELLNESS <br />
					JOURNAL
				</h2>
				<h4>your personal journal</h4>
			</section>
			<section className="journal-grid">
				{journal.map((activity, index) => {
					return (
						<section className="journal-grid__item" key={index}>
							<div className="journal-grid__item__image-container">
								<img
									src={activity.iconURL}
									alt={`${activity} icon`}
									className="journal-grid__item__image-container__icon"
								/>
							</div>
							<section className="journal-grid__item__text">
								<h5>{activity.activity}</h5>
								<p>{activity.date}</p>
								<p>{activity.minutesSpent} minutes</p>
							</section>
							<div className="journal-grid__item__settings">
								<img
									src="src/assets/settings-white.png"
									className="journal-grid__item__settings__icon"
									onClick={() => {
										setEditingActivity(activity);
										setShowPopup(true);
									}}
								/>
							</div>
						</section>
					);
				})}
			</section>
			<Link to="/activities">
				<button className="main-btn">ACTIVITIES</button>
			</Link>
			{showPopup && (
				<ActivityPopup
					activity={editingActivity}
					onClose={togglePopup}
					editingActivity={editingActivity}
				/>
			)}
		</main>
	);
};

export default Journal;
