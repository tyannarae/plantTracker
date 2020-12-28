import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./search";
import { Plants } from "../database/plants";

describe("Search", () => {
	const setup = () => {
		const utils = render(<Search />);
		const input = utils.getByLabelText("searchInput");
		return {
			input,
			...utils,
		};
	};
	it("search component renders", () => {
		render(<Search />);
		expect(screen.getByTestId("searchComp")).toBeDefined();
	});

	it("updates searchResults", () => {
		const { input } = setup();
		fireEvent.change(input, { target: { value: "23" } });
		expect(input.value).toBe("23");
	});
});
