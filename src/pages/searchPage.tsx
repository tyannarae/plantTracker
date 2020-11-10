import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/pages/searchPage.scss";

import "../styles/pages/landingPage.scss";

const SearchPage = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
    console.log("lets get some plants in here");
  }

  return (
    <div className="landingPageContainer">
      <div className="topNav">
        <button> Logo</button>
        <form className="searchForm">
          <input className="searchBar"></input>
          <button
            className="searchButton"
            type="submit"
            onClick={handleClick}
          ></button>
        </form>
        <button> Collections</button>
      </div>
    </div>
  );
};

export default SearchPage;
