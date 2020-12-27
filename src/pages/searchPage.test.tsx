import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchPage } from "./searchPage";

describe("Search Page", () => {
	it("SearchPage renders with text and isLoading is set to false", () => {
		const loadingIsFalse = false;
		React.useState = jest.fn().mockReturnValueOnce([loadingIsFalse, {}]);
		render(<SearchPage />);
		expect(screen.getByText("Featured Plants")).toBeDefined();
	});
	it("renders as isLoading set to true", () => {
		const loadingIsTrue = true;
		React.useState = jest.fn().mockReturnValueOnce([loadingIsTrue, {}]);
		render(<SearchPage />);
		expect(screen.getByTestId("loadingComponent")).toBeDefined();
	});
});
