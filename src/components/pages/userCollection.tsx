import React, { FunctionComponent } from "react";
import NavBar from "../navBar";
import PlantCard from "../plantCard";
import { Plants, Plant } from "../../database/plants";
import "../../styles/pages/userCollection.scss";

export interface userCollectionsProps {
  plant?: Plant[]; //this will eventually be an object of the users chosen plants
}
const UserCollections: FunctionComponent<userCollectionsProps> = ({
  plant = [],
}) => {
  return (
    <div>
      <NavBar />
      <div className="resultsContainer">
        <div className="featuredPlantsHeader">Your Collection</div>
      </div>
      <div className="cardsContainer">
        {" "}
        {Plants.map((plant) => (
          <PlantCard {...plant} />
        ))}
      </div>
    </div>
  );
};

export default UserCollections;
