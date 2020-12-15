import React, { FunctionComponent, useState } from "react";
import NavBar from "../components/navBar";
import { Loading } from "../components/loading";
import CollectionInspector from "../components/collectionInspector";
import { CollectionBox } from "../components/collectionBox";
import { UserPlant, Plant } from "../database/plants";
import { CollectionPageContext } from "../context/pages/userCollections";

export interface userCollectionsProps {
	usersPlant?: UserPlant[]; //the users chosen plants interface
	plant?: Plant[]; // global plant interface
}

const UserCollections: FunctionComponent<userCollectionsProps> = () => {
	const [isLoading, setLoading] = useState(true);
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedPlant, setSelectedPlant] = useState<UserPlant | undefined>(
		undefined
	);
	const UserCollection = JSON.parse(sessionStorage.collection);

	window.onload = () => {
		setLoading(!isLoading);
	};
	const edit = () => {
		console.log("lets edit");
	};

	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<CollectionPageContext.Provider
				value={{
					isModalOpen,
					setModalOpen,
					selectedPlant,
					setSelectedPlant,
				}}
			>
				<div>
					{isModalOpen ? <CollectionInspector /> : undefined}
					<NavBar />
					<div className="resultsContainer">
						<div className="featuredPlantsHeader">Your Collection</div>
					</div>
					<div className="">
						{UserCollection.length > 0 ? (
							UserCollection.map((userPlant: UserPlant) => (
								<CollectionBox onClick={() => edit()} userPlant={userPlant} />
							))
						) : (
							<div className="noCollectionAvaiable">
								Looks like you have not added any plants to your collection yet.
							</div>
						)}
					</div>
				</div>
			</CollectionPageContext.Provider>
		);
	}
};

export default UserCollections;
