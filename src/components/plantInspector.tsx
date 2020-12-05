import React, { FunctionComponent } from "react";
import { useSearchContext } from "../context/pages/searchPage";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import { DirectionFacing } from "../models/directionFacing";
import "../styles/components/plantInspector.scss";

const PlantInspector: FunctionComponent = () => {
	const { selectedPlant } = useSearchContext();
	const { setModalOpen } = useSearchContext();
	const directionOptions: Array<string> = [];
	Object.keys(DirectionFacing).map((direction) =>
		directionOptions.push(direction)
	);
	const onClickClose = () => {
		setModalOpen(false);
	};
	const plantName = selectedPlant?.commonName[0];

	const getLightRequirements = () => {
		if (selectedPlant?.lightRequirements === undefined) {
			return undefined;
		} else {
			return (
				<div>
					Light Requirements:
					{selectedPlant?.lightRequirements.map((lightReq) => (
						<div>{lightReq}</div>
					))}
				</div>
			);
		}
	};

	const addToCollection = () => {
		console.log("");
	};
	return (
		<div className={"searchPageModalContainer"}>
			<button className={"exitButton"} onClick={onClickClose}>
				X
			</button>
			<div className="itemNameAndImgContainer">
				<img
					className="searchPageModalImg"
					src={selectedPlant?.img}
					alt=""
				></img>
				<div>{plantName}</div>
			</div>
			<div className="itemAddToCollectionContainer">
				Add {plantName} to your collection:
				<div>
					<input type="checkbox" />
					Located in a Window Seal?
				</div>
				<div>
					<input type="checkbox" />
					Located under a Grow Light?
				</div>
				<div className="dateAndDropdownContainer">
					<div>
						<DatePicker
							placeholderText={"Date Last Watered"}
							onChange={(date) => console.log(date)}
						></DatePicker>
					</div>
					<div className="dropdownContainer">
						<Dropdown
							className="directionFacingDropdown"
							options={directionOptions}
							placeholder="Pick Direction"
						></Dropdown>
					</div>
				</div>
				<button className="addButton" onClick={addToCollection}>
					{" "}
					Add
				</button>
			</div>
			<div className="itemPlantDetailsContainer">
				<div> Scientific Name: {selectedPlant?.scientificName}</div>
				<div> Difficulty: {selectedPlant?.difficultyLevel}</div>
				<div> Humidity Level: {selectedPlant?.humidityLevel}</div>
				{getLightRequirements()}
				<div>Min Temp: {selectedPlant?.minTemp}</div>
				<div>Max Temp: {selectedPlant?.maxTemp}</div>
				<div>Misting Requirement: {selectedPlant?.misting}</div>
			</div>
		</div>
	);
};
export default PlantInspector;
