import React from "react";
import NavBar from "../components/navBar";
import { Plants, } from "../database/plants";
import "../styles/components/plantCard.scss";




  function ExpandSearchPlantCard(){
    let plantIndex = (window.location.href.slice(35));
    let index: number = +plantIndex;
    return (
  <div>
      <NavBar />
      <div className="expandPlantCardContainer" >
        <div className="">
          <img src={Plants[index].img} className="expandPlantImage" alt="plant" />
        </div>
        <div className="scientificName"> Scientific Name: {Plants[index].scientificName}</div>
        <div className="plantCommonName">{Plants[index].commonName}</div>
          <div className="minTemp">Min Temp: {Plants[index].minTemp}</div>
          <div className="maxTemp">Max Temp: {Plants[index].maxTemp}</div>
          <div className="misting">Misting: {Plants[index].misting}</div>
          <div className="waterSchedule"> Water Schedule: {Plants[index].waterSchedule}</div>
        <div className="tags">
          <div className="light tag">{Plants[index].lightRequirements}</div>
          <div className="difficultyLevel tag">{Plants[index].difficultyLevel}</div>
          <div className="humidity tag">{Plants[index].humidityLevel}</div>
          <button className="addPlantButton"> Add this card to your collection</button>
        </div>
      </div>
      </div>
    );
  };
  export default ExpandSearchPlantCard;