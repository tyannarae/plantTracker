import React, { FunctionComponent, useState } from "react";
import NavBar from "../components/navBar";
import PlantCard from "../components/plantCard";
import "../styles/pages/searchPage.scss";
import { Plants, Plant } from "../database/plants";
import { SearchPageContext } from '../context/pages/searchPage'

const SearchPage: FunctionComponent = () => {

  const [searchResults, setSearchResults] = useState<Array<Plant>>(Plants)

  return (
    <SearchPageContext.Provider value={{searchResults, setSearchResults}}>
    <div className="landingPageContainer">
      <NavBar />
      <div className="resultsContainer">
        <div className="featuredPlantsHeader">Featured Plants</div>
      </div>
      <div className="cardsContainer">
        {searchResults.map((plant) => (
          <PlantCard key={plant.id} {...plant} />
        ))}
      </div>
    </div>
    </SearchPageContext.Provider>
  );
};

export default SearchPage;
