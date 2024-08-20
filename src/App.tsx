import React from "react";

import "./App.css";
import ParallaxPage from "./ParallaxPage";

const App: React.FC = () => {
	return (
		// <ParallaxProvider>
		// 	<AdvancedBannerTop />
		// 	<div className="links-section">
		// 		<h1 className="headline gray">Links</h1>
		// 		<ul className="links-list">
		// 			<li>
		// 				<a href="#link1">Link 1</a>
		// 			</li>
		// 			<li>
		// 				<a href="#link2">Link 2</a>
		// 			</li>
		// 			<li>
		// 				<a href="#link3">Link 3</a>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </ParallaxProvider>
		<>
			<ParallaxPage />
		</>
	);
};

export default App;
