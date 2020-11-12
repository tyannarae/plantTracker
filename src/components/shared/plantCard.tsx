import React from "react";
import testImg from "../../media/pages/landingPageImg.jpeg";
import "../../styles/components/plantCard.scss";

const PlantCard = () => {
  return (
    <div className="plantCardContainer">
      <span className="plantCommonName">img name</span>
      <figure className="plantCardDetails">
        <button className="expand">+</button>
        <img src={testImg} className="plantImage" alt="testing" />
      </figure>
      <span className="light tag">light</span>
      <span className="difficultyLevel tag">difficulty</span>
      <span className="humidity tag">humidity</span>
    </div>
  );
};
export default PlantCard;
