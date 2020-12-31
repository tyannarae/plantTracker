import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Loading } from "./loading";

describe("Loading", () => {
	it("Loading component renders with text", () => {
		const { getByText } = render(<Loading />);
		expect(getByText("loading...")).toBeDefined();
	});
});
