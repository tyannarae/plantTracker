import React, { FunctionComponent } from "react";
import { useSearchContext } from '../context/pages/searchPage'
import '../styles/components/searchPagePlantModal.scss'

const SearchPagePlantModal: FunctionComponent = () => {
    const {selectedPlant }= useSearchContext();
    const {isModalOpen, setModalOpen} = useSearchContext();
  const closeModal = () =>{
    setModalOpen(!isModalOpen)
  }

  const getLightRequirements =() =>{
      
      if (selectedPlant?.lightRequirements === undefined) {
         return undefined
      } else {
        
          return(
            <div>Light Requirements: 
                        {selectedPlant?.lightRequirements.map((lightReq) => (
                    <div>{lightReq}</div>
          
          ))}
            </div> 
          )        
        }
  
  }
    return (
       
            <div className={'searchPageModalContainer'}>
                <button className={'exitButton'}onClick={closeModal}> X </button>
                <div>{selectedPlant?.commonName[0]}</div>
                <img src={selectedPlant?.img} alt=''></img>
                <div> Scientific Name: {selectedPlant?.scientificName}</div>
                <div> Difficulty: {selectedPlant?.difficultyLevel}</div>
                <div> Humidity Level: {selectedPlant?.humidityLevel}</div>
          
                {getLightRequirements()}
        
                
                <div>Min Temp: {selectedPlant?.minTemp}</div>
                <div>Max Temp: {selectedPlant?.maxTemp}</div>
                <div>Misting Requirement: {selectedPlant?.misting}</div>

            </div>

    )
}
export default SearchPagePlantModal;