import React from "react";
import * as ShallowRenderer from "react-test-renderer/shallow";
import { render, fireEvent, screen } from "@testing-library/react";
import { UserCollections } from "./userCollection";
import { CollectionBox } from "../components/collectionBox";
import { DirectionFacing } from "../models/directionFacing";

const UserPlant = {
	name: "plant name",
	id: 1,
	directionFacing: DirectionFacing.north,
	inWindowSeal: true,
	growLight: true,
	lastWaterDate: new Date(),
};
const onClick = jest.fn();

describe("UserCollections", () => {
	it("Should toggle modal to open when the nested components edit button is clicked", () => {
		//set context to be true
		//then set it to false and check if it is not
	});
});
