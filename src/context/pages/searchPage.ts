import { createContext, useContext } from 'react'
import {Plant, Plants} from '../../database/plants'

export type SearchPageContextType = {
    searchResults: Array<Plant>,
    setSearchResults: (results: Array<Plant>) => void
}

export const SearchPageContext = createContext<SearchPageContextType>({
    searchResults: Plants,
    setSearchResults: results => console.warn('no search context provider')
})

export const useSearchContext = () => useContext(SearchPageContext);

