/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import StarWarsMoviesApp from "./components/StarWarsMoviesApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<StarWarsMoviesApp />
	</React.StrictMode>
);
