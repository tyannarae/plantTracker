export enum DirectionFacing {
	north = "north",
	northEast = "north east",
	northWest = "north west",
	west = "west",
	east = "east",
	south = "south",
	southEast = "south east",
}

export const directionOptions: Array<string> = [];
Object.keys(DirectionFacing).map((direction) =>
	directionOptions.push(direction)
);
