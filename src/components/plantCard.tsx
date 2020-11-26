import React, { FunctionComponent } from "react";
import "../styles/components/plantCard.scss";
import { LightRequirements } from "../modules/lightRequirements";
import { HumidityLevel } from "../modules/humidityLevel";
import { Misting } from "../modules/misting";
import { DifficultyLevel } from "../modules/difficultyLevel";
import { Plant } from "../database/plants";
/**
 * This component will take in a single plant object and display it's results to the user.
 */

const PlantCard: FunctionComponent<Plant> = ({
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
}) => {
  return (
    <div className="plantCardContainer" key={id}>
      <div className="plantCardDetails">
        <div className="expand">+</div>
        <img src={img} className="plantImage" alt="plant" />
      </div>
      <div className="plantCommonName">{commonName[0]}</div>
      <div className="tags">
        <div className="light tag">{lightRequirements[0]}</div>

        <div className="difficultyLevel tag">{difficultyLevel}</div>
        <div className="humidity tag">{humidityLevel}</div>
      </div>
    </div>
  );
};
export default PlantCard;
