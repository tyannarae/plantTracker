import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SearchPageContext } from "../context/pages/searchPage";
import { PlantCard } from "./plantCard";
import { Plants } from "../database/plants";

describe("PlantCard", () => {
	it("renders PlantCard component", () => {
		const { getByTestId } = render(
			<PlantCard {...Plants[0].id} {...Plants[0]} />
		);
		expect(getByTestId("plantCardComponent")).toBeDefined();
	});
	it("onclick, calls function handlePlantCardClick & sets modal to open", () => {
		const contextValue = {
			isModalOpen: false,
			setModalOpen: jest.fn(),
			searchResults: Plants,
			setSearchResults: jest.fn(),
			selectedPlant: Plants[0],
			setSelectedPlant: jest.fn(),
		};

		const { getByTestId } = render(
			<SearchPageContext.Provider value={contextValue}>
				<PlantCard
					{...contextValue.selectedPlant.id}
					{...contextValue.selectedPlant}
				/>
			</SearchPageContext.Provider>
		);
		const plantCard = getByTestId("plantCardComponent");
		fireEvent.click(plantCard);
		expect(contextValue.setModalOpen).toHaveBeenCalledWith(true);
	});
});
