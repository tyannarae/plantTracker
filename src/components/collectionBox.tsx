import React, { FunctionComponent } from "react";
import { toast } from "react-toastify";
import { UserCollectionContext } from "../context/pages/userCollections";
import {
	UserPlant,
	Plants,
	collectionName,
	getDbFromSession,
} from "../database/plants";
import { capitalizeFirstLetter } from "../utils/upperCaseFirstLetter";
import "../styles/components/collectionsBox.scss";

export interface UserPlantProps {
	userPlant: UserPlant;
	userPlantindex: number;
}

export const CollectionBox: FunctionComponent<UserPlantProps> = (
	UserPlantProps
) => {
	const {
		index,
		setModalOpen,
		setSelectedPlant,
		setDeletedPlant,
		selectedPlant,
		setIndex,
	} = UserCollectionContext();
	const plant = UserPlantProps.userPlant;
	const id = plant.id;
	const userSelectedPlant = Plants[plant.id];

	const openEditModal = () => {
		setIndex(selectedPlant?.id);
		setIndex(UserPlantProps.userPlantindex);
		setSelectedPlant(plant);
		setModalOpen(true);
	};

	function deletePlant() {
		//call and set our plant index

		setIndex(selectedPlant?.id);

		//access session storage
		let db = getDbFromSession();

		//delete the item
		db.splice(index as number, 1);

		//save session storage again
		window.sessionStorage.setItem(collectionName, JSON.stringify(db));
		//set the deleted plant to cause a rerender of application
		setDeletedPlant(plant);
		toast.success("Plant has been deleted!", {
			position: "top-center",
		});
	}

	const getLightRequirments = () => {
		const plantLightRecs = Plants[id]?.lightRequirements;
		if (plantLightRecs === undefined) {
			return undefined;
		} else {
			return plantLightRecs.map((lightReq) => (
				<div key={lightReq} className="tag is-success is-small is-rounded ">
					{lightReq}
				</div>
			));
		}
	};

	const getUnderGrowlight = () => {
		if (plant.growLight) {
			return (
				<div className="buttons has-addons ">
					<div className="button is-small is-success is-selected noHover">
						Yes
					</div>

					<div className="button is-small noHover ">No</div>
				</div>
			);
		} else {
			return (
				<div className="buttons has-addons ">
					<div className="button is-small noHover">Yes</div>

					<div className="button  is-success is-selected is-small noHover">
						No
					</div>
				</div>
			);
		}
	};

	const getDirectionFacing = () => {
		const direction = plant.directionFacing;
		if (direction === undefined) {
			return <div className="tag is-danger is-rounded"> unknown </div>;
		} else {
			return <div className="tag is-success is-rounded"> {direction}</div>;
		}
	};

	const getInWindowSeal = () => {
		if (plant.inWindowSeal) {
			return (
				<div className="buttons has-addons">
					<button className="button is-small is-success is-selected noHover">
						Yes
					</button>

					<button className="button is-small noHover">No</button>
				</div>
			);
		} else {
			return (
				<div className="buttons has-addons ">
					<button className="button is-small noHover">Yes</button>

					<button className="button is-success is-selected is-small noHover">
						No
					</button>
				</div>
			);
		}
	};
	return (
		<div data-testid="CollectionBox" className="container">
			<div className="box content">
				<div className="level">
					<div className=" tile is-vertical level-left">
						<div className=" tile level-item firstTile">
							<div className="tile content ">
								<strong>
									{capitalizeFirstLetter(Plants[id].commonName[0])}
								</strong>
							</div>
							<img
								className="tile image "
								alt={"../src/media/plant-placeholder.png"}
								src={Plants[id].img}
							></img>
						</div>
					</div>
					<div className="tile is-veritcal tags plantDataContainer">
						<div data-testid="scienceName">
							<strong>Scientific Name: </strong>
							{capitalizeFirstLetter(userSelectedPlant.scientificName)}
						</div>
						<div>
							<strong>Ideal Temperature Range: </strong>
							{userSelectedPlant.minTemp} - {userSelectedPlant.maxTemp}
						</div>

						<div>
							<strong>Misting Requirement: </strong>
							{userSelectedPlant.misting}
						</div>
						<div className="">
							<strong>Light Requirements:</strong>

							{getLightRequirments()}
						</div>
						<div className="">
							<strong>Difficult to Grow:</strong>

							<div className="tag is-success is-small is-rounded ">
								{userSelectedPlant.difficultyLevel}
							</div>
						</div>
						<div className="">
							<strong>Humidity:</strong>

							<div className="tag is-success is-small is-rounded ">
								{userSelectedPlant.humidityLevel}
							</div>
						</div>
					</div>
					<div className="tile  is-vertical">
						<div className="tile is-child">
							<strong>Nickname: </strong>
							{capitalizeFirstLetter(plant.name)}
						</div>
						<div className="tile is-child">
							<strong>Under growlight: </strong>

							{getUnderGrowlight()}
						</div>
						<div className="tile is-child">
							<strong>Direction facing: </strong>

							{getDirectionFacing()}
						</div>
						<div className="tile is-child">
							<strong>In a window seal: </strong>

							{getInWindowSeal()}
						</div>
						<div data-testid="lastWaterDate" className="tile is-child">
							<strong>Last watered on: </strong>
							{new Date(
								plant.lastWaterDate?.valueOf() as number
							).toLocaleDateString()}
						</div>
						<div className="tile is-child"></div>
					</div>

					<div className="tile level">
						<div className=" tile level-right">
							<button
								data-testid="edit"
								className="button level-item  is-success is-outlined is-small "
								onClick={openEditModal}
							>
								edit
							</button>
							<button
								data-testid="deletePlant"
								className="button level-item  is-danger is-small"
								onClick={deletePlant}
							>
								delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
