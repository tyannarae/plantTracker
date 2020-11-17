import React from "react";
import "../styles/components/plantCard.scss";

const PlantCard = () => {
  return (
    <div className="plantCardContainer">
      <div className="plantCardDetails">
        <button className="expand">+</button>
        <img src={""} className="plantImage" alt="plant" />
      </div>
      <div className="plantCommonName"></div>
      <div className="tags">
        <div className="light tag"></div>
        <div className="difficultyLevel tag"></div>
        <div className="humidity tag"></div>
      </div>
    </div>
  );
};
export default PlantCard;
