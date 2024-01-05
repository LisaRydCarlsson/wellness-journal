// App.jsx

import { useState } from "react";
import "../styling/App.scss";
import "../styling/index.scss";
import { Link } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	const handleLinkClick = () => {
		console.log("Link clicked!");
	};

	handleLinkClick();

	return (
		<div className="App">
			<main>
				<header>
					<h1>
						WELLNESS <br />
						JOURNAL
					</h1>
				</header>
				<img
					className="start-img"
					src="src/assets/gymnastics_start.png"
					alt="Gymnast Icon"
				/>
				<section className="btn-container">
					<Link to="/activities">
						<button className="main-btn">GET STARTED</button>
					</Link>
					{/* <button className="main-btn">REGISTER</button> */}
				</section>
				{/* <p>
					<Link to="/activities">skip for now</Link>
				</p> */}
			</main>
		</div>
	);
}

export default App;
