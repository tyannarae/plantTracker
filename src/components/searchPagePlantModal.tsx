import React, { FunctionComponent } from "react";
import { useSearchContext } from '../context/pages/searchPage'

const SearchPagePlantModal: FunctionComponent = () => {
    const {selectedPlant }= useSearchContext();
    const {isModalOpen, setModalOpen} = useSearchContext();
  const closeModal = () =>{
    setModalOpen(!isModalOpen)
  }
    return (
       
            <div>
                  <button onClick={closeModal}> X </button>
                <div>{selectedPlant?.commonName[0]}</div>
                <img src={selectedPlant?.img} alt=''></img>
                <div>{selectedPlant?.id}</div>
            </div>

    )
}
export default SearchPagePlantModal;