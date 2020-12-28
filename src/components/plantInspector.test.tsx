import React from "react";
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

	it("adds Plant to user Collection onClick", () => {});
});
