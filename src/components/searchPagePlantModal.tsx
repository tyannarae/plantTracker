import React, { FunctionComponent } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSearchContext } from '../context/pages/searchPage'
import { DirectionFacing } from "../models/directionFacing";

import '../styles/components/searchPagePlantModal.scss'

const SearchPagePlantModal: FunctionComponent = () => {
const {selectedPlant }= useSearchContext();
const {isModalOpen, setModalOpen} = useSearchContext();
const closeModal = () =>{
    setModalOpen(!isModalOpen)
}

Object.keys(DirectionFacing).map((type) => (
    console.log(type)
    ));
    
const options = [ 
    DirectionFacing.north,
    DirectionFacing.northEast,
    DirectionFacing.northWest,
    DirectionFacing.west,
    DirectionFacing.east,
    DirectionFacing.south,
    DirectionFacing.southEast
  ];

  const getLightRequirements =() =>{
      if (selectedPlant?.lightRequirements === undefined) {
         return undefined
      }
       else {
          return(
            <div>Light Requirements: 
                {selectedPlant?.lightRequirements.map((lightReq) => (
                    <div>{lightReq}</div>
                ))}
            </div> 
          )        
        }
  }


    return (
      <div className={"searchPageModalContainer"}>
        <button className={"exitButton"} onClick={closeModal}>
          {" "}
          X{" "}
        </button>
        <div>{selectedPlant?.commonName[0]}</div>
        <img src={selectedPlant?.img} alt=""></img>
        <div> Scientific Name: {selectedPlant?.scientificName}</div>
        <div> Difficulty: {selectedPlant?.difficultyLevel}</div>
        <div> Humidity Level: {selectedPlant?.humidityLevel}</div>
        {getLightRequirements()}
        <div>Min Temp: {selectedPlant?.minTemp}</div>
        <div>Max Temp: {selectedPlant?.maxTemp}</div>
        <div>Misting Requirement: {selectedPlant?.misting}</div>
        <div className="AddToCollectionContainer">
          Add {selectedPlant?.commonName[0]} to your collection:
          <div>
            what direction does this plant face?
            <Dropdown
              options={options}
              placeholder="Select an option"
            ></Dropdown>
          </div>
          <div>
            {" "}
            Is it located in a window seal?
            <input type="checkbox" />
          </div>
          <div>
            {" "}
            Is it located under a grow light?
            <input type="checkbox" />
          </div>
          <div>
            {" "}
            When was the last water date?
            <input type="checkbox" />
          </div>
          <select
            className="selectBox"
          
          >
            {/* {Object.keys(DirectionFacing).map((type) => (
              <option key={"buttonInspectorButtonSize" + type} value={type}>
                {type}
              </option>
            ))} */}
          </select>
        </div>
      </div>
    );
}
export default SearchPagePlantModal;