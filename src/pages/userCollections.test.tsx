import React from "react";
import { ToastContainer } from "react-toastify";
import * as ShallowRenderer from "react-test-renderer/shallow";
import { render } from "@testing-library/react";
import { UserCollections } from "./userCollection";
import { DirectionFacing } from "../models/directionFacing";
import { getDbFromSession } from "../database/plants";

describe("User Collections", () => {
	it("User Collection page renders with loadingState is set to false and no plants avaiable", () => {
		const UserCollection = [
			{
				id: 2,
				directionFacing: DirectionFacing,
				inWindowSeal: true,
				growLight: true,
				lastWaterDate: new Date(),
			},
			{
				id: 3,
				directionFacing: DirectionFacing,
				inWindowSeal: false,
				growLight: true,
				lastWaterDate: new Date(),
			},
		];
		const loadingIsFalse = false;
		//mocking context - set isLoading to false.
		React.useState = jest
			.fn()
			.mockReturnValueOnce([loadingIsFalse, {}])
			.mockReturnValueOnce([UserCollection, {}]);
		const { getByTestId } = render(<UserCollections />);
		expect(getByTestId("userCollectionsOutterContainer")).toBeDefined();
		expect(getByTestId("navBar")).toBeDefined();
		expect(getByTestId("userCollectionItemsTernary")).toBeDefined();
		expect(getByTestId("noPlantsAvailable")).toBeDefined();
	});
	it("User Collection page renders with loadingState is set to true", () => {
		//mocking context - set isLoading to true.
		const loadingIsTrue = true;
		React.useState = jest.fn().mockReturnValueOnce([loadingIsTrue, {}]);
		const { getByTestId } = render(<UserCollections />);
		expect(getByTestId("loadingComponent")).toBeDefined();
	});
	it("User Collection page renders with CollectionBox and loadingState is set to false", () => {});
});
