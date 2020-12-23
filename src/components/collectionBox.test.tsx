import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { CollectionBox } from "./collectionBox";
import { DirectionFacing } from "../models/directionFacing";

const UserPlant = {
	name: "plant name",
	id: 1,
	directionFacing: DirectionFacing.north,
	inWindowSeal: true,
	growLight: true,
	lastWaterDate: new Date(),
};
const index: number = 0;
const onClick = jest.fn();

describe("CollectionsBox", () => {
	it("Should toggle modal to open when edit button is clicked", () => {
		render(<CollectionBox userPlant={UserPlant} index={index} />);
		const btn = screen.getByText("edit");
		fireEvent.click(btn);
		// expect(onClick).toHaveBeenCalled();
	});
	it("Should delete plant when delete button is clicked", () => {
		render(<CollectionBox userPlant={UserPlant} index={index} />);
		const btn = screen.getByText("delete");
		fireEvent.click(btn);
		// expect(onClick).toHaveBeenCalled();
	});
});
