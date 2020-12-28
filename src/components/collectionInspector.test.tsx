import React from "react";
import { render, screen } from "@testing-library/react";
import { CollectionPageContext } from "../context/pages/userCollections";
import { CollectionInspector } from "./collectionInspector";
import { DirectionFacing } from "../models/directionFacing";

describe("CollectionsInspector", () => {
	const UserCollection = [
		{
			name: "someName",
			id: 2,
			directionFacing: DirectionFacing.west,
			inWindowSeal: true,
			growLight: true,
			lastWaterDate: new Date(),
		},
	];
	it("renders collectionsInspector component", () => {
		const contextValue = {
			index: 1,
			setIndex: jest.fn(),
			deletedPlant: undefined,
			setDeletedPlant: jest.fn(),
			isModalOpen: true,
			setModalOpen: jest.fn(),
			selectedPlant: UserCollection[0],
			setSelectedPlant: jest.fn(),
		};
		render(
			<CollectionPageContext.Provider value={contextValue}>
				<CollectionInspector />
			</CollectionPageContext.Provider>
		);
	});
	expect(screen.getByTestId("collectionInspector")).toBeDefined();
});
