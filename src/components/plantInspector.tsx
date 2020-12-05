import React, { FunctionComponent, useState } from "react";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import { useSearchContext } from "../context/pages/searchPage";
import { DirectionFacing } from "../models/directionFacing";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import "../styles/components/plantInspector.scss";

const PlantInspector: FunctionComponent = () => {
	const [underGrowLight, setGrowLight] = useState<boolean>(false);
	const [isInWindow, setInWindow] = useState<boolean>(false);
	const [directionFacing, setDirectionFacing] = useState<string | undefined>(
		undefined
	);
	const [dateWateredLast, setWaterDate] = useState<Date | null>(new Date());
	const { selectedPlant } = useSearchContext();
	const { isModalOpen, setModalOpen } = useSearchContext();
	const closeModal = () => {
		setModalOpen(!isModalOpen);
	};

	const directionOptions: Array<string> = [];
	Object.keys(DirectionFacing).map((direction) =>
		directionOptions.push(direction)
	);
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
			<button className={"exitButton"} onClick={closeModal}>
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
					<input type="checkbox" onClick={setGrowLight} />
					Located under a Grow Light?
				</div>
				<div className="dateAndDropdownContainer">
					<div>
						<DatePicker
							placeholderText={"Date Last Watered"}
							selected={dateWateredLast}
							onChange={(date) => setWaterDate(date)}
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
