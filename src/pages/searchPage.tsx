import React, { FunctionComponent, useState } from "react";
import Modal from 'react-modal';
import NavBar from "../components/navBar";
import PlantCard from "../components/plantCard";
import "../styles/pages/searchPage.scss";
import { Plants, Plant } from "../database/plants";
import { SearchPageContext } from '../context/pages/searchPage'

const SearchPage: FunctionComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<Array<Plant>>(Plants)
  const [selectedPlant, setSelectedPlant] = useState<Plant | undefined >(undefined)

  const closeModal = () =>{
    setModalOpen(!isModalOpen)
  }
  return (
    <SearchPageContext.Provider value={{searchResults, setSearchResults, isModalOpen, setModalOpen, selectedPlant, setSelectedPlant}}>
    <div className="landingPageContainer">
        <Modal
          isOpen={isModalOpen}
          contentLabel="Example Modal"
        > {selectedPlant?.commonName[0]}
        <button onClick={closeModal}>
          X
          </button> </Modal>
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
