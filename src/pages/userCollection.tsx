import React, { useState } from "react";
import NavBar from "../components/navBar";
import PlantCard from "../components/plantCard";
import { Loading } from "../components/loading";
import PlantInspector from "../components/plantInspector";
import { UserPlant, Plants } from "../database/plants";

const UserCollections = () => {
	const [isLoading, setLoading] = useState(true);
	const [isModalOpen] = useState(false);
	const UserCollection = JSON.parse(sessionStorage.collection);
	window.onload = () => {
		setLoading(!isLoading);
	};

	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<div>
				{isModalOpen ? <PlantInspector /> : undefined}
				<NavBar />
				<div className="resultsContainer">
					<div className="featuredPlantsHeader">Your Collection</div>
				</div>
				<div className="cardsContainer">
					{UserCollection.length > 0 ? (
						UserCollection.map((userPlant: UserPlant) => (
							<PlantCard {...Plants[userPlant.id]} />
						))
					) : (
						<div className="noCollectionAvaiable">
							Looks like you have not added any plants to your collection yet.
						</div>
					)}
				</div>
			</div>
		);
	}
};

export default UserCollections;
