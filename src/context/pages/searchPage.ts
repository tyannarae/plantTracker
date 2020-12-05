import { createContext, useContext } from 'react'
import {Plant, Plants} from '../../database/plants'


export type SearchPageContextType = {
    selectedPlant?: Plant,
    setSelectedPlant: (chosenPlant: Plant) => void,
    isModalOpen: boolean,
    setModalOpen: (isOpen: boolean) => void,
    searchResults: Array<Plant>,
    setSearchResults: (results: Array<Plant>) => void
}

export const SearchPageContext = createContext<SearchPageContextType>({
    selectedPlant: undefined,
    setSelectedPlant: chosenPlant => console.warn('no setSelectedPlant context provider'),
    isModalOpen: false,
    setModalOpen: isOpen => console.warn('modal no context provider'),
    searchResults: Plants,
    setSearchResults: results => console.warn('no search context provider')
})

export const useSearchContext = () => useContext(SearchPageContext);

