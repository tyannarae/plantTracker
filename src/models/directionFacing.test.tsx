import { getDirectionOptions, DirectionFacing } from "./directionFacing";

describe("getDirectionOptions", () => {
	it("directionOptions array contains all directionFacing keys", () => {
		const directions = getDirectionOptions();
		Object.keys(DirectionFacing).forEach((key) => {
			expect(directions).toContain(DirectionFacing[key]);
		});
		expect(directions.length).toEqual(Object.keys(DirectionFacing).length);
	});
});
