import React from "react";
import PlantCard from "./plantCard";
import "../../styles/components/plantResults.scss";
// this component will work for both the users personal collection of plants
// and when searching the plant database

const PlantResults = () => {
  //retrieves plants
  function getPlants() {
    for (let i = 0; i < 3; i++) {
      return <PlantCard />;
    }
  }
  //if True this will render the users collection
  if (window.location.href === "http://localhost:3000/collections") {
    return (
      <div>
        {" "}
        <button>we are under plant your plant collection!</button>
      </div>
    );
  }
  // if false, it will render the search page results
  else {
    return (
      <div className="resultsContainer">
        <div className="featuredPlantsHeader">Featured Plants</div>
        {getPlants()}
      </div>
    );
  }
};
export default PlantResults;
