import { capitalizeFirstLetter } from "./upperCaseFirstLetter";

describe("capitalizeFirstLetter function", () => {
	it("First letter of a string is now capitalized", () => {
		const string = "test";
		const capatalizedString = capitalizeFirstLetter(string);
		expect(capatalizedString).toEqual("Test");
	});
});
