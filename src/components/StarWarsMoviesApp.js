/** @format */
import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/styles.css";
import Header from "./Header";
import MoviesCollection from "./MoviesCollection";

const StarWarsMoviesApp = () => {
	return (
		<div>
			<Header />
			<MoviesCollection />
		</div>
	);
};

export default StarWarsMoviesApp;
