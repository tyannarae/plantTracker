import React from "react";
import { render, screen } from "@testing-library/react";
import { CollectionPageContext } from "../context/pages/userCollections";
import { UserCollections } from "./userCollection";
import { DirectionFacing } from "../models/directionFacing";
import { Plants } from "../database/plants";

describe("User Collections", () => {
	it("User Collection page renders with loadingState is set to true", () => {
		//mocking context - set isLoading to true.
		const loadingIsTrue = true;
		React.useState = jest.fn().mockReturnValueOnce([loadingIsTrue, {}]);
		const { getByTestId } = render(<UserCollections />);
		expect(getByTestId("loadingComponent")).toBeDefined();
	});
	it("User Collection page renders with loadingState is set to false and no plants avaiable", () => {
		const UserCollection = [
			{
				id: 2,
				directionFacing: DirectionFacing,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
			{
				id: 3,
				directionFacing: DirectionFacing,
				inWindowSeal: false,
				growLight: true,
				lastWaterDate: new Date(),
			},
		];
		const loadingIsFalse = false;
		const contextValue = {
			index: 1,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: false,
			setModalOpen: jest.fn(),
			selectedPlant: undefined,
			setSelectedPlant: jest.fn(),
		};
		React.useState = jest
			.fn()
			.mockReturnValueOnce([loadingIsFalse, {}])
			.mockReturnValueOnce([UserCollection, {}]);
		const { getByTestId } = render(
			<CollectionPageContext.Provider value={contextValue}>
				<UserCollections />
			</CollectionPageContext.Provider>
		);
		expect(getByTestId("userCollectionsOutterContainer")).toBeDefined();
		expect(getByTestId("navBar")).toBeDefined();
		expect(getByTestId("userCollectionItemsTernary")).toBeDefined();
		expect(getByTestId("noPlantsAvailable")).toBeDefined();
	});
	it("User Collection page renders with CollectionBox and loadingState is set to false", () => {
		const UserCollection = [
			{
				id: 2,
				directionFacing: DirectionFacing.west,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
			{
				id: 3,
				directionFacing: DirectionFacing.north,
				inWindowSeal: false,
				growLight: true,
				lastWaterDate: new Date(),
			},
		];

		Object.defineProperty(window, "sessionStorage", {
			value: {
				getItem: jest.fn(() => JSON.stringify(UserCollection)),
			},
			writable: true,
		});
		const loadingIsFalse = false;
		const contextValue = {
			index: 1,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: false,
			setModalOpen: jest.fn(),
			selectedPlant: undefined,
			setSelectedPlant: jest.fn(),
		};
		React.useState = jest
			.fn()
			.mockReturnValueOnce([loadingIsFalse, {}])
			.mockReturnValueOnce([UserCollection, {}]);
		render(
			<CollectionPageContext.Provider value={contextValue}>
				<UserCollections />
			</CollectionPageContext.Provider>
		);
		expect(screen.getByTestId("userCollectionsOutterContainer")).toBeDefined();
		expect(screen.getByTestId("navBar")).toBeDefined();
		expect(screen.getByTestId("userCollectionItemsTernary")).toBeDefined();
		expect(screen.getAllByTestId("CollectionBox")).toBeDefined();
	});
});
