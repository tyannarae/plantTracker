import React from "react";
import MockDate from "mockdate";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchPageContext } from "../context/pages/searchPage";
import { PlantInspector } from "./plantInspector";
import { Plants } from "../database/plants";
import { DirectionFacing } from "../models/directionFacing";

describe("PlantInspector", () => {
	it("renders plantInspector component", () => {
		const contextValue = {
			isModalOpen: true,
			setModalOpen: jest.fn(),
			searchResults: Plants,
			setSearchResults: jest.fn(),
			selectedPlant: Plants[0],
			setSelectedPlant: jest.fn(),
		};

		render(
			<SearchPageContext.Provider value={contextValue}>
				<PlantInspector />
			</SearchPageContext.Provider>
		);
		expect(screen.getByTestId("plantInspector")).toBeDefined();
	});
	it("closes PlantInspector when closeModal function is clicked", () => {
		const contextValue = {
			isModalOpen: true,
			setModalOpen: jest.fn(),
			searchResults: Plants,
			setSearchResults: jest.fn(),
			selectedPlant: Plants[0],
			setSelectedPlant: jest.fn(),
		};

		render(
			<SearchPageContext.Provider value={contextValue}>
				<PlantInspector />
			</SearchPageContext.Provider>
		);
		const closeButton = screen.getByTestId("closeBtn");
		fireEvent.click(closeButton);
		expect(contextValue.setModalOpen).toHaveBeenCalledWith(false);
	});

	it("adds Plant to user Collection onClick", () => {
		// MockDate.set("2000-11-22");
		// const userDeclaredPlantName = "test";
		// const underGrowLight = true;
		// const isInWindow = false;
		// const directionFacing = DirectionFacing.west;
		// const dateWateredLast = new Date().toString();
		// React.useState = jest
		// 	.fn()
		// 	.mockReturnValueOnce([userDeclaredPlantName, {}])
		// 	.mockReturnValueOnce([underGrowLight, {}])
		// 	.mockReturnValueOnce([isInWindow, {}])
		// 	.mockReturnValueOnce([directionFacing, {}]);
		// // .mockReturnValueOnce([dateWateredLast, {}]);
		// const UserCollection = [
		// 	{
		// 		id: 2,
		// 		directionFacing: DirectionFacing.north,
		// 		inWindowSeal: true,
		// 		growLight: true,
		// 		lastWaterDate: new Date().toString(),
		// 	},
		// ];
		// const contextValue = {
		// 	isModalOpen: true,
		// 	setModalOpen: jest.fn(),
		// 	searchResults: Plants,
		// 	setSearchResults: jest.fn(),
		// 	selectedPlant: Plants[0],
		// 	setSelectedPlant: jest.fn(),
		// };
		// Object.defineProperty(window, "sessionStorage", {
		// 	value: {
		// 		getItem: jest.fn(() => JSON.stringify(UserCollection)),
		// 	},
		// 	writable: true,
		// });
		// render(
		// 	<SearchPageContext.Provider value={contextValue}>
		// 		<PlantInspector />
		// 	</SearchPageContext.Provider>
		// );
		// const addPlantButton = screen.getByTestId("addPlant");
		// fireEvent.click(addPlantButton);
		// expect(UserCollection).toHaveLength(1);
	});
});
