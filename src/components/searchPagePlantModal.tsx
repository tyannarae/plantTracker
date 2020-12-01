import React, { FunctionComponent } from "react";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import "react-dropdown/style.css";
import { useSearchContext } from "../context/pages/searchPage";
import { DirectionFacing } from "../models/directionFacing";
import "../styles/components/searchPagePlantModal.scss";
import "react-datepicker/dist/react-datepicker.css";

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
        <img
          className="searchPageModalImg"
          src={selectedPlant?.img}
          alt=""
        ></img>
        <div>{selectedPlant?.commonName[0]}</div>
      </div>
      <div className="itemAddToCollectionContainer">
        Add {selectedPlant?.commonName[0]} to your collection:
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
              options={options}
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
export default SearchPagePlantModal;
