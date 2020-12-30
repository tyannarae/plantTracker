import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Plants } from "../database/plants";
import { CollectionPageContext } from "../context/pages/userCollections";
import { CollectionBox } from "./collectionBox";
import { DirectionFacing } from "../models/directionFacing";
import { capitalizeFirstLetter } from "../utils/upperCaseFirstLetter";
describe("CollectionsBox", () => {
	it("renders CollectionBox component", () => {
		const UserCollection = [
			{
				name: "someName",
				id: 0,
				directionFacing: DirectionFacing.west,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
			{
				name: "some Other Name",
				id: 0,
				directionFacing: DirectionFacing.west,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
		];
		const openedPlant = UserCollection[0];
		const contextValue = {
			index: 0,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: false,
			setModalOpen: jest.fn(),
			selectedPlant: openedPlant,
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
		const plant = contextValue.selectedPlant;
		const upperCasedPlantName = capitalizeFirstLetter(plant.name);
		const plantScientificName = capitalizeFirstLetter(
			Plants[plant.id].scientificName
		);

		expect(screen.getByText(plantScientificName)).toBeDefined();
		expect(screen.getByText(upperCasedPlantName)).toBeDefined();
		expect(screen.getByTestId("CollectionBox")).toBeDefined();
	});
	it("onclick, calls function openEditModal & sets modal to open", () => {
		const UserCollection = [
			{
				name: "someName",
				id: 0,
				directionFacing: DirectionFacing.west,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
			{
				name: "some Other Name",
				id: 0,
				directionFacing: DirectionFacing.west,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
		];
		const openedPlant = UserCollection[0];
		const contextValue = {
			index: 0,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: false,
			setModalOpen: jest.fn(),
			selectedPlant: openedPlant,
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
	it("on clicking edit button, this calls the deletePlant function and removed plant from UserCollection", () => {
		const UserCollection = [
			{
				name: "someName",
				id: 0,
				directionFacing: DirectionFacing.west,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
			{
				name: "some Other Name",
				id: 0,
				directionFacing: DirectionFacing.west,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
		];
		const openedPlant = UserCollection[0].id;

		const contextValue = {
			index: 0,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: false,
			setModalOpen: jest.fn(),
			selectedPlant: openedPlant,
			setSelectedPlant: jest.fn(),
		};
		Object.defineProperty(window, "sessionStorage", {
			value: {
				getItem: jest.fn(() => JSON.stringify(UserCollection)),
				setItem: jest.fn(() =>
					JSON.stringify(UserCollection.splice(contextValue.index, 1))
				),
			},
		});

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
		expect(contextValue.setDeletedPlant).toBeCalledWith(openedPlant);
	});
});
