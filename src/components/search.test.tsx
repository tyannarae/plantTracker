import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./search";
import { Plants } from "../database/plants";
import { SearchPageContext } from "../context/pages/searchPage";

describe("Search", () => {
	it("search component renders", () => {
		render(<Search />);
		expect(screen.getByTestId("searchComp")).toBeDefined();
	});
	it("updates searchResults to contain an empty array", () => {
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
				<Search />
			</SearchPageContext.Provider>
		);
		const input = screen.getByTestId("searchInput");

		jest.useFakeTimers();
		fireEvent.change(input, { target: { value: "!!!BadValue!!!" } });
		setTimeout(() => {
			expect(contextValue.setSearchResults).toHaveBeenCalledWith([]);
		}, 500);
		jest.runAllTimers();
	});

	it("updates searchResults to contain an array of results", () => {
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
				<Search />
			</SearchPageContext.Provider>
		);
		const input = screen.getByTestId("searchInput");

		jest.useFakeTimers();
		fireEvent.change(input, { target: { value: "vera" } });
		setTimeout(() => {
			expect(contextValue.setSearchResults).toHaveBeenCalledWith([Plants[5]]);
		}, 500);
		jest.runAllTimers();
	});
});
