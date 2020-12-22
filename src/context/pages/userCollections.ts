import { createContext, useContext } from 'react'
import {UserPlant} from '../../database/plants'

export type CollectionPageContextType = {
    deletedPlant?: UserPlant,
    setDeletedPlant: (plantDeleted: UserPlant) => void,
    selectedPlant?: UserPlant,
    setSelectedPlant: (chosenPlant: UserPlant) => void,
    isModalOpen: boolean,
    setModalOpen: (isOpen: boolean) => void,
}


export const CollectionPageContext = createContext<CollectionPageContextType>({
    deletedPlant: undefined,
    setDeletedPlant: plantDeleted => console.warn('no setDeletedPlant context provider'),
    selectedPlant: undefined,
    setSelectedPlant: chosenPlant => console.warn('no setSelectedPlant context provider'),
    isModalOpen: false,
    setModalOpen: isOpen => console.warn('modal no context provider'),
})

export const useCollectionContext = () => useContext(CollectionPageContext);