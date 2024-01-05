// pages/Activities.jsx

// import React, { useState, useEffect } from "react";
// import "../styling/index.scss";
// import "../styling/activities.scss";

// const Activities = () => {
// 	const [activities, setActivities] = useState([]);

// 	useEffect(() => {
// 		fetch("/activities.json")
// 			.then((response) => response.json())
// 			.then((data) => setActivities(data))
// 			.catch((error) => console.error("Error fetching activities:", error));
// 	}, []);

// 	return (
// 		<main>
// 			<section className="header">
// 				<h2>WELLNESS JOURNAL</h2>
// 				<p>click activity button to register</p>
// 			</section>
// 			<section className="activities">
// 				<ul className="activities__grid">
// 					{activities.map((activity) => (
// 						<li key={activity.id} className="activities__grid-item">
// 							<img
// 								src={activity.iconURL}
// 								alt={`${activity.activity} icon`}
// 								className="activities__grid-item__icon"
// 							/>
// 							{activity.activity}
// 						</li>
// 					))}
// 				</ul>
// 			</section>
// 			<button className="main-btn">TO YOUR JOURNAL</button>
// 		</main>
// 	);
// };

// export default Activities;

// pages/Activities.jsx

import React, { useState, useEffect } from "react";
import ActivityPopup from "../components/ActivityPopup";
import "../styling/index.scss";
import "../styling/activities.scss";

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
		console.log(activity);
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
				<p>click activity button to register</p>
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
			<button className="main-btn">TO YOUR JOURNAL</button>

			{selectedActivity && (
				<ActivityPopup activity={selectedActivity} onClose={closePopup} />
			)}
		</main>
	);
};

export default Activities;
