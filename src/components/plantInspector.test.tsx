import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchPageContext } from "../context/pages/searchPage";
import { PlantInspector } from "./plantInspector";
import { Plants, Plant } from "../database/plants";
import { DirectionFacing } from "../models/directionFacing";
import { capitalizeFirstLetter } from "../utils/upperCaseFirstLetter";

describe("PlantInspector", () => {
	it("renders plantInspector component with plant data", () => {
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
		const plant = Plants[2];
		const contextValue = {
			isModalOpen: true,
			setModalOpen: jest.fn(),
			searchResults: Plants,
			setSearchResults: jest.fn(),
			selectedPlant: plant,
			setSelectedPlant: jest.fn(),
		};

		render(
			<SearchPageContext.Provider value={contextValue}>
				<PlantInspector />
			</SearchPageContext.Provider>
		);

		const upperCasedPlantName = capitalizeFirstLetter(plant.commonName[0]);

		expect(screen.getAllByText(upperCasedPlantName)).toBeDefined();
		const plantImg = screen.getByTestId("plantInspectImg");
		expect(plantImg).toHaveAttribute("src", plant.img);
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
		let newPlantToAdd: Array<Plant> = [];

		Object.defineProperty(window, "sessionStorage", {
			value: {
				getItem: jest.fn(() => JSON.stringify(newPlantToAdd)),
				setItem: jest.fn((key, value) => {
					newPlantToAdd = JSON.parse(value);
				}),
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

		const expectedPlant = {
			growLight: false,
			id: 0,
			inWindowSeal: false,
			name: "no name provided",
		};

		fireEvent.click(screen.getByTestId("addPlantButton"));
		const setPlant = JSON.parse(window.sessionStorage.getItem("") as string);
		const plant = setPlant[0];
		expect(setPlant.length).toEqual(1);
		expect(plant.growLight).toEqual(expectedPlant.growLight);
		expect(plant.id).toEqual(expectedPlant.id);
		expect(plant.inWindowSeal).toEqual(expectedPlant.inWindowSeal);
		expect(plant.name).toEqual(expectedPlant.name);
		expect(plant.lastWaterDate).toBeDefined();
	});
});
