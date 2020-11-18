import React, { FunctionComponent } from "react";
import "../styles/components/plantCard.scss";
import { LightRequirements } from "../components/plantData/lightRequirements";
import { HumidityLevel } from "../components/plantData/humidityLevel";
import { Misting } from "../components/plantData/misting";
import { DifficultyLevel } from "../components/plantData/difficultyLevel";
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
    <div className="plantCardContainer">
      <div className="plantCardDetails">
        <div className="expand">+</div>
        <img src={img} className="plantImage" alt="plant" />
      </div>
      <div className="plantCommonName">{commonName}</div>
      <div className="tags">
        <div className="light tag">{lightRequirements}</div>
        <div className="difficultyLevel tag">{difficultyLevel}</div>
        <div className="humidity tag">{humidityLevel}</div>
      </div>
    </div>
  );
};
export default PlantCard;
