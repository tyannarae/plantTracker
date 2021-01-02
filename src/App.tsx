import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SearchPage from "./pages/searchPage";
import reportWebVitals from "./reportWebVitals";
import UserCollections from "./pages/userCollection";
import "./styles/global/app.scss";
function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"
						rel="stylesheet"
					></link>
				</header>
			</div>
			<Route path="/plantTracker/search" component={SearchPage}></Route>
			<Route exact path="/plantTracker" component={LandingPage}></Route>
			<Route
				exact
				path="/plantTracker/collections"
				component={UserCollections}
			></Route>
		</Router>
	);
}

reportWebVitals();
export default App;
