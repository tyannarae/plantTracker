import React from "react";
import PlantCard from "./plantCard";
// this component will work for both the users personal collection of plants
// and when searching the plant database

const PlantResults = () => {
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
        <PlantCard />
      </div>
    );
  }
};
export default PlantResults;
