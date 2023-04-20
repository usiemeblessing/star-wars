/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
// import "../styles/styles.css";

const MoviesCollection = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://swapi.dev/api/films`)
			.then((response) => {
				setData(response.data.results);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setError(error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const reduceLength = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.slice(0, maxLength).trim() + "...";
		} else {
			return text;
		}
	};

	return (
		<div className="data-grid-container">
			{data.map((item) => (
				<div key={item.id} className="data-list">
					<h3 className="title">{item.title}</h3>
					<p className="date">
						{new Date(item.release_date).toLocaleDateString(
							"en-US",
							{
								month: "long",
								day: "numeric",
								year: "numeric",
							}
						)}
					</p>
					<p className="crawl">
						{reduceLength(item.opening_crawl, 260)}
					</p>
					<a href="#">More Info</a>
				</div>
			))}
		</div>
	);
};

export default MoviesCollection;
