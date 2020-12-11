import React from "react";
import { useHistory } from "react-router-dom";
import backgroundImg from "../media/landingPage/landingPage.jpg";
import "../styles/pages/landingPage.scss";

const LandingPage = () => {
	return (
		<div>
			<div className="landingPageContainer">
				<a
					href="/search"
					className="CTA button is-large is-primary is-outlined"
				>
					<p>Time to Get Planting</p>
				</a>

				<img
					className="backgroundImg"
					alt="backgroundImg"
					src={backgroundImg}
				/>
			</div>
		</div>
	);
};

export default LandingPage;
