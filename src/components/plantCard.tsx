import React from "react";
import "../styles/components/plantCard.scss";
/**
 * This component will take in a single plant object and display it's results on the screen.
 */
const PlantCard = () => {
  return (
    <div className="plantCardContainer">
      <div className="plantCardDetails">
        <button className="expand">+</button>
        <img
          src={
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          }
          className="plantImage"
          alt="plant"
        />
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
