import React, { FunctionComponent } from "react";
import { useSearchContext } from '../context/pages/searchPage'
import '../styles/components/searchPagePlantModal.scss' 

const SearchPagePlantModal: FunctionComponent = () => {
    const {selectedPlant }= useSearchContext();
    const {isModalOpen, setModalOpen} = useSearchContext();
    
  const closeModal = () =>{
    setModalOpen(!isModalOpen)
  }
    return (

            <div className={"searchPageModalContainer"}>
                <button className={"exitButton"} onClick={closeModal}> X </button>
                <div>{selectedPlant?.commonName[0]}</div>
                <img src={selectedPlant?.img} alt=''></img>
                <div>{selectedPlant?.id}</div>
            </div>

    )
}
export default SearchPagePlantModal;