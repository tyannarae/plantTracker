import React, { FunctionComponent, useState } from "react";
import NavBar from "../components/navBar";
import { Loading } from "../components/loading";
import CollectionInspector from "../components/collectionInspector";
import { CollectionBox } from "../components/collectionBox";
import { UserPlant, Plant } from "../database/plants";

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
						UserCollection.map((userPlant: UserPlant) => <CollectionBox />)
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
