import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CollectionPageContext } from "../context/pages/userCollections";
import { CollectionInspector } from "./collectionInspector";
import { DirectionFacing } from "../models/directionFacing";

describe("CollectionsInspector", () => {
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
	it("renders collectionsInspector component", () => {
		const contextValue = {
			index: 2,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: true,
			setModalOpen: jest.fn(),
			selectedPlant: UserCollection[0],
			setSelectedPlant: jest.fn(),
		};

		render(
			<CollectionPageContext.Provider value={contextValue}>
				<CollectionInspector />
			</CollectionPageContext.Provider>
		);

		expect(screen.getByTestId("collectionInspector")).toBeDefined();
	});
	it("updates the userPlant values", () => {
		const userDeclaredPlantName = "new name";
		const directionFacing = DirectionFacing.west;
		const inWindowSeal = true;
		const growLight = false;
		const lastWaterDate = new Date();

		React.useState = jest
			.fn()
			.mockReturnValueOnce([userDeclaredPlantName, {}])
			.mockReturnValueOnce([inWindowSeal, {}])
			.mockReturnValueOnce([directionFacing, {}])
			.mockReturnValueOnce([growLight, {}])
			.mockReturnValueOnce([lastWaterDate, {}]);
		let updatedCollection = UserCollection;
		Object.defineProperty(window, "sessionStorage", {
			value: {
				getItem: jest.fn(() => JSON.stringify(updatedCollection)),
				setItem: jest.fn((key, value) => {
					return (updatedCollection = JSON.parse(value));
				}),
			},
			writable: true,
		});
		const contextValue = {
			index: 2,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: true,
			setModalOpen: jest.fn(),
			selectedPlant: UserCollection[0],
			setSelectedPlant: jest.fn(),
		};
		render(
			<CollectionPageContext.Provider value={contextValue}>
				<CollectionInspector />
			</CollectionPageContext.Provider>
		);
		fireEvent.click(screen.getByTestId("UpdatePlantButton"));
		const updatedPlant = window.sessionStorage.getItem("sessionStorage");

		expect(updatedPlant).toContain("someName");
		expect(updatedPlant).toContain("west");
	});
});
