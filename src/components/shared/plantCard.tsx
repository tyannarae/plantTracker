import React from "react";
import testImg from "../../media/pages/landingPageImg.jpeg";
import "../../styles/components/plantCard.scss";

const PlantCard = () => {
  return (
    <div className="plantCardContainer">
      <div className="plantCardDetails">
        <button className="expand">+</button>
        <img src={testImg} className="plantImage" alt="testing" />
      </div>
      <div className="plantCommonName">img name</div>
      <div className="tags">
        <div className="light tag">light</div>
        <div className="difficultyLevel tag">difficulty</div>
        <div className="humidity tag">humidity</div>
      </div>
    </div>
  );
};
export default PlantCard;
