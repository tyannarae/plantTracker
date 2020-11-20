import React, { FunctionComponent } from "react";
import NavBar from "../navBar";
import PlantCard from "../plantCard";
import {
  UsersCollection,
  UserPlant,
  Plant,
  Plants,
} from "../../database/plants";
import "../../styles/pages/userCollection.scss";

export interface userCollectionsProps {
  usersPlant?: UserPlant[]; //the users chosen plants interface
  plant?: Plant[]; // global plant interface
}

const UserCollections: FunctionComponent<userCollectionsProps> = () => {
  return (
    <div>
      <NavBar />
      <div className="resultsContainer">
        <div className="featuredPlantsHeader">Your Collection</div>
      </div>
      <div className="cardsContainer">
        {Plants.map((plant) =>
          UsersCollection.map((userPlant) =>
            plant.id === userPlant.id ? <PlantCard {...plant} /> : null
          )
        )}
      </div>
    </div>
  );
};

export default UserCollections;
