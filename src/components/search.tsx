import React from "react";
import SearchIcon from "../media/pages/searchBarIcon.png";

function handleSearchClick() {
  console.log("lets get some plants in here!");
}
export const Search = () => {
  return (
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
  );
};
