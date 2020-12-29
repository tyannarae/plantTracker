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

	it("plant is added successfully to session storage", () => {
		const newPlantToAdd = [
			{
				name: "test name",
				id: 2,
				directionFacing: DirectionFacing.west,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
		];

		Object.defineProperty(window, "sessionStorage", {
			value: {
				getItem: jest.fn(() => JSON.stringify(newPlantToAdd)),
				setItem: jest.fn(() => JSON.stringify(newPlantToAdd)),
			},
			writable: true,
		});

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
		fireEvent.click(screen.getByTestId("addPlantButton"));
		const setPlant = window.sessionStorage.getItem("sessionStorage");

		expect(setPlant).toContain("west");
		expect(setPlant).toContain("test name");
	});
});
