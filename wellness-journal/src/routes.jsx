// routes.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/App";
import Activities from "./pages/Activities";
import Journal from "./pages/Journal";

const RoutesConfig = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/activities" element={<Activities />} />
			<Route path="/journal" element={<Journal />} />
		</Routes>
	);
};

export default RoutesConfig;
