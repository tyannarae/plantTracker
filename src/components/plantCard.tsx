import React, { FunctionComponent } from "react";
import { useSearchContext } from "../context/pages/searchPage";
import { LightRequirements } from "../models/lightRequirements";
import { HumidityLevel } from "../models/humidityLevel";
import { Misting } from "../models/misting";
import { DifficultyLevel } from "../models/difficultyLevel";
import { capitalizeFirstLetter } from "../utils/upperCaseFirstLetter";
import { Plant } from "../database/plants";
import { PlantImg } from "../components/plantImg";
import "../styles/components/plantCard.scss";
/**
 * This component will take in a single plant object and display it's results to the user.
 */

export const PlantCard: FunctionComponent<Plant> = (plant) => {
	const {
		id = 0,
		scientificName = "",
		commonName = ["", ""],
		humidityLevel = HumidityLevel.normal,
		lightRequirements = LightRequirements.partSunPartShade,
		minTemp = 0,
		maxTemp = 0,
		misting = Misting.never,
		difficultyLevel = DifficultyLevel.meduim,
		img = "",
		waterSchedule = 0,
	} = plant;

	const { setModalOpen, setSelectedPlant } = useSearchContext();

	function handlePlantCardClick() {
		setModalOpen(true);
		setSelectedPlant(plant);
	}
	return (
		<div
			data-testid="plantCardComponent"
			className="plantCardContainer box "
			key={id}
			onClick={handlePlantCardClick}
		>
			<div className="plantCardDetails">
				<PlantImg {...plant} />
			</div>
			<div className="plantCommonName">
				{capitalizeFirstLetter(commonName[0])}
			</div>
			<div className="tags ">
				<div className="light tag is-primary is-success is-rounded">
					{lightRequirements[0]}
				</div>
				<div className="difficultyLevel tag is-primary is-success is-rounded">
					{difficultyLevel}
				</div>
				<div className="humidity tag is-primary is-success is-rounded">
					{humidityLevel}
				</div>
			</div>
		</div>
	);
};
export default PlantCard;
