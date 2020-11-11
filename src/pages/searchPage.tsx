import React from "react";
import NavBar from "../components/shared/navBar";
import PlantResults from "../components/shared/plantResults";
import "../styles/pages/searchPage.scss";
import "../styles/pages/landingPage.scss";

const SearchPage = () => {
  return (
    <div className="landingPageContainer">
      <NavBar />
      <PlantResults />
    </div>
  );
};

export default SearchPage;
