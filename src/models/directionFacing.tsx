export enum DirectionFacing {
	north = "north",
	northEast = "north east",
	northWest = "north west",
	west = "west",
	east = "east",
	south = "south",
	southEast = "south east",
}

export function getDirectionOptions() {
	return Object.values(DirectionFacing);
}
