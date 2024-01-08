//main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import RoutesConfig from "./routes";
import store from "./redux/myFeatures";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./styling/general.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<RoutesConfig />
		</BrowserRouter>
	</Provider>
);
