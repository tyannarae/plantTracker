import React from "react";
import Logo from "../../media/pages/logo.png";
import SearchIcon from "../../media/pages/searchBarIcon.png";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  function handleSearchClick() {
    history.push("/");
    console.log("lets get some plants in here!");
  }

  function handleCollectionsClick() {
    history.push("/collections");
    alert("checkout your plants!");
  }
  return (
    <div className="topNav">
      <div className="logo">
        <img className="logoImg" alt="Logo" src={Logo} />
      </div>

      <form className="searchForm">
        <input
          className="searchBar"
          type="text"
          name="search"
          placeholder="Search.."
        ></input>
        <button
          className="searchButton"
          type="submit"
          onClick={handleSearchClick}
        >
          <img className="searchIcon" alt="searchIcon" src={SearchIcon} />
        </button>
      </form>
      <div className="collectionsWrapper">
        <button className="collectionsButton" onClick={handleCollectionsClick}>
          {" "}
          Collections
        </button>
      </div>
    </div>
  );
};
export default NavBar;
