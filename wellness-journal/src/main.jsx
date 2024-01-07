//main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styling/general.scss";
import RoutesConfig from "./routes";
import { Provider } from "react-redux";
import store from "./redux/myFeatures";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<RoutesConfig />
		</BrowserRouter>
	</Provider>
);
