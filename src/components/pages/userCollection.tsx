import React from "react";
import NavBar from "../navBar";
import PlantCard from "../plantCard";
import "../../styles/pages/userCollection.scss";

const UserCollections = () => {
  return (
    <div>
      <NavBar />
      <div className="resultsContainer">
        <div className="featuredPlantsHeader">Your Collection</div>
      </div>
      <PlantCard />
    </div>
  );
};

export default UserCollections;
