import { createContext, useContext } from 'react'
import {UserPlant} from '../../database/plants'

export type CollectionPageContextType = {
    selectedPlant?: UserPlant,
    setSelectedPlant: (chosenPlant: UserPlant) => void,
    isModalOpen: boolean,
    setModalOpen: (isOpen: boolean) => void,
}

export const CollectionPageContext = createContext<CollectionPageContextType>({
    selectedPlant: undefined,
    setSelectedPlant: chosenPlant => console.warn('no setSelectedPlant context provider'),
    isModalOpen: false,
    setModalOpen: isOpen => console.warn('modal no context provider'),
})

export const useCollectionContext = () => useContext(CollectionPageContext);