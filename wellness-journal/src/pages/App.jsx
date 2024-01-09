// pages/App.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<main className="start">
				<header className="start__header">
					<h1>
						WELLNESS <br />
						JOURNAL
					</h1>
				</header>
				<img
					className="start__img"
					src="src/assets/gymnastics_start.png"
					alt="Gymnast Icon"
				/>
				<Link to="/activities">
					<button className="main-btn">GET STARTED</button>
				</Link>
			</main>
		</div>
	);
}

export default Home;
