import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LandingPage } from "./landingPage";

describe("Landing Page", () => {
	it("landingPage renders with text", () => {
		const { getByText } = render(<LandingPage />);
		expect(getByText("Time to Get Planting")).toBeDefined();
	});
	it("renders Landing Page with image", () => {
		const { getByTestId } = render(<LandingPage />);
		const img = getByTestId("backgroundImg");
		expect(img).toHaveAttribute("src", "landingPage.jpg");
	});
});
