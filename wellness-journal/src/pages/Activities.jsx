// pages/Activities.jsx

import React, { useState, useEffect } from "react";
import ActivityPopup from "../components/ActivityPopup";
import { Link } from "react-router-dom";

const Activities = () => {
	const [activities, setActivities] = useState([]);
	const [selectedActivity, setSelectedActivity] = useState(null);

	useEffect(() => {
		fetch("/activities.json")
			.then((response) => response.json())
			.then((data) => setActivities(data))
			.catch((error) => console.error("Error fetching activities:", error));
	}, []);

	const handleActivityClick = (activity) => {
		setSelectedActivity(activity);
	};

	const closePopup = () => {
		setSelectedActivity(null);
	};

	return (
		<main>
			<section className="header">
				<h2>
					WELLNESS <br />
					JOURNAL
				</h2>
				<h4>click activity button to register</h4>
			</section>
			<section className="activities">
				<ul className="activities__grid">
					{activities.map((activity) => (
						<li
							key={activity.id}
							className="activities__grid-item"
							onClick={() => handleActivityClick(activity)}
						>
							<img
								src={activity.iconURL}
								alt={`${activity.activity} icon`}
								className="activities__grid-item__icon"
							/>
							{activity.activity}
						</li>
					))}
				</ul>
			</section>
			<Link to="/journal">
				<button className="main-btn">YOUR JOURNAL</button>
			</Link>

			{selectedActivity && (
				<ActivityPopup activity={selectedActivity} onClose={closePopup} />
			)}
		</main>
	);
};

export default Activities;
