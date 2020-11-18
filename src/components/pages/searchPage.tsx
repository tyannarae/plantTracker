import React, { FunctionComponent } from "react";
import NavBar from "../navBar";
import PlantCard from "../plantCard";
import "../../styles/pages/searchPage.scss";
import { Plants, Plant } from "../../database/plants";

export interface SearchPageProps {
  plant?: Plant[];
}

const SearchPage: FunctionComponent<SearchPageProps> = ({ plant = [] }) => {
  return (
    <div className="landingPageContainer">
      <NavBar />
      <div className="resultsContainer">
        <div className="featuredPlantsHeader">Featured Plants</div>
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

export default SearchPage;
