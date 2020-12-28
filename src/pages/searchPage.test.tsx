import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchPage } from "./searchPage";
import { SearchPageContext } from "../context/pages/searchPage";
import { Plants } from "../database/plants";
import { DirectionFacing } from "../models/directionFacing";
describe("Search Page", () => {
	it("SearchPage renders with text and isLoading is set to false", () => {
		const loadingIsFalse = false;
		const isModalOpen = false;
		const underGrowLight = true;
		const isInWindow = false;
		const directionFacing = DirectionFacing.west;
		const dateWateredLast = new Date();
		React.useState = jest
			.fn()
			.mockReturnValueOnce([loadingIsFalse, {}])
			.mockReturnValueOnce([isModalOpen, {}])
			.mockReturnValueOnce([underGrowLight, {}])
			.mockReturnValueOnce([isInWindow, {}])
			.mockReturnValueOnce([directionFacing, {}])
			.mockReturnValueOnce([dateWateredLast, {}]);
		render(<SearchPage />);
		expect(screen.getByText("Featured Plants")).toBeDefined();
	});
	it("renders as isLoading set to true", () => {
		const loadingIsTrue = true;
		const isModalOpen = false;

		React.useState = jest
			.fn()
			.mockReturnValueOnce([loadingIsTrue, {}])
			.mockReturnValueOnce([isModalOpen, {}]);
		render(<SearchPage />);
		expect(screen.getByTestId("loadingComponent")).toBeDefined();
	});
	it("renders PlantInspector and isModalOpen set to true", () => {
		const loadingIsFalse = false;
		const isModalOpen = true;
		const underGrowLight = true;
		const isInWindow = false;
		const directionFacing = DirectionFacing.west;
		const dateWateredLast = new Date();
		React.useState = jest
			.fn()
			.mockReturnValueOnce([loadingIsFalse, {}])
			.mockReturnValueOnce([isModalOpen, {}])
			.mockReturnValueOnce([underGrowLight, {}])
			.mockReturnValueOnce([isInWindow, {}])
			.mockReturnValueOnce([directionFacing, {}])
			.mockReturnValueOnce([dateWateredLast, {}]);

		const contextValue = {
			searchResults: Plants,
			setSearchResults: jest.fn(),
			isModalOpen: true,
			setModalOpen: jest.fn(),
			selectedPlant: Plants[0],
			setSelectedPlant: jest.fn(),
		};
		render(
			<SearchPageContext.Provider value={contextValue}>
				<SearchPage />
			</SearchPageContext.Provider>
		);
		expect(screen.getByTestId("plantInspector")).toBeDefined();
	});
});
