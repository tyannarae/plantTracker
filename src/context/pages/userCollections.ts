import { createContext, useContext } from 'react'
import {Plant} from '../../database/plants'

export type CollectionsPageContextType = {
    selectedPlant?: Plant,
    setSelectedPlant: (chosenPlant: Plant) => void,
    isModalOpen: boolean,
    setModalOpen: (isOpen: boolean) => void,
}

export const SearchPageContext = createContext<CollectionsPageContextType>({
    selectedPlant: undefined,
    setSelectedPlant: chosenPlant => console.warn('no setSelectedPlant context provider'),
    isModalOpen: false,
    setModalOpen: isOpen => console.warn('modal no context provider'),
})

export const useSearchContext = () => useContext(SearchPageContext);