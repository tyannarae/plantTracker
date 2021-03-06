import React from "react";
import {
	findByTestId,
	getAllByTestId,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar } from "./navBar";

describe("NavBar", () => {
	it("Navbar component renders", () => {
		const value = {
			search: true,
		};
		render(<NavBar search={value.search} />);
		expect(screen.getAllByText("Sign Out")).toBeDefined();
		expect(screen.getAllByText("Collections")).toBeDefined();
		expect(screen.getByTestId("navBar")).toBeDefined();
	});
	it("contains search component when search prop is set to true", () => {
		const value = {
			search: true,
		};
		render(<NavBar search={value.search} />);
		expect(screen.getByTestId("searchComp")).toBeDefined();
	});
	it("does not render with search component when search props is false", () => {
		const value = {
			search: false,
		};

		render(<NavBar search={value.search} />);
		const searchComp = screen.queryAllByTestId("searchComp");
		expect(searchComp).toHaveLength(0);
	});
});
