// Journal.jsx

import { useSelector } from "react-redux";

import React from "react";

const Activities = () => {
	const journal = useSelector((state) => state.myFeatures.journal);
	return (
		<div>
			<h1>MY JOURNAL</h1>
			{journal.map((activity, index) => (
				<div key={index}>
					<h3>{activity.activity}</h3>
					<p>{activity.minutesSpent} minutes</p>
					<p>{activity.date}</p>
				</div>
			))}
		</div>
	);
};

export default Activities;
