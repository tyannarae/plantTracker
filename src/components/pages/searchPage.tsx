import React from "react";
import NavBar from "../navBar";
import PlantCard from "../plantCard";
import "../../styles/pages/searchPage.scss";

const SearchPage = () => {
  return (
    <div className="landingPageContainer">
      <NavBar />
      <div className="resultsContainer">
        <div className="featuredPlantsHeader">Featured Plants</div>
      </div>
      <PlantCard />
    </div>
  );
};

export default SearchPage;
