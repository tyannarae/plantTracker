import React, { FunctionComponent } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useSearchContext } from "../context/pages/searchPage";
import { DirectionFacing } from "../models/directionFacing";
import "../styles/components/searchPagePlantModal.scss";

const SearchPagePlantModal: FunctionComponent = () => {
  const { selectedPlant } = useSearchContext();
  const { isModalOpen, setModalOpen } = useSearchContext();
  const closeModal = () => {
    setModalOpen(!isModalOpen);
  };
  const options: Array<string> = [];

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

  Object.keys(DirectionFacing).map((direction) => options.push(direction));

  const addToCollection = () => {
    console.log("");
  };

  return (
    <div className={"searchPageModalContainer"}>
      <button className={"exitButton"} onClick={closeModal}>
        X
      </button>
      <div className="itemNameAndImgContainer">
        <div>{selectedPlant?.commonName[0]}</div>
        <img
          className="searchPageModalImg"
          src={selectedPlant?.img}
          alt=""
        ></img>
      </div>
      <div className="itemAddToCollectionContainer">
        Add {selectedPlant?.commonName[0]} to your collection:
        <div>
          what direction does this plant face?
          <Dropdown options={options} placeholder="Select an option"></Dropdown>
        </div>
        <div>
          Is it located in a window seal?
          <input type="checkbox" />
        </div>
        <div>
          Is it located under a grow light?
          <input type="checkbox" />
        </div>
        <div>
          When was the last water date?
          <input type="checkbox" />
        </div>
        <button onClick={addToCollection}> Add</button>
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
export default SearchPagePlantModal;
