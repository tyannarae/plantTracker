import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../media/landingPage/landingPage.jpg";
import "../styles/pages/landingPage.scss";

export const LandingPage = () => {
	return (
		<div>
			<div className="landingPageContainer">
				<Link
					to="/plantTracker/search"
					className="CTA button is-large is-primary is-outlined"
				>
					<p>Time to Get Planting</p>
				</Link>

				<img
					data-testid="backgroundImg"
					className="backgroundImg"
					alt="backgroundImg"
					src={backgroundImg}
				/>
			</div>
		</div>
	);
};

export default LandingPage;
