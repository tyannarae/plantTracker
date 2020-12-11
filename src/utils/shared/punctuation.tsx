export const capitalizeFirstLetter = (string: string | undefined) => {
	if (string !== undefined) {
		return string[0].toUpperCase() + string.slice(1);
	}
};
