import React from "react";
import PlantCard from "./plantCard";
import "../styles/components/plantResults.scss";
// this component will work for both the users personal collection of plants
// and when searching the plant database

const PlantResults = () => {
  //retrieves plants based on what prop is passed in
  function getPlants() {
    return <PlantCard />;
  }
  // {
  //     return (
  //       <div>
  //         <div className="featuredPlantsHeader">Plant Collection</div>
  //         <div className="results">{getPlants()}</div>
  //       </div>
  //     );
  //   }

  return (
    <div className="resultsContainer">
      <div className="featuredPlantsHeader">Featured Plants</div>
      <div className="results">{getPlants()}</div>
    </div>
  );
};
export default PlantResults;
