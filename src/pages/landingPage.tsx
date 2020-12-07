import React, { useState } from "react";
import { Loading } from "../components/loading";
import backgroundImg from "../media/landingPage/landingPage.jpg";
import "../styles/pages/landingPage.scss";

const LandingPage = () => {
	const [isLoading, setLoading] = useState(true);

	window.onload = () => {
		setLoading(!isLoading);
	};

	if (isLoading) {
		return <Loading></Loading>;
	} else {
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
	}
};

export default LandingPage;
