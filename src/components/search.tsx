import React from "react";
import SearchIcon from "../media/navBar/searchBarIcon.png";
import { useSearchContext } from '../context/pages/searchPage'
import { HumidityLevel } from "../models/humidityLevel";
import { LightRequirements } from "../models/lightRequirements";
import { Misting } from "../models/misting";
import { DifficultyLevel } from "../models/difficultyLevel";




export const Search = () => {
  const {setSearchResults} = useSearchContext();

  const handleSearchClick = () => {
    const results = [{
      id: 4,
      scientificName: "chlorophytum comosum",
      commonName: ["spider plant"],
      humidityLevel: HumidityLevel.normal,
      lightRequirements: [
        LightRequirements.partSunPartShade,
        LightRequirements.brightLight,
      ],
      minTemp: 60,
      maxTemp: 80,
      misting: Misting.oncePerWeek,
      difficultyLevel: DifficultyLevel.easy,
      img:
        "https://www.mydomaine.com/thmb/jESW-X0scQYLt72ILH4-MJR55LU=/1370x1661/filters:no_upscale():max_bytes(150000):strip_icc()/bloomscape-product-spider-plant-stone-2-aadf20d628e04c988ba462c9b47a2abc.jpg",
      waterSchedule: 7,
    }];
    setSearchResults(results);
  }
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.target.value
    console.log(e.target.value)
  }

  return (
    <span className="searchForm">
      <input
        className="searchBar"
        type="text"
        name="search"
        placeholder="Search.."
        onChange={handleSearch}
      ></input>
      <button
        className="searchButton"
        type="button"
        onClick={handleSearchClick}
      >
        <img className="searchIcon" alt="searchIcon" src={SearchIcon} />
      </button>
    </span>
  );
};
