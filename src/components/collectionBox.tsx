import React, { FunctionComponent } from "react";
import { UserPlant, Plants } from "../database/plants";
import { capitalizeFirstLetter } from "../utils/upperCaseFirstLetter";
import "../styles/components/collectionsBox.scss";
import { DirectionFacing } from "../models/directionFacing";

export interface props {
	userPlant: UserPlant;
	onClick: (e: React.MouseEvent) => void;
}

export const CollectionBox: FunctionComponent<props> = (props) => {
	const plant = props.userPlant;
	const id = plant.id;
	const selectedPlant = Plants[id];
	const edit = () => {
		console.log("");
	};

	const getLightRequirments = () => {
		const plantLightRecs = Plants[id]?.lightRequirements;
		if (plantLightRecs === undefined) {
			return undefined;
		} else {
			return plantLightRecs.map((lightReq) => (
				<div className="tag is-success is-small is-rounded ">{lightReq}</div>
			));
		}
	};

	const getUnderGrowlight = () => {
		if (plant.growLight) {
			return (
				<div className="buttons has-addons">
					<button className="button is-small is-success is-selected">
						Yes
					</button>

					<button className="button is-small">No</button>
				</div>
			);
		} else {
			return (
				<div className="buttons has-addons">
					<button className="button is-small ">Yes</button>

					<button className="button  is-success is-selected is-small">
						No
					</button>
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
					<button className="button is-small is-success is-selected">
						Yes
					</button>

					<button className="button is-small">No</button>
				</div>
			);
		} else {
			return (
				<div className="buttons has-addons ">
					<button className="button is-small">Yes</button>

					<button className="button is-success is-selected is-small">No</button>
				</div>
			);
		}
	};
	return (
		<div className="container">
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
								alt={props.userPlant.name}
								src={Plants[id].img}
							></img>
						</div>
					</div>
					<div className="tile is-veritcal tags plantDataContainer">
						<div>
							<strong>Scientific Name: </strong>
							{capitalizeFirstLetter(selectedPlant.scientificName)}
						</div>
						<div>
							<strong>Ideal Temperature Range: </strong>
							{selectedPlant.minTemp} - {selectedPlant.maxTemp}
						</div>

						<div>
							<strong>Misting Requirement: </strong>
							{selectedPlant.misting}
						</div>
						<div className="">
							<strong>Light Requirements:</strong>

							{getLightRequirments()}
						</div>
						<div className="">
							<strong>Difficult to Grow:</strong>

							<div className="tag is-success is-small is-rounded ">
								{selectedPlant.difficultyLevel}
							</div>
						</div>
						<div className="">
							<strong>Humidity:</strong>

							<div className="tag is-success is-small is-rounded ">
								{selectedPlant.humidityLevel}
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
						<div className="tile is-child">
							<strong>Last watered on: </strong>

							{plant.lastWaterDate}
						</div>
						<div className="tile is-child"></div>
					</div>

					<div className="tile level">
						<div className=" tile level-right">
							<div
								className="button level-item  is-success is-outlined is-small "
								onClick={edit}
							>
								edit
							</div>
							<div
								className="button level-item  is-danger is-small"
								onClick={edit}
							>
								delete
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};