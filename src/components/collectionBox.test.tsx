import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CollectionPageContext } from "../context/pages/userCollections";
import { CollectionBox } from "./collectionBox";
import { DirectionFacing } from "../models/directionFacing";

describe("CollectionsBox", () => {
	const UserCollection = [
		{
			name: "someName",
			id: 2,
			directionFacing: DirectionFacing.west,
			inWindowSeal: true,
			growLight: true,
			lastWaterDate: new Date(),
		},
	];
	it("renders CollectionBox component", () => {
		const contextValue = {
			index: 1,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: false,
			setModalOpen: jest.fn(),
			selectedPlant: UserCollection[0],
			setSelectedPlant: jest.fn(),
		};
		render(
			<CollectionPageContext.Provider value={contextValue}>
				<CollectionBox
					index={contextValue.index}
					userPlant={contextValue.selectedPlant}
				/>
			</CollectionPageContext.Provider>
		);
		expect(screen.getByTestId("CollectionBox")).toBeDefined();
	});
	it("onclick, calls function openEditModal & sets modal to open", () => {
		const contextValue = {
			index: 1,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: false,
			setModalOpen: jest.fn(),
			selectedPlant: UserCollection[0],
			setSelectedPlant: jest.fn(),
		};

		render(
			<CollectionPageContext.Provider value={contextValue}>
				<CollectionBox
					index={contextValue.index}
					userPlant={contextValue.selectedPlant}
				/>
			</CollectionPageContext.Provider>
		);
		const editButton = screen.getByTestId("edit");
		fireEvent.click(editButton);
		expect(contextValue.setModalOpen).toHaveBeenCalledWith(true);
	});
	it("onclick, calls function deletePlant succesfully removed plant from UserCollection", () => {
		const contextValue = {
			index: 1,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: false,
			setModalOpen: jest.fn(),
			selectedPlant: UserCollection[0],
			setSelectedPlant: jest.fn(),
		};

		render(
			<CollectionPageContext.Provider value={contextValue}>
				<CollectionBox
					index={contextValue.index}
					userPlant={contextValue.selectedPlant}
				/>
			</CollectionPageContext.Provider>
		);
		const deleteButton = screen.getByTestId("delete");
		fireEvent.click(deleteButton);
		expect(contextValue.setDeletedPlant).toHaveBeenCalledWith(
			contextValue.selectedPlant
		);
	});
});
