import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/pages/searchPage.scss";

import "../styles/pages/landingPage.scss";

const SearchPage = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
    console.log("lets get some plants in here");
  }

  return (
    <div className="landingPageContainer">
      <button className="searchButton " onClick={handleClick}>
        <p>Time to Get Planting</p>
      </button>
    </div>
  );
};

export default SearchPage;
