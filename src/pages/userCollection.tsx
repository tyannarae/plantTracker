import React, { FunctionComponent, useState } from "react";
import { ToastContainer } from "react-toastify";
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
	const [index, setIndex] = useState<number | undefined>(undefined);
	const [isLoading, setLoading] = useState(true);
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedPlant, setSelectedPlant] = useState<UserPlant | undefined>(
		undefined
	);
	const [deletedPlant, setDeletedPlant] = useState<UserPlant | undefined>(
		undefined
	);
	const UserCollection = JSON.parse(sessionStorage.collection);

	window.onload = () => {
		setLoading(!isLoading);
	};

	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<CollectionPageContext.Provider
				value={{
					index,
					setIndex,
					deletedPlant,
					setDeletedPlant,
					isModalOpen,
					setModalOpen,
					selectedPlant,
					setSelectedPlant,
				}}
			>
				<div>
					<ToastContainer />
					{isModalOpen ? <CollectionInspector /> : undefined}
					<NavBar />
					<div className="resultsContainer">
						<div className="featuredPlantsHeader">Your Collection</div>
					</div>
					<div className="">
						{UserCollection.length > 0 ? (
							UserCollection.map((userPlant: UserPlant, index: number) => (
								<CollectionBox userPlant={userPlant} index={index} />
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
