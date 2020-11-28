import React from "react";
import _ from "lodash";
import SearchIcon from "../media/navBar/searchBarIcon.png";
import { useSearchContext } from '../context/pages/searchPage'
import { Plants } from '../database/plants'




export const Search = () => {
  
  const {setSearchResults} = useSearchContext();

  const handleSearch = _.debounce((e: React.ChangeEvent<HTMLInputElement>) => {

    if(!e.target.value){
      setSearchResults(Plants)
    }

    else {
      const value = e.target.value.toLowerCase();
      const results = [];
      for (let i = 0; i < Plants.length; i ++) {
        const plant = Plants[i];
        for (let j = 0; j < plant.commonName.length; j++) {
          const name = plant.commonName[j];
          if (name.toLowerCase().includes(value)) {
            results.push(plant);
            break;
          }
        }
      }
      setSearchResults(results)
    }
  },300)

  return (
    <span className="searchForm">
      <input
        className="searchBar"
        type="text"
        name="search"
        placeholder="Search.."
        onChange={(e) => handleSearch(e)}
      ></input>
      <button
        className="searchButton"
        type="button"
      >
        <img className="searchIcon" alt="searchIcon" src={SearchIcon} />
      </button>
    </span>
  );
};
