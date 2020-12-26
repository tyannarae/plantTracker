import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NoPlantsAvailable } from "./noPlantsAvailable";

describe("Loading", () => {
	it("loading component renders with text", () => {
		const { getByText } = render(<NoPlantsAvailable />);
		expect(
			getByText("No plants available. Please try altering your search.")
		).toBeDefined();
	});
});
