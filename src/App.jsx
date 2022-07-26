import React from "react";
import AboutPage from "./components/AboutPage";
import BlogsPage from "./components/BlogsPage";
import LandingPage from "./components/LandingPage";

const App = () => {
	return (
		<div>
			<LandingPage />
			<AboutPage />
			<BlogsPage />
		</div>
	);
};

export default App;
