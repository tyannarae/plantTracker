import React, { FunctionComponent, useState } from "react";
import NavBar from "../components/navBar";
import PlantCard from "../components/plantCard";
import { Loading } from "../components/loading";
import CollectionInspector from "../components/collectionInspector";
import { UserPlant, Plant, Plants } from "../database/plants";
import "../";

export interface userCollectionsProps {
	usersPlant?: UserPlant[]; //the users chosen plants interface
	plant?: Plant[]; // global plant interface
}

const UserCollections: FunctionComponent<userCollectionsProps> = () => {
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
				{isModalOpen ? <CollectionInspector /> : undefined}
				<NavBar />
				<div className="resultsContainer">
					<div className="featuredPlantsHeader">Your Collection</div>
				</div>
				<div className="cardsContainer">
					{UserCollection.length > 0 ? (
						Plants.map((plant) =>
							UserCollection.map((userPlant: any) =>
								plant.id === userPlant["id"] ? <PlantCard {...plant} /> : null
							)
						)
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
