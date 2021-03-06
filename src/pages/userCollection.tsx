import React, { FunctionComponent, useState } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "../components/navBar";
import { Loading } from "../components/loading";
import CollectionInspector from "../components/collectionInspector";
import { CollectionBox } from "../components/collectionBox";
import { UserPlant, Plant, getDbFromSession } from "../database/plants";
import { CollectionPageContext } from "../context/pages/userCollections";

export interface userCollectionsProps {
	usersPlant?: UserPlant[]; //the users chosen plants interface
	plant?: Plant[]; // global plant interface
}

export const UserCollections: FunctionComponent<userCollectionsProps> = () => {
	const [index, setIndex] = useState<number | undefined>(undefined);

	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedPlant, setSelectedPlant] = useState<UserPlant | undefined>(
		undefined
	);
	const [deletedPlant, setDeletedPlant] = useState<UserPlant | undefined>(
		undefined
	);
	const UserCollection = getDbFromSession();

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
			<div data-testid="userCollectionsOutterContainer">
				<ToastContainer />
				{isModalOpen ? <CollectionInspector /> : undefined}
				<NavBar search={false} />
				<div className="resultsContainer">
					<div className="featuredPlantsHeader">Your Collection</div>
				</div>
				<div data-testid="userCollectionItemsTernary">
					{UserCollection.length > 0 ? (
						UserCollection.map((userPlant: UserPlant, index: number) => (
							<CollectionBox
								key={index}
								userPlant={userPlant}
								userPlantindex={index as number}
							/>
						))
					) : (
						<div
							data-testid="noPlantsAvailable"
							className="noCollectionAvaiable"
						>
							Looks like you have not added any plants to your collection yet.
						</div>
					)}
				</div>
			</div>
		</CollectionPageContext.Provider>
	);
};

export default UserCollections;
