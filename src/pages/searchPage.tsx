import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/pages/searchPage.scss";
import Logo from "../media/pages/logo.png";

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
        <div className="logo">
          {" "}
          <img className="logoImg" alt="Logo" src={Logo} />
        </div>

        <form className="searchForm">
          <input className="searchBar"></input>
          <button
            className="searchButton"
            type="submit"
            onClick={handleClick}
          ></button>
        </form>
        <div className="collectionsWrapper">
          <button className="collectionsButton"> Collections</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
