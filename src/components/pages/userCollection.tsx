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

function noPlants() {
  return (
    <div>no plants!</div>
  )
}
const UserCollections: FunctionComponent<userCollectionsProps> = () => {
  return (
    <div>
      <NavBar />
      <div className="resultsContainer">
        <div className="featuredPlantsHeader">Your Collection</div>
      </div>
      <div className="cardsContainer">
        { UsersCollection.length > 0 ?
               Plants.map((plant) =>
          UsersCollection.map((userPlant) =>
            plant.id === userPlant.id ? <PlantCard {...plant} /> : null
          ) 
        ):
        <div className="noCollectionAvaiable">
          Looks like you have not added any plants to your collection yet.
          </div>
        }

      </div>
    </div>
  );
};

export default UserCollections;
